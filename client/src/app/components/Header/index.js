import React,{ useState } from 'react'
import '../../../style/Header.css'
import { Link, Redirect } from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';

import Select from '@material-ui/core/Select';
import Badge from '@material-ui/core/Badge';

import Cart from '../Cart'


import logo from './logoo.png';
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
         <div className="header">
           <Cart cartOpen={cartOpen} setcartOpen={setcartOpen}/>
             <ResponsiveNav open={open}/>
 <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-color " aria-label="Ninth navbar example" style={{color:"red !important"}}>  
    <div className="container-xl">
      <div style={{display:'flex'}}>
      <img width="50px" height="50px"   src={logo}/>
      <h2
      style={{color:'white',fontFamily:'Ubuntu'}}
      >Clediss</h2>
      </div>
      <a className="navbar-brand" href="#">
      {/* <img className="logo" class="logo"  src={logo}/> */}
      </a>

      <form style={{    flex: '0.9'}}>
          <input style={{border: 'none',borderRadius:"10px"}} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      <button onClick={()=>setopen(!open)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExample07XL" style={{justifyContent: 'space-around',flex:'0.5'}}>
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
            <Link
            to='/shop'
            >
            <Button 
            startIcon={<ShoppingBasketIcon/>} className="nav-link " href="#" tabindex="-1" > Shop </Button>
            </Link>
            </li>
          <li className="nav-item">
            <Button 
            onClick={()=>logout()}
            startIcon={<PersonOutlineOutlinedIcon/>} className="nav-link " href="#" tabindex="-1" > Sign-Out </Button>
            </li>
            <li className="nav-item">
              <Link to='/'>
            <Button 
            startIcon={<HomeTwoToneIcon style={{border: '2px solid',borderRadius: '50%',padding: '3px',fontSize: '33px'          }}/>} className="nav-link " href="#" tabindex="-1" >

            </Button>
           </Link>
            </li>
        </ul>
      </div>
    </div>
  </nav>  
  <style jsx>{`
  .bg-color{
    background-color: #203963 !important;
  }
  
  `} </style>           
    </div>
    )
}
