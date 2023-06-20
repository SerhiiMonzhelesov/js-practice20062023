const elements = {
    form: document.querySelector('.js-form'),
    
}

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const data = {};
    formData.forEach((value, key) => {
       data[key] = value;
    })
    serviceContact(data);
    elements.form.reset()
};

function serviceContact(data) {
    const BASE_URL = 'http://127.0.0.1:3000';
    const END_POINT = '/contact';
    const url = BASE_URL + END_POINT;
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
    "Content-type": 'application/json'
        }
    }
    return fetch(url, options).then(response => {
        if (!response.ok) {
            throw new Error(response.text)
         } response.json
    }).catch(error => console.log(error));
};




