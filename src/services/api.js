function getDataFromApi(json) {
  return fetch(
    'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/',
    {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json',
      },
    }
  ).then((resp) => {
    return resp.json();
  });
}

export default getDataFromApi;
