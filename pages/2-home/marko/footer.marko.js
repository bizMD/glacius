function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<footer class=\"footer\" role=\"contentinfo\"> <div class=\"footer-logo\"> <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png\" alt=\"Logo image\"> </div> <div class=\"footer-links\"> <ul> <li><h3>Content</h3></li> <li><a href=\"javascript:void(0)\">About</a></li> <li><a href=\"javascript:void(0)\">Contact</a></li> <li><a href=\"javascript:void(0)\">Products</a></li> </ul> <ul> <li><h3>Follow Us</h3></li> <li><a href=\"javascript:void(0)\">Facebook</a></li> <li><a href=\"javascript:void(0)\">Twitter</a></li> <li><a href=\"javascript:void(0)\">YouTube</a></li> </ul> <ul> <li><h3>Legal</h3></li> <li><a href=\"javascript:void(0)\">Terms and Conditions</a></li> <li><a href=\"javascript:void(0)\">Privacy Policy</a></li> </ul> </div> <hr> <p>Disclaimer area lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, nostrum repudiandae saepe.</p> </footer>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
