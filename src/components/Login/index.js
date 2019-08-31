import React, { Component } from 'react';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    Col,
    FormLabel
} from 'react-bootstrap';
import Notifications, { notify } from 'react-notify-toast';
import cookie from 'react-cookies';
import { login } from '../../core/funcionesServerRequest';
import './login.css';

export default class Login extends Component {

    constructor(props, context) {
        super(props);
        this.state = {
            nombre_usuario: "",
            contrasenha: ""
        }
    }

    componentWillMount() {
        var userEnSesion = cookie.load('userEnSesion');
        if (userEnSesion !== undefined) {
            this.props.history.push('/');
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
                            <Col className="form-group has-feedback" componentClass={FormLabel}>
                                <FormControl
                                    type="text" placeholder="Usuario"
                                    value={this.state.nombre_usuario}
                                    onChange={this.changeNombre.bind(this)} />
                                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formPassword">
                            <Col className="form-group has-feedback" componentClass={FormLabel}>
                                <FormControl className="form-control" type="password" placeholder="Contraseña" value={this.state.contrasenha}
                                    onChange={this.changeContrasenha.bind(this)} />
                                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                            </Col>
                        </FormGroup>

                        <FormGroup className="row">
                            <div className="col-xs-12">
                                <div class="checkbox icheck">
                                </div>
                                <Col componentClass={FormLabel} className="col-xs-4">
                                    <Button className="btn btn-primary btn-block btn-flat" type="submit" onClick={this.handleLogin.bind(this)}>Ingresar</Button>
                                </Col>
                                <Col componentClass={FormLabel}>
                                    <a link="#">Recupera tu contraseña</a>
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
        e.preventDefault();
        var res = login(this.state.nombre_usuario, this.state.contrasenha, cookie);
        if (!res) {
            notify.show("Credenciales inválidas", "error");
            return;
        }
        this.props.history.push("/home");
    }
}