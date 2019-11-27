// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=calgary,canada&APPID=769ad0392e215e9ef6e05f7e41a22700', true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
}

// Send request
request.send()