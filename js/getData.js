const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      personajes(json);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const personajes = (data) => {
  let html = "";

  data.forEach((person) => {
  html +=  '<div class="card" style="width: 18rem;">'
  html +=  '<div class="card-header">'
  html +=   ` ${person.name} `
  html +=  '</div>'
  html +=  '<ul class="list-group list-group-flush">'
  html +=   ` <li class="list-group-item">${person.email}</li> `
  html +=   ` <li class="list-group-item">${person.address.city}</li> `
  html +=  '</ul>'
  html += '</div>'
  html += '<br>'
  });

  document.getElementById("aplication").innerHTML = html;
};

getData(API);
