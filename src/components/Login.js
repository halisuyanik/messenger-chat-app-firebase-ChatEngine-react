import React from 'react'
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import 'firebase/app';
import {auth} from '../firebase';
import firebase from 'firebase/app';

const Login=()=>{
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to kozzmos messenger</h2>
                <div className="login-button google"
                 onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined>Google ile giriş yap</GoogleOutlined>
                    <br></br>
                </div>
                <div className="login-button facebook" 
                onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined>Facebook ile giriş yap</FacebookOutlined>
                </div>
            </div>
        </div>
    );
}
export default Login;