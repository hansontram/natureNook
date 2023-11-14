document.addEventListener("DOMContentLoaded", () =>{
    
    populateLocations(locationsArray)
})

let populateLocations = (locationsArray) => {
    const locationList = document.getElementById("locationList")
    console.log(locationList, locationsArray)
    // trigger function on change
    // locationList.onchange = locationSelectionChanged

    for (let location of locationsArray) {
        // creates new option element
        const option = new Option(location);
        locationList.appendChild(option);
      }
}