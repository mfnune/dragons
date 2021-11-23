import React, {Component} from "react";
import {Navigate} from 'react-router-dom'

class Login extends Component {

    constructor(props){
        super(props)
        this.user = {
            user: "Admin",
            password: "1234"
        };
        this.state = {
            isLogged: false
        }
        this.onAccess = this.onAccess.bind(this)
    }

    onAccess(){
        if(document.getElementById('password').value === '1234' && document.getElementById('user').value === 'Admin'){
            localStorage.setItem("isAuth", "true");
            this.setState({isLogged: true});
        }else{
            alert("Usuário ou senha inválidos");
        }
    }

    render(){
        if(this.state.isLogged){
            localStorage.setItem("isAuth", "true");
            return <Navigate to='/list'/>
        }else{
            return(
                <div className="loginBorder">
                    <div className="login container">
                        <i className="material-icons loginIcon">account_circle</i>
                        <input placeholder="User" type="text" id='user' className="margin20pxBottom" ref={(ref) => this.user = ref}/>
                        <input placeholder="Password" type="password" id='password' className="margin20pxBottom" ref={(ref) => this.password = ref}/>
                        <div onClick={this.onAccess}><button>Entrar</button></div>
                    </div>
                </div>
            )
        }
    }
}

export default Login