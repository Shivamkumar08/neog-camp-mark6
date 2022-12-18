var inputBox = document.querySelector('#input-box');
var outputBox = document.querySelector('#output-box')
var button = document.querySelector('#translate-btn');

var serverURL = "	https://api.funtranslations.com/translate/minion.json";

function getTranlationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log('error occured while fetching api ', error)
}

function btnClickedHandler() {
  var inputText = inputBox.value;
  fetch(getTranlationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputBox.innerText = translatedText
    })
    .catch(errorHandler)
}
// button code
button.addEventListener('click', btnClickedHandler)

