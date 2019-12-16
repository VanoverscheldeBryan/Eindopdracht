navigator.geolocation.getCurrentPosition(async function(position) {
  let lat = position.coords.latitude.toFixed(1);
  let lon = position.coords.longitude.toFixed(1);

  //fetchData(lat, lon);
  console.log(lat, lon);

  const api_url = `https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lon}&key=148c8971ac0140598c07a2f0ad5264bc`;
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.data[0].timezone);
  document.getElementById('place').innerHTML = data.data[0].city_name;
  document.getElementById('timezone').innerHTML = data.data[0].timezone;
  document.getElementById('sunrise').innerHTML = data.data[0].sunrise;
  document.getElementById('sunset').innerHTML = data.data[0].sunset;

  document.getElementById('temperature').innerHTML = data.data[0].temp + '&deg' + 'C';

  document.getElementById('date').innerHTML = data.data[0].datetime.slice(0, 10);
  document.getElementById('condition').innerHTML = data.data[0].weather.description;

  document.getElementById('icon').src = 'img/' + data.data[0].weather.icon + '.png';
});
