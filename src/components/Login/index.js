import React, { Component } from 'react';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    Col
} from 'react-bootstrap';
import Notifications, { notify } from 'react-notify-toast';
import cookie from 'react-cookies';
import './login.css';
import history from '../../core/history';
import getOwnerCredentials from '../../core/authentication';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre_usuario: "",
            contrasenha: ""
        }
    }

    componentWillMount() {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        var userEnSesion = cookie.load('userEnSesion');
        if (userEnSesion !== undefined) {
            history.push('/');
        }
    }


    render() {
        return (

            <div className="login-box">
                <div className="login-logo">
                    <span><b>E</b>Contreras</span>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Iniciar su sesión</p>
                    <Notifications />
                    <Form>
                        <FormGroup controlId="formUsername">
                            <Col className="form-group has-feedback">
                                <FormControl
                                    type="text" placeholder="Usuario"
                                    value={this.state.nombre_usuario}
                                    onChange={this.changeNombre.bind(this)} />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formPassword">
                            <Col className="form-group has-feedback">
                                <FormControl className="form-control" type="password" placeholder="Contraseña" value={this.state.contrasenha}
                                    onChange={this.changeContrasenha.bind(this)} />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </Col>
                        </FormGroup>

                        <FormGroup className="row">
                            <div className="col-xs-12">
                                <div className="checkbox icheck">
                                </div>
                                <Col className="col-xs-4">
                                    <Button className="btn btn-primary btn-block btn-flat" type="submit" onClick={this.handleLogin.bind(this)}>Ingresar</Button>
                                </Col>
                                <Col>
                                    <a href="/">Recupera tu contraseña</a>
                                </Col>
                            </div>
                        </FormGroup>

                    </Form>
                </div>
            </div>
        );
    }

    changeNombre(e) {
        this.setState({
            nombre_usuario: e.target.value
        });
    }

    changeContrasenha(e) {
        this.setState({
            contrasenha: e.target.value
        });
    }

    handleLogin(e) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        e.preventDefault();
        getOwnerCredentials(this.state.nombre_usuario, this.state.contrasenha);
        let token = localStorage.getItem("token");
        if (!token || token.expires_in <= 0) {
            notify.show("Credenciales inválidas", "error");
            return;
        }
        return <Redirect to="/mercaderias" />
        //history.push("/mercaderias");

    }
}