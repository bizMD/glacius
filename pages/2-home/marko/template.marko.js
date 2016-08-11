function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      loadTemplate = __helpers.l,
      __topBar = loadTemplate(require.resolve("./topBar.marko")),
      __banner = loadTemplate(require.resolve("./banner.marko")),
      __upperBody = loadTemplate(require.resolve("./upperBody.marko")),
      __footer = loadTemplate(require.resolve("./footer.marko"));

  return function render(data, out) {
    out.w("<!DOCTYPE html5> <html> <head> <title>Aircotek Appliance Services</title> <link rel=\"stylesheet\" href=\"/assets/css\"> </head> <body> <section class=\"pageBody\"> <section class=\"topBar full-width\"> ");

    __topBar.render({}, out);

    out.w(" </section> <section class=\"topBanner full-width\"> ");

    __banner.render({}, out);

    out.w(" </section> <section class=\"midCards full-width top-margin\"> ");

    __upperBody.render({}, out);

    out.w(" </section> <section class=\"bottomFooter full-width top-margin\"> ");

    __footer.render({}, out);

    out.w(" </section> </section> <script type=\"text/javascript\" src=\"/assets/js\"></script> </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
