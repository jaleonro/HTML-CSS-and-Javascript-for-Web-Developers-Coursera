(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var index = 0; index < names.length; index++) {
  var name = names[index];
  var firstLetter = name.charAt(0).toLowerCase();
  if (firstLetter == 'j') {
    byeSpeaker.speak(name);
  }
  else {
    helloSpeaker.speak(name);
  }
}

})();