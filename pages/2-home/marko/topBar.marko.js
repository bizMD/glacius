function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<header class=\"navigation\" role=\"banner\"> <div class=\"navigation-wrapper\"> <a href=\"javascript:void(0)\" class=\"logo\"> <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png\" alt=\"Logo Image\"> </a> <a href=\"javascript:void(0)\" class=\"navigation-menu-button\" id=\"js-mobile-menu\">MENU</a> <nav role=\"navigation\"> <ul id=\"js-navigation-menu\" class=\"navigation-menu show\"> <li class=\"nav-link\"><a href=\"javascript:void(0)\">Products</a></li> <li class=\"nav-link\"><a href=\"javascript:void(0)\">About Us</a></li> <li class=\"nav-link\"><a href=\"javascript:void(0)\">Contact</a></li> <li id=\"js-navigation-more\" class=\"nav-link more\"><a href=\"javascript:void(0)\">More</a> <ul class=\"submenu\"> <li><a href=\"javascript:void(0)\">Submenu Item</a></li> <li><a href=\"javascript:void(0)\">Another Item</a></li> <li class=\"more\"><a href=\"javascript:void(0)\">Item with submenu</a> <ul class=\"submenu\"> <li><a href=\"javascript:void(0)\">Sub-submenu Item</a></li> <li><a href=\"javascript:void(0)\">Another Item</a></li> </ul> </li> <li class=\"more\"><a href=\"javascript:void(0)\">Another submenu</a> <ul class=\"submenu\"> <li><a href=\"javascript:void(0)\">Sub-submenu</a></li> <li><a href=\"javascript:void(0)\">An Item</a></li> </ul> </li> </ul> </li> </ul> </nav> </div> </header>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);