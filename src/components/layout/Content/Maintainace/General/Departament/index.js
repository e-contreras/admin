import React, { Component } from 'react';
import axios from 'axios';

export default class Departament extends Component {

    state = {
        departaments: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/departaments')
            .then(res =>{
                const departaments = res.data;
                this.setState({departaments});
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.departaments.map(departament => <li>{departament.departament_name}</li>)}
                </ul>
            </div>
        )
    }
}
