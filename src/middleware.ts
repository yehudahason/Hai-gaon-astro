import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/forum")) {
    const target = `http://host.docker.internal:3333${url.pathname}${url.search}`;
    const method = context.request.method;

    const headers = new Headers(context.request.headers);

    let body: BodyInit | undefined;

    if (method !== "GET" && method !== "HEAD") {
      const buf = await context.request.arrayBuffer();
      body = buf;
      headers.delete("content-length");
    }

    try {
      return await fetch(target, { method, headers, body });
    } catch (err) {
      console.error("Proxy error:", err);
      return new Response("Forum backend unreachable", { status: 502 });
    }
  }

  return next();
};
