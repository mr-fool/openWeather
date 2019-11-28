const axios = require('axios');

// Open a new connection, using the GET request on the URL endpoint
axios.get( 'http://api.openweathermap.org/data/2.5/forecast?id=5913490&units=metric&cnt=5&APPID=769ad0392e215e9ef6e05f7e41a22700')
.then((response) => {
  console.log(response);
  //window.document.write(response.data.main.temp);
});

