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
};

// Functions to add park details

const addParkName = (park, parkDiv) => {
  // Create the park info div
  const parkInfoContainer = document.createElement("div");
  parkDiv.appendChild(parkInfoContainer);

  // Add park name
  const parkHeader = document.createElement("h4");
  parkHeader.innerText = park.LocationName;

  parkInfoContainer.appendChild(parkHeader)
};
