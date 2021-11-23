import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ListItem extends Component {

    constructor(key){
        super(key)
        this.dragon = key.dragon;
    }

    onRemoveDragon(id){
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" + id,{
            method: "DELETE",
        }).then(function(res) {
            console.log("Removeu"); //validação sucesso
            window.location.reload();
        }).catch(function(error) { 
            console.log(error) //validação erro
        })
    }

    render(){
        return (
            <div className="displayFlex">
                <Link to='/detail' state={{dragon: this.dragon ? this.dragon : {}}} className="listItem borderOrange">
                    <div className="listItem">
                        <h4 className="margin20px">{this.dragon.name}</h4>
                    </div>
                </Link>
                <div>
                    <Link to={`/editdragon/${this.dragon.id}`} className="margin15pxtop"><i className="material-icons iconList">edit</i></Link>
                    <div onClick={() => this.onRemoveDragon(this.dragon.id)} className="margin15pxtop"><i className="material-icons iconList">delete</i></div>
                </div>
            </div>
        )
    }
}

export default ListItem