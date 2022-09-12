var map = L.map("map").setView([6.8259, 80.9982], 10);

L.tileLayer(
  "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=bVfofDxpzHabPySiaWPO",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

      crossOrigin: true
  }
).addTo(map);

var leafletIcon = L.icon({
  iconUrl: 'Green-Tree.png',
  iconSize : [35, 45],
  iconAnchor : [17, 46],
  popupAnchor : [0, -46],
})

var marker = L.marker([7.291418, 80.636696], {icon: leafletIcon}).addTo(map);
// var marker = L.marker([7.291418, 80.636696]).addTo(map);

var polygon = L.polygon([
  [6.8878, 79.9180],
  [6.8888, 79.9173],
  [6.8898, 79.9166],
  [6.8908, 79.9159]
]).addTo(map);

marker.bindPopup("For more details please login <br>to the LifeForce application<br><br><button>SignIn</button> <button>SignUp</button> <button>Cancle</button>").openPopup();
// marker.bindPopup("<button>Signin</button>").openPopup();
