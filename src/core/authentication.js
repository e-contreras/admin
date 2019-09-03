process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const $ = require("jquery");

const clientId = "HdE6lFif_fdxcUgRfJswpESbrjIa";
const clientSecret = "Ssqa6wmk0vE161flpEojVkyvAkka";
const authBasic = "Basic "+btoa(clientId+":"+clientSecret);

/**
 * Obtiene un token de acceso y lo deposita en el localStore,
 * el cual será utilizado en toda la aplicación para invocar a los servicios 
 * necesaarios
 * @param {Usuario} username 
 * @param {Contrasenha} password 
 */
export function getOwnerCredentials(username, password) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    $.ajax({
        async:false,
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

/**
 * Invoca al servicio revock token y lo remueve del 
 * localstore una vez que el usuario haya cerrado sección
 */
export function revokeToken(){
    let token = JSON.parse(localStorage.getItem("token"));
    let access_token = token.access_token;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    $.ajax({
        async:false,
        type: 'post',
        url: 'https://localhost:8243/revoke',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': authBasic
        },
        data: {
            token: access_token,
            token_type_hint:"access_token"
           
        },
        success : function(data){
            console.log(data)
            localStorage.removeItem("token");
            window.location.reload();
        },
        error: function(data){
            console.log(data);
            localStorage.removeItem("token");
            window.location.reload();
        }
    });

}

export default {revokeToken, getOwnerCredentials}
