document.addEventListener("DOMContentLoaded", () => {
  populateMountainNames();
  let mountainList = document.getElementById("mountainList");
  mountainList.addEventListener("change", filterMountains);
});

const populateMountainNames = () => {
  let mountainList = document.getElementById("mountainList");
  for (let mountain of mountainsArray) {
    const option = new Option(mountain.name);
    mountainList.appendChild(option);
  }
};

const filterMountains = () => {
  let selectedMountain = document.getElementById("mountainList").value;
  let mountain = mountainsArray.find(
    (mountain) => mountain.name == selectedMountain
  );
  console.log(mountain);
  displayMountainDetails(mountain);
};
const displayMountainDetails = (mountain) => {
  const detailsContainer = document.getElementById("mountainContent");
  detailsContainer.classList.add("mountainContainer");

  detailsContainer.innerHTML = "";

  addMountainName(mountain, detailsContainer);
  addMountainImage(mountain, detailsContainer);
  addMountainDescription(mountain, detailsContainer);
  addMountainElevation(mountain, detailsContainer);
  addMountainEffort(mountain, detailsContainer);
  addCoordinates(mountain, detailsContainer);
};

const addMountainName = (mountain, detailsContainer) => {
  const nameOfMountain = document.createElement("h3");
  nameOfMountain.classList.add("mountainName");
  nameOfMountain.innerText = `Mountain Name: ${mountain.name}`;
  detailsContainer.appendChild(nameOfMountain);
};

const addMountainImage = (mountain, detailsContainer) => {
  // Create a div for the image container
  const mountainImgContainer = document.createElement("div");
  mountainImgContainer.classList.add("mountainImgContainer"); 

  // Create the image element
  const mountainImage = document.createElement("img");
  mountainImage.src = `../images/${mountain.img}`;

  mountainImgContainer.appendChild(mountainImage);
  detailsContainer.appendChild(mountainImgContainer);
};

const addMountainDescription = (mountain, detailsContainer) => {
    const mountainDescription = document.createElement("p");
    mountainDescription.innerText = `Description: ${mountain.desc}`;
    detailsContainer.appendChild(mountainDescription)
}

const addMountainElevation = (mountain, detailsContainer) => {
    const elevation=document.createElement("p");
elevation.innerText=`Elevation: ${mountain.elevation}`;
detailsContainer.appendChild(elevation)
}
const addMountainEffort = (mountain, detailsContainer) => {
    const levelOfEffort = document.createElement("p");
    levelOfEffort.innerText = `Effort: ${mountain.effort}`;
    detailsContainer.appendChild(levelOfEffort)
}
const addCoordinates = (mountain, detailsContainer) => {
    const coordinates = document.createElement("p");
    coordinates.innerText=`Latitude: ${mountain.coords.lat}, Longitude: ${mountain.coords.lng}`;
    detailsContainer.appendChild(coordinates);
}