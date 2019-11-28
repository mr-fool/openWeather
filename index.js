function loaded() {
  document.getElementById("weatherform").addEventListener("submit",
          function(event) {
              event.preventDefault();

          });
}

window.addEventListener("load", loaded, false);

var city = document.getElementById('city');
var country = document.getElementById('country');
// Open a new connection, using the GET request on the URL endpoint
axios.get( 'http://api.openweathermap.org/data/2.5/forecast?q='+ city.value + "," + country.value + '&units=metric&cnt=5&APPID=769ad0392e215e9ef6e05f7e41a22700')
.then((response) => {
  var i;
  for ( i = 0; i < 5; i ++) {
    var tomorrow = new Date();
    //tomorrow.setDate(tomorrow.getDate() + i); //can't figure out how to set local time instead to format 2019-month-day
    //console.log(tomorrow); 
    console.log(response.data.list[i].main.temp);
   //document.write(response.data.list[i].main.temp);
  }
  //console.log(response.data.list[1].main.temp);
});

