process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const $ = require("jquery");

function getOwnerCredentials(username, password) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    $.ajax({
        type: 'post',
        url: 'https://localhost:8243/token',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            grant_type: 'password',
            client_id: 'HdE6lFif_fdxcUgRfJswpESbrjIa',
            client_secret: 'Ssqa6wmk0vE161flpEojVkyvAkka',
            username: username,
            password: password
           
        },
        success : function(data){
            console.log(data)
            localStorage.setItem("token", JSON.stringify(data));
            return data;
        },
        error: function(data){
            console.log(data);
            localStorage.removeItem("token");
            return data;
        }
    });
}

//     var auth = axios({
//         method: 'post',
//         url: 'https://localhost:8243/token',
//         headers: {
//             'Access-Control-Allow-Origin': 'http://localhost:3000',
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data: {
//             grant_type: 'password',
//             client_id: 'HdE6lFif_fdxcUgRfJswpESbrjIa',
//             client_secret: 'Ssqa6wmk0vE161flpEojVkyvAkka',
//             username: username,
//             password: password
           
//         }
//     }).then(response => {
//         console.log(response.data)
//         return response.data;
//     }).catch((error) => {
//         console.log(error)
//     });
// }


export default getOwnerCredentials;
