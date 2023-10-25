// registrando conta no banco

function createAccout() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        username,
        email,
        password
    };

    fetch('http://localhost:3008/api/user/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        console.log(response)
    })
    .catch(function(err) {
        alert(err);
    })
}

