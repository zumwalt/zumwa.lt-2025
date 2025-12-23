import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const pathname = context.url.pathname;
  
  // Check if the path starts with /2012/ or is exactly /2012
  if (pathname === '/2012' || pathname.startsWith('/2012/')) {
    // Remove /2012 prefix and ensure path starts with /
    const targetPath = pathname === '/2012' 
      ? '/' 
      : pathname.replace(/^\/2012/, '');
    
    const targetUrl = new URL(targetPath + context.url.search, 'https://zumwalt.github.io');
    
    try {
      // Fetch from the external URL and return the response
      const response = await fetch(targetUrl.toString());
      
      if (!response.ok) {
        console.error(`Failed to fetch ${targetUrl.toString()}: ${response.status}`);
        return next();
      }
      
      const body = await response.text();
      const headers = new Headers(response.headers);
      
      // Ensure we're not caching during development
      if (import.meta.env.DEV) {
        headers.set('Cache-Control', 'no-cache');
      }
      
      return new Response(body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers,
      });
    } catch (error) {
      console.error(`Error fetching ${targetUrl.toString()}:`, error);
      return next();
    }
  }
  
  // Continue with normal request handling
  return next();
};

