document.addEventListener("DOMContentLoaded", () =>{
    populateMountainNames();
    let mountainList = document.getElementById("mountainList")
    mountainList.addEventListener("change", filterMountains)
})

const populateMountainNames = () => {
    let mountainList = document.getElementById("mountainList")
    for (let mountain of mountainsArray){
        const option = new Option (mountain.name);
        mountainList.appendChild(option)
    }
}

const filterMountains = () => {
    let selectedMountain = document.getElementById("mountainList").value
    let mountain = mountainsArray.find(mountain => mountain.name == selectedMountain)

    displayMountainDetails(mountain)
      
}
const displayMountainDetails = (mountain) => {
    const detailsContainer =document.getElementById("content");
    detailsContainer.classList.add("mountainContainer")
}