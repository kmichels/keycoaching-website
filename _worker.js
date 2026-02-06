export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect www to non-www
    if (url.hostname === 'www.keycoaching.co') {
      url.hostname = 'keycoaching.co';
      return Response.redirect(url.toString(), 301);
    }

    // Pass through to Pages static assets
    return env.ASSETS.fetch(request);
  },
};
