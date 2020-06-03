var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () {
  console.log("Recieved");
  console.log("*******************");
  const data = JSON.parse(this.responseText);
  let filmUrl = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    // console.log(this.responseText);
    const movieData = JSON.parse(this.responseText);
    console.log(movieData);
  });
  filmReq.addEventListener("error", function () {
    console.log("error in movie api");
  });
  filmReq.open("GET", `${filmUrl}`);
  filmReq.send();

  //   for (let data of result.results) {
  //     console.log(data.name);
  //   }
});
oReq.addEventListener("error", () => {
  console.log("error");
});
oReq.open("GET", "https://swapi.dev/api/planets/");
oReq.send();
console.log("Request Send");
