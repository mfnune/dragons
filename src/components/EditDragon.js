import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


class EditDragon extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            dragon: {
                id: window.location.pathname.substr(12),
                name: '',
                type: ''
            }
        };
        this.onLoad(this.state.dragon.id);
    }

    onLoad(sId){
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + sId).then(response => response.json())
            .then((data) => {
            this.setState({ dragon: data });
            this.setState({ isLoading: false });
            if(document.getElementById('name')) document.getElementById('name').value = data.name;
            if(document.getElementById('type')) document.getElementById('type').value = data.type;
        },
        (error) => {
            console.log(error);
        })
    }

    onSend(){
        const dragon = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            type: document.getElementById('type').value,
            createdAt: new Date()
        };
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/" + dragon.id,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(dragon)
        }).then(function(res) {
            console.log("Editou"); //validação de sucesso
            window.history.back();
        }).catch(function(error) { 
            console.log(error); //validação de erro
        });
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
                <div onClick={() => window.history.back()}><i className="material-icons iconHeader navBackBtn">keyboard_arrow_left</i></div>
                <div className="addDragon">
                    <h2 className="colorCustom">Editar Dragão</h2>
                    <label htmlFor="name">Código</label>
                    <input type="text" id="id" placeholder="Código" className="iptAddDragon margin20pxBottom" disabled="true" value={this.state.dragon.id}/>
                    <label htmlFor="name">Nome do Dragão</label>
                    <input type="text" id="name" placeholder="Nome" className="iptAddDragon margin20pxBottom"></input>
                    <label htmlFor="value" >Tipo</label>
                    <input type="text" id="type" placeholder="Tipo" className="iptAddDragon margin20pxBottom"/>
                    <div onClick={this.onSend}><button type="submit" className="btnAddDragon">Salvar</button></div>
                </div>
            </div>
        )
    }
}

export default EditDragon