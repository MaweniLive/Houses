let properties = [
  {
    id: "1",
    image: "https://i.postimg.cc/43TW9B1G/pexels-binyamin-mellish-1396132.jpg",
    title: "Mordern House",
    type: "house",
    location: "Delft",
    price: "R10 000pm",
    sqFeet: "6 000sqFt",
  },
  {
    Id: "2",
    image: "https://i.postimg.cc/CMJ9VTsq/pexels-max-vakhtbovych-7031414.jpg",
    title: "Mansion",
    type: "Mansion",
    location: "Maitland",
    price: "R30 000",
    sqFeet: "40 000sqFt",
  },
  {
    Id: "3",
    image: "https://i.postimg.cc/SK0vGykw/pexels-alex-azabache-3182439.jpg",
    title: "Jungle House",
    type: "Nature",
    location: "Durben",
    price: "R20 000pm",
    sqFeet: "10 000sqFt",
  },
  {
    Id: "4",
    image: "https://i.postimg.cc/Pqz2zY6w/pexels-aysegul-alp-11283408.jpg",
    title: "Flat",
    type: "Flat",
    location: "Khayelitsha",
    price: "R7 000",
    sqFeet: "3 000sqFt",
  },
  {
    Id: "5",
    image: "https://i.postimg.cc/wMBfBMQs/pexels-graphicgumcom-1115804.jpg",
    title: "Apertment",
    type: "Apertment",
    location: "Clermont",
    price: "R25 000pm",
    sqFeet: "15 000sqFT",
  },
  {
    Id: "6",
    image: "https://i.postimg.cc/wvqFWMPb/pexels-max-vakhtbovych-7031594.jpg",
    title: "Mansion",
    type: "Mansion",
    location: "Cape Town",
    price: "35 000pm",
    sqFeet: "45 000sqFt",
  },
];

const forSaleContainer= document.getElementById("cards");

function showProperties(){
  forSaleContainer.innerHTML ="";
  properties.forEach((property) => {
  forSaleContainer.innerHTML += `
  <div class="card rounded-2 col-md-4">
              <img
                src=${property.image}
                class="card-img-top"
                alt="Image of ${property.title}"
              />
              <div class="card-body">
                <div class="card-text">
                  <h3 id="title">${property.title}</h3>
                  <h4 id="location" class="text-muted d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-location-dot me-1" title="Location of property"></i>
                    ${property.location}
                  </h4>
                  <div id="type" class="d-flex align-items-baseline">
                  <i class="fa-solid fa-house me-1" title="Type of Property"></i>
                    <p id="typeOutput">${property.type}</p>
                  </div>
                  <div id="sqFt" class="d-flex align-items-baseline">
                  <i class="fa-solid fa-ruler me-1" title="Square Feet"></i>
                    <p id="sqFtOutput">${property.sqFeet}</p>
                  </div>
                  <div id="price" class="d-flex align-items-baseline">
                    <i class="fa-solid fa-coins me-1" title="Price"></i>
                    <p id="priceOutput">${property.price}</p>
                  </div>
                </div>
              </div>
            </div>
  `;
})
};

showProperties();
