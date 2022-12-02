var map = L.map("map").setView([6.8259, 80.9982], 12);

L.tileLayer(
  "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=bVfofDxpzHabPySiaWPO",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

      crossOrigin: true
  }
).addTo(map);

var LeafletIcon = L.Icon.extend({
  options: {
    iconSize : [35, 45],
    iconAnchor : [17, 46],
    popupAnchor : [0, -46],
  }
  // iconUrl: 'Green-Tree.png',
});

const TreeTypeEnum = {
  INVEST: "INVEST",
  ALREADY_INVEST: "ALREADY_INVEST",
  ALREADY_COMPLETED: "ALREADY_COMPLETED"
};

const greenIcon = new LeafletIcon({iconUrl:"assets/img/Map-lifeforce/Green-Tree.png"});
const silverIcon = new LeafletIcon({iconUrl:"assets/img/Map-lifeforce/Silver-Tree.png"});
const goldIcon = new LeafletIcon({iconUrl:"assets/img/Map-lifeforce/Gold-Tree.png"});

mapTrees.countries.forEach(country => {
  country.states.forEach(state => {
    state.districts.forEach(district => {
      district.trees.forEach(tree => {
        var markerIcon = greenIcon;

        if (tree.type === TreeTypeEnum.ALREADY_INVEST) {
          markerIcon = silverIcon;
        } else if (tree.type === TreeTypeEnum.ALREADY_COMPLETED) {
          markerIcon = goldIcon;
        }
        
        let marker = L.marker([tree.latitude, tree.longitude], {icon: markerIcon}).addTo(map);

        if (markerIcon === greenIcon) {
          marker.bindPopup("<h6>Already Invested</h6>");
        } else if (markerIcon === silverIcon) {
          marker.bindPopup("<h6>To be Invest</h6>");
        } else if (markerIcon === goldIcon) {
          marker.bindPopup("<h6>Already Complete 4 years</h6>");
        }
        
      });
    });
  });
});

// var marker2 = L.marker([7.6165, 80.6500], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8222, 81.0133], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8250, 81.0180], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8248, 81.0220], {icon: silverIcon}).addTo(map);
// var marker = L.marker([7.2840, 80.2124], {icon: silverIcon}).addTo(map);
// var marker = L.marker([7.3045, 80.2350], {icon: goldIcon}).addTo(map);
// var marker = L.marker([7.8524, 80.8500], {icon: greenIcon}).addTo(map);

// var marker = L.marker([6.8751, 80.9339], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8749, 80.9337], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8747, 80.9335], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8745, 80.9333], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8743, 80.9331], {icon: greenIcon}).addTo(map);

// var marker = L.marker([6.8747, 80.9339], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8745, 80.9337], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8743, 80.9335], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8741, 80.9333], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8739, 80.9331], {icon: greenIcon}).addTo(map);

// var marker = L.marker([6.8753, 80.9347], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8751, 80.9345], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8749, 80.9343], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8747, 80.9341], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8745, 80.9339], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8743, 80.9339], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8741, 80.9337], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8739, 80.9335], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8737, 80.9331], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8735, 80.9329], {icon: greenIcon}).addTo(map);

// // var marker = L.marker([6.8749, 80.9349], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8747, 80.9347], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8745, 80.9345], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8743, 80.9343], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8741, 80.9341], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8739, 80.9339], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8737, 80.9337], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8735, 80.9335], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8733, 80.9333], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8731, 80.9331], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8729, 80.9329], {icon: greenIcon}).addTo(map);

// var marker = L.marker([6.8745, 80.9349], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8743, 80.9347], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8741, 80.9345], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8739, 80.9343], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8737, 80.9341], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8735, 80.9339], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8733, 80.9337], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8731, 80.9335], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8729, 80.9333], {icon: greenIcon}).addTo(map);
// var marker = L.marker([6.8727, 80.9331], {icon: greenIcon}).addTo(map);


// var marker = L.marker([7.6165, 80.6151], {icon: greenIcon}).addTo(map);
// var marker = L.marker([7.291418, 80.636696]).addTo(map);

// var polygon = L.polygon([
//   [6.8727, 80.9331],
//   [6.8751, 80.9339],
  
 
//   [6.8743, 80.9331],
//   [6.8745, 80.9349],
 
// ]).addTo(map);


// marker.bindPopup("<button>Signin</button>").openPopup();
