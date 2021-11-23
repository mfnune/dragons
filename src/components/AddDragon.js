import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


class AddDragon extends Component {

    onSend(){
        const dragon = {
            name: document.getElementById('name').value,
            type: document.getElementById('type').value,
            createdAt: new Date()
        };
        if(dragon.name === '' || dragon.type === ''){
            //validação
            return
        }
        fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(dragon)
        }).then(function(res) { 
            console.log("Cadastrou"); //validação sucesso
            window.history.back()
        }).catch(function(error) { 
            console.log(error); //validação erro
        })
    }

    render(){
        if(localStorage.getItem("isAuth") !== 'true'){
            return <Navigate to='/'/>
        }
        return(
            <div>
                <div onClick={() => window.history.back()}><i className="material-icons iconHeader navBackBtn">keyboard_arrow_left</i></div>
                <div className="addDragon">
                    <div><h2 className="colorCustom">Adicionar Dragão</h2></div>
                    <label htmlFor="name">Nome do Dragão</label>
                    <input type="text" id="name" placeholder="Nome" className="iptAddDragon margin20pxBottom"/>
                    <label htmlFor="value" >Tipo</label>
                    <input type="text" id="type" placeholder="Tipo" className="iptAddDragon margin20pxBottom"/>
                    <div onClick={this.onSend}><button type="submit" className="btnAddDragon">Salvar</button></div>
                </div>
            </div>
        )
    }
}

export default AddDragon