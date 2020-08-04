function getDataFromApi(json) {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: json,
        headers: {
            'content-type': 'application/json',
        },
    })
        .then(function (resp) {
            console.log('def')
            return resp.json();
        })
}

export default getDataFromApi;