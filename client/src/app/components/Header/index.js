import React,{ useState } from 'react'
import '../../../style/Header.css'
import { Link } from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import Select from '@material-ui/core/Select';
import Badge from '@material-ui/core/Badge';

import Cart from '../Cart'


import logo from './SampleProducts/logochlhh.png';
import { Button } from '@material-ui/core';



export default function Index() {
    const [open, setopen] = useState(false);
    const [cartOpen, setcartOpen] = useState(false);
    const [chario, setchario] = useState(false);

    const logout = ()=>{
      localStorage.removeItem("user");
      window.location='/signin';
    }


   
    return (
         <div className="header" onLoad={()=>setTimeout(() => {
           setchario(true);
           setTimeout(() => {
             setchario(false);
           }, 5000);
         }, 1000)}>
           <Cart cartOpen={cartOpen} setcartOpen={setcartOpen}/>
             <ResponsiveNav open={open}/>
 <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Ninth navbar example">  
    <div className="container-xl">
      <a className="navbar-brand" href="#">
      <img className="logo" class="logo" style={{transform:`translateX(${chario ? '85':"0"}vw) rotate(${chario ? '-19':"22"}deg) /* scaleX(${chario ? '-1':"1"}) */`,transition:'5s'}} src={logo}/>
      </a>

      <form style={{    flex: '0.7'}}>
          <input style={{border: 'none',borderRadius:"10px"}} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      <button onClick={()=>setopen(!open)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExample07XL" style={{justifyContent: 'space-around',flex:'0.3'}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">

            <Button 
            onClick={()=>setcartOpen(!cartOpen)}
            startIcon={
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon/>
            </Badge>
            } className="nav-link " href="#" tabindex="-1" >Panier </Button>
          

          </li>
          <li className="nav-item">
            <Button 
            onClick={()=>logout()}
            startIcon={<PersonOutlineOutlinedIcon/>} className="nav-link " href="#" tabindex="-1" > Sign-Out </Button>
            </li>
        </ul>
      </div>
    </div>
  </nav>             
    </div>
    )
}
