import React from "react";
import { useLocation, Navigate } from 'react-router-dom';
import { format } from 'date-fns'

const Detail = props => {
    let location = useLocation()
    if(localStorage.getItem("isAuth") !== 'true'){
        return <Navigate to='/'/>
    }
    return (
        <div>
            <div onClick={() => window.history.back()}><i className="material-icons iconHeader navBackBtn">keyboard_arrow_left</i></div>
            <h2 className="colorCustom">{location.state.dragon.name}</h2>
            <div className="detail">
                <p>Código: {location.state.dragon.id}</p>
                <p>Nome: {location.state.dragon.name}</p>
                <p>Tipo: {location.state.dragon.type}</p>
                <p>Data de Criação: {typeof location.state.dragon.createdAt == 'string' && location.state.dragon.createdAt.indexOf("/") > -1 ? location.state.dragon.createdAt : format(new Date(location.state.dragon.createdAt),'dd/MM/yyyy HH:mm:ss')}</p>
            </div>
        </div>
    )
}

export default Detail