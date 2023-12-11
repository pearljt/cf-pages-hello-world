export function onRequest(context) {
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>Hello, world!</h1>
        <iframe src="/test.html" width="100%" height="40px"></iframe>
      </body>
    </html>
    `,
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    }
  );
}
