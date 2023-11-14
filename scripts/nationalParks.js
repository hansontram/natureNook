document.addEventListener("DOMContentLoaded", () => {
  populateLocations(locationsArray);
  displayAllParks(nationalParksArray);
});

const populateLocations = (locationsArray) => {
  const locationList = document.getElementById("locationList");

  // trigger function on change
  // locationList.onchange = locationSelectionChanged

  for (let location of locationsArray) {
    // creates new option element
    const option = new Option(location);
    locationList.appendChild(option);
  }
};

const displayAllParks = (nationalParksArray) => {
  const parksContainer = document.querySelector("#content");
  // clear all elements
  parksContainer.innerHTML = "";

  nationalParksArray.forEach((park) => {
    displayPark(park, parksContainer);
    console.log(park.LocationName);
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
  addState(park,parkContainer);
  addZipCode(park,parkContainer);
  addPhone(park,parkContainer);
  addFax(park,parkContainer);
//   addLatitude(park,parkContainer);
//   addLongitude(park,parkContainer);
};

// Functions to add park details

const addParkName = (park, parkDiv) => {
  // Create the park info div
  //   const parkInfoContainer = document.createElement("div");
  //   parkDiv.appendChild(parkInfoContainer);

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
    const cityOfPark = document.createElement("p")
    cityOfPark.innerText = `City: ${park.City}`
    parkDiv.appendChild(cityOfPark)
}

const addState = (park, parkDiv) => {
    const stateOfPark = document.createElement("p");
    stateOfPark.innerText = `State: ${park.State}`;
    parkDiv.appendChild(stateOfPark);
  };

const addZipCode = (park, parkDiv) => {
    const zipOfPark=document.createElement("p");
    zipOfPark.innerText= `Zip Code: ${park.ZipCode}`;
    parkDiv.appendChild(zipOfPark);
}

const addPhone = (park, parkDiv) => {
    const phoneOfPark=document.createElement("p");
    phoneOfPark.innerText= `Phone: ${park.Phone}` ;
    parkDiv.appendChild(phoneOfPark);
}

const addFax = (park,parkDiv) =>{
    const faxOfPark=document.createElement("p");
    faxOfPark.innerText=`Fax: ${park.Fax}`;
    parkDiv.appendChild(faxOfPark);
}

// function addLatitude(park,parkDiv){
//     const parkLatitude=document.createElement("p");
//     parkLatitude.innerText="Latitude: "+park.Latitude;
//     parkDiv.appendChild(parkLatitude);
// }

// function addLongitude(park,parkDiv){
//     const parkLongitude=document.createElement("p");
//     parkLongitude.innerText="Longitude: "+park.Longitude;
//     parkDiv.appendChild(parkLongitude);}