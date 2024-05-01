import fetch from 'node-fetch';

const url = "https://api.airtable.com/v0/app3Ku7mG7BNTYxiN/tblkxwz3YOFfs18Ki";
const key = 'patOkjkxLOiO5vat6.89f67361b850586c5aae205eca680e908843f6990b334a7127e7ad21cc714e90';

const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + key
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
