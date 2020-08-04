function getDataFromApi(json) {
  const data = {
    palette: 1,
    name: "María García",
    job: "Front-end developer",
    phone: "+34 666666666",
    email: "mariagar@example.com",
    linkedin: "mariagar",
    github: "mariagar",
    photo: "data:image/png;base64,2342ba...",
  };

  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then(function (resp) {
    console.log("llegoooo");
    return resp.json();
  });
}

export default getDataFromApi;
