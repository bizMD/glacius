function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"hero\"> <div class=\"hero-content\"> <img src=\"http://beautyharmonylife.com/wp-content/uploads/2016/05/Air-Conditioner.jpg\" alt=\"Logo Image\" class=\"hero-logo\"> <p>Aircotek Appliance Services</p> <span>Your choice air conditioning and refrigeration service center</span> </div> </div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
