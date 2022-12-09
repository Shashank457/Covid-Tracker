const country = document.getElementById("map").dataset.countryname;
// const totalcases = document.getElementById("map").dataset.cases;
// if (totalcases >= 150000) {
mapboxgl.accessToken =
  "pk.eyJ1IjoicmlzaGFiaG1hdGh1cjE5IiwiYSI6ImNrcDZrbzR3ajAyYncyb29pZGpsbTZjd3IifQ.nLsNT3f1EiEf9p83PB-zbg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  zoom: 1.6,
});
const getCount = (count) => {
  if (count > 150000) {
    return "red";
  } else if (count < 100000) {
    return "green";
  } else {
    return "blue";
  }
};
const bounds = new mapboxgl.LngLatBounds();
if (country) {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        if (el.country == country) {
          new mapboxgl.Marker({
            color: getCount(el.cases),
            // element: el,
            // anchor: "bottom",
          })
            .setLngLat([el.countryInfo.long, el.countryInfo.lat])
            .addTo(map);
          new mapboxgl.Popup({
            offset: 30,
          })
            .setLngLat([el.countryInfo.long, el.countryInfo.lat])
            .addTo(map);
        }
      });
    });
} else {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        new mapboxgl.Marker({
          color: getCount(el.cases),
          // element: el,
          // anchor: "bottom",
        })
          .setLngLat([el.countryInfo.long, el.countryInfo.lat])
          .addTo(map);
        new mapboxgl.Popup({
          offset: 30,
        })
          .setLngLat([el.countryInfo.long, el.countryInfo.lat])
          .addTo(map);
      });
    });
}
map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
