export async function onRequest(context) {
  const imageUrl =
    'ththth (1).gif';

  const response = await fetch(imageUrl);

  if (!response.ok) {
    return new Response('GIF fetch failed', {
      status: 502,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }

  const gif = await response.arrayBuffer();

  return new Response(gif, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': String(gif.byteLength),
      'Cache-Control': 'public, max-age=3600',
      'Content-Disposition': 'inline'
    }
  });
}
