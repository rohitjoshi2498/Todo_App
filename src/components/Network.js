//Cookie Functions
var _createCookie = function (name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + ";path=/";
};

var _readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return false;
};

var _eraseCookie = function (name) {
  document.cookie =
    name + "=; Path=/app; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  _createCookie(name, "", -1);
};

export { _createCookie, _readCookie, _eraseCookie };
