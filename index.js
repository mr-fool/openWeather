function loaded() {
  document.getElementById("weatherform").addEventListener("submit",
          function(event) {
              event.preventDefault();
              var city = document.getElementById('city');
              var countryCode = document.getElementById('countryCode');
              // Open a new connection, using the GET request on the URL endpoint
              axios.get( 'http://api.openweathermap.org/data/2.5/forecast?q='+ city.value + "," + countryCode.value + '&units=metric&cnt=5&APPID=769ad0392e215e9ef6e05f7e41a22700')
              .then((response) => {
                var i;
                for ( i = 0; i < 5; i ++) {
                  //var tomorrow = new Date();
                  //tomorrow.setDate(tomorrow.getDate() + i); //can't figure out how to set local time instead to format 2019-month-day
                  //console.log(tomorrow); 
                  var day = i + 1;
                  document.write("Day " + day +"<br>");
                  console.log(response.data.list[i].main.temp);
                  document.write("Temperature " + response.data.list[i].main.temp + "C" + "<br>");
                  console.log(response.data.list[i].weather[0].main);
                  document.write("Precipitation " + response.data.list[i].weather[0].main + "<br><br>");
                }
                //console.log(response.data.list[1].main.temp);
              });
          });
}

window.addEventListener("load", loaded, false);

