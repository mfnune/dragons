import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

import ListItem from './ListItem';


class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            dragons: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon').then(response => response.json())
            .then((data) => {
                data = data.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
                this.setState({ dragons: data });
                this.setState({ isLoading: false });
        },
        (error) => {
            console.log(error)
            return [];
        })
    }

    render(){
        if(this.state.isLoading){
            return(
                <div className='container'>
                    <p><i className="container" />Aguarde...</p>
                </div>
            )
        }
        if(localStorage.getItem("isAuth") !== 'true'){
            return <Navigate to='/'/>
        }
        return(
            <div>
            <div id='list' className="list">
                <div className="listHeader">
                    <h2 className="colorCustom">Dragões</h2>
                    <p>{this.state.dragons.length} foram cadastrados</p><br />
                </div>
                <div>
                    <ul id="listIt" className="press">
                        {
                            Object.keys(this.state.dragons).map(key => {
                                return <ListItem key={key} dragon={this.state.dragons[key]}/>
                            })
                        }
                    </ul>
                </div>
            </div>
            <footer className="listFooter">
                <Link to='/adddragon' className="margin15pxtop"><i className="material-icons iconHeader fontSize colorCustom">add_circle</i></Link>
            </footer>
            </div>
        );
    }
}

export default List