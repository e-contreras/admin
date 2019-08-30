import React, { Component } from 'react'
import axios from 'axios';


export default class Login extends Component {
    
    componentDidMount() {
        const form = document.getElementById("login");
        const submit = document.getElementById("submit");
        form.addEventListener("Submit", this.authenticate);
        submit.addEventListener("click", this.authenticate);
    }

    authenticate(event) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var encodeClientCredentials = window.btoa('HdE6lFif_fdxcUgRfJswpESbrjIa' + ':' + 'Ssqa6wmk0vE161flpEojVkyvAkka');
        var authHeader = 'Basic '+encodeClientCredentials;
        var data = JSON.stringify({
            grant_type: "password",
            username: username,
            password:password
        });
        axios.post("https://192.168.0.4:8243/token",data, {
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            window.localStorage.setItem('access_token', JSON.stringify(response.data));
        }).catch((error) => {
            console.log(Promise.reject(error));
        });
    }

    render() {
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form id="login">
                            <div className="form-group has-feedback">
                                <input id="username" type="text" className="form-control" placeholder="Username" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input id="password" type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                            <input type="checkbox" /> Remember Me
              </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-xs-4">
                                    <button type="submit" id="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                        </div>
                        {/* /.social-auth-links */}
                        <a href="register.html" className="text-center">Register a new membership</a>
                    </div>
                    {/* /.login-box-body */}
                </div>
                {/* /.login-box */}
            </div>

        )
    }
}
