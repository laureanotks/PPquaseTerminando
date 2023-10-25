// verificando conta no banco

async function verificandoConta() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email,
        password
    };

    console.log(data);

    const response = await fetch('http://localhost:3008/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    //localStorage.setItem('token', response.data.data.token)
    const result = await response.json();
    console.log(result);
    alert(result)
    // .then(function(response) {
    //      console.log(response)
    //      alert(email + ' entrou!')

    //      //redirectTime()
    // })
    // .catch(function(err) {
    //     console.log(err)
    //     alert(err);
    // })

}
function redirectTime(){
    //window.location = "https://www.youtube.com/"
 }