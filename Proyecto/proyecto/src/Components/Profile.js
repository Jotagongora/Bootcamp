import React from 'react'
import './Profile.css';
import Avatar from '../Images/avatar_prueba.jpg';
import PostImg from '../Images/wildrift.jpg';
import Like from '../Icons/me-gusta.png';

export default function Profile() {
    return (
        <div>
            <div>
                <img src={Avatar} width="120" height="120" alt="avatar"/>
                <nav>
                    <a href="">Fotos</a>
                    <a href="">Biblioteca</a>
                </nav>
                <p>EXP</p>
                <progress id="Exp" max="100" value="60"></progress>
                <div>
                    <p>5</p>
                </div>
            </div>
            <div>
                <textarea name="Post" id="" cols="50" rows="10">
                    Escribe aquí...
                </textarea>
                <div className="postContainer">
                    <img src={PostImg} width="100%" alt=""/>
                    <p>Nueva actualización de Wild Rift para móviles</p>
                    <footer>
                        <i src={Like}></i>
                    </footer>
                </div>
            </div>
            <div></div>
        </div>
    )
}
