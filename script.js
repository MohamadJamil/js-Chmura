const api_url ="https://switch-yam-equator.azurewebsites.net/api/movies?title=Mindwarp";
const headerParams = {'x-chmura-cors':'10a3d424-43b4-47e0-b98e-0c6ff99b2cca'}
const apiUrl= "https://switch-yam-equator.azurewebsites.net/api/actors?actorId=115";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url, {headers:headerParams});
    movies = [];
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        hideloader();
    }
    // show(data);
    var movies ={};
    const array = Object.values(data);
    for (let i = 0; i<data.length; i++){
      if (array[i]['actors'].includes(115) || (array[i]['actors'].includes(206))){
        movies [(array[i]['title'])] = [(array[i]['actors'])]
      }
    }



    show(Object.entries(movies))

}
// Calling that async function
getapi(api_url, {headers: headerParams});

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
function show(movies) {
    let tab =
        `<tr>
          <th>title</th>
          <th>actors</th>
         </tr>`;

    // Loop to access all rows
    for (const [title, actors] of Object.entries(movies)) {
        tab += `<tr>
    <td>${actors[0]} </td>
    <td>${actors[1]}</td>

</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Actors").innerHTML = tab;
}
