
function serviceRequest() {
    const BASE_URL = 'http://127.0.0.1:3000';
    const END_POINT = '/requests';
    const url = BASE_URL + END_POINT;

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    });
}

serviceRequest().then(data => {
    data.map(({ id, name, phone, message }) => {
        return `<li class="js-item">
        <h3></h3>
        <h3></h3>
        <h3></h3>
    </li>`
    }).join('');
})






