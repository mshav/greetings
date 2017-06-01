function greeting(name) {
  return "Hello, " + name;
  return 'Hello, ' + name
}
greeting("Cara");
greeting("Luba")


var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();


// createMessage("Afrikaans");
// createMessage("Xhosa")

function createMessage(language, usename) {
  if (language === "English") {
    return "Hello, " + usename;

  } else if (language === "Xhosa") {
    return "Molo, " + usename;
  } else if (language === "Afrikaans") {
    return "Hallo, " + usename;
  }
  else {

  return undefined;
  }
}
createMessage();
