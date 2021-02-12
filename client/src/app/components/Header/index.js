import React from 'react'
import '../../../style/Header.css'
import { Link } from 'react-router-dom'

export default function index() {
    return (
         <div class="header">
        <div class="menu">
             <img style={{width: '10vw'}} class="logo" src="logochlhh.png"/>
             <form>
                <input type="text" placeholder="Que rechercher Vous..."/>
                <button type="submit">
                          Rechercher
                </button>
            </form>
            <div class="elements">
                <div class="singleElement">
                    <img height="30" src="login2.png"/>
                    <Link to='/users'  >
                    <p>Users</p>
                    </Link>
                </div>
                <div class="singleElement">
                     <img height="30" src="login2.png"/>
                     <Link to='/posts'  >
                     <p>posts</p>
                     </Link>
                </div>
                 <div class="singleElement">
                     <img height="30" src="login2.png"/>
                     <p>Paneau</p>
                 </div>
            </div>
            <div class="resMenu">
                <ul>
                    <div class="singleElement">
                        <img height="30" src="login2.png"/>
                         <p>Connexion</p>
                    </div>
                     <div class="singleElement">
                       <img height="30" src="login2.png"/>
                       <p>Achat</p>
                    </div>
                     <div class="singleElement">
                        <img height="30" src="login2.png"/>
                        <p>Paneau</p>
                     </div>
                    <div class="singleElement">
                        <img height="30" src="login2.png"/>
                        <p>Achat</p>
                    </div>
                 </ul>
            </div> 
       </div>
    </div>
    )
}
