document.addEventListener("DOMContentLoaded", () => {
  populateLocations();
  populateParkTypes();

  let locationSelect = document.getElementById("locationList");
  locationSelect.addEventListener("change", filterParksByLocationAndType);

  let parkTypeSelect = document.getElementById("parkTypeList");
  parkTypeSelect.addEventListener("change", filterParksByLocationAndType);
});

const populateLocations = () => {
  const locationList = document.getElementById("locationList");



  for (let location of locationsArray) {
    const option = new Option(location);
    locationList.appendChild(option);
  }
};

const populateParkTypes = () => {
  const parkTypeList = document.getElementById("parkTypeList");
  for (let type of parkTypesArray) {
    const option = new Option(type);
    parkTypeList.appendChild(option);
  }
};

const filterParksByLocationAndType = () => {
  let locationSelect = document.getElementById("locationList").value;
  let typeSelected = document.getElementById("parkTypeList").value;

  let filteredParks = nationalParksArray;

  if (locationSelect !== "Show All" && locationSelect !== "Select A State") {
    filteredParks = filteredParks.filter(
      (park) => park.State == locationSelect
    );
  }

  if (typeSelected !== "Show All" && typeSelected !== "Select A Type") {
    filteredParks = filteredParks.filter((park) =>
      park.LocationName.includes(typeSelected)
    );
  }

  // Check if the resulting array is empty
  if (filteredParks.length === 0) {
    displayNoResultsMessage();
  } else {
    displayAllParks(filteredParks);
  }
};

const displayNoResultsMessage = () => {
  const parksContainer = document.querySelector("#content");
  parksContainer.innerHTML = ""; // Clear previous content

  const noResultsMessage = document.createElement("p");
  noResultsMessage.classList.add("noResultsText");
  noResultsMessage.innerText =
  "Oops! You're lost in the wild. 🌿 \n Try different options.";

  parksContainer.appendChild(noResultsMessage);
};

const displayAllParks = (nationalParksArray) => {
  const parksContainer = document.querySelector("#content");
  // clear all elements
  parksContainer.innerHTML = "";

  nationalParksArray.forEach((park) => {
    displayPark(park, parksContainer);
  });
};

const displayPark = (park, parkDiv) => {
  // Create a div for each park
  const parkContainer = document.createElement("div");
  parkContainer.classList.add("parkContainer");

  parkDiv.appendChild(parkContainer);

  // call functions to add details
  addParkName(park, parkContainer);

  addParkAddress(park, parkContainer);
  addCity(park, parkContainer);
  addState(park, parkContainer);
  addZipCode(park, parkContainer);
  addPhone(park, parkContainer);
  addFax(park, parkContainer);
    addLatitude(park,parkContainer);
    addLongitude(park,parkContainer);
  if(park.Visit){
    addLinkOfPark(park, parkContainer)
}


};

// Functions to add park details
const addParkName = (park, parkDiv) => {

  // Add park name
  const parkHeader = document.createElement("h4");
  parkHeader.innerText = park.LocationName;

  parkDiv.appendChild(parkHeader);
};

const addParkAddress = (park, parkDiv) => {
  const parkAddress = document.createElement("p");
  parkAddress.innerText = `Address: ${park.Address}`;
  parkDiv.appendChild(parkAddress);
};

const addCity = (park, parkDiv) => {
  const cityOfPark = document.createElement("p");
  cityOfPark.innerText = `City: ${park.City}`;
  parkDiv.appendChild(cityOfPark);
};

const addState = (park, parkDiv) => {
  const stateOfPark = document.createElement("p");
  stateOfPark.innerText = `State: ${park.State}`;
  parkDiv.appendChild(stateOfPark);
};

const addZipCode = (park, parkDiv) => {
  const zipOfPark = document.createElement("p");
  zipOfPark.innerText = `Zip Code: ${park.ZipCode}`;
  parkDiv.appendChild(zipOfPark);
};

const addPhone = (park, parkDiv) => {
  const phoneOfPark = document.createElement("p");
  phoneOfPark.innerText = `Phone: ${park.Phone}`;
  parkDiv.appendChild(phoneOfPark);
};

const addFax = (park, parkDiv) => {
  const faxOfPark = document.createElement("p");
  faxOfPark.innerText = `Fax: ${park.Fax}`;
  parkDiv.appendChild(faxOfPark);
};

function addLatitude(park,parkDiv){
    const parkLatitude=document.createElement("p");
    parkLatitude.innerText="Latitude: "+park.Latitude;
    parkDiv.appendChild(parkLatitude);
}

function addLongitude(park,parkDiv){
    const parkLongitude=document.createElement("p");
    parkLongitude.innerText="Longitude: "+park.Longitude;
    parkDiv.appendChild(parkLongitude);}

const addLinkOfPark = (park,parkDiv) => {
  const parkLink = document.createElement("a")
  parkLink.classList.add("linkOfPark");
  parkLink.href = park.Visit;

  parkLink.textContent = "🔗 More info";
  parkLink.target = "_blank"
  parkDiv.appendChild(parkLink)

  console.log(park.Visit)
}