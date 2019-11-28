const axios = require('axios');

// Open a new connection, using the GET request on the URL endpoint
axios.get( 'http://api.openweathermap.org/data/2.5/forecast?id=5913490&units=metric&cnt=5&APPID=769ad0392e215e9ef6e05f7e41a22700')
.then((response) => {
  var i;
  for ( i = 0; i < 5; i ++) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());
    console.log(tomorrow);
    console.log(response.data.list[i].main.temp);
    //document.write(response.data.main.temp);
  }
  //console.log(response.data.list[1].main.temp);
});

