import React, { useContext } from 'react' 



import product from '../assets/SampleProducts/product1.webp';
import product1 from '../assets/SampleProducts/phone1.webp'
import product2 from '../assets/SampleProducts/phone2.webp'
import product3 from '../assets/SampleProducts/phone3.webp'
import product4 from '../assets/img/product/big-1.jpg' ;
import product5 from '../assets/img/product/big-2.jpg' ;
import product6 from '../assets/img/product/big-3.jpg' ;
import product7 from '../assets/img/product/big-4.jpg' ;
import product8 from '../assets/img/product/img-1.jpg' ;
import product9 from '../assets/img/product/img-2.jpg' ;
import product10 from '../assets/img/product/img-3.jpg' ;
import product11 from '../assets/img/product/img-4.jpg' ;
import product12 from '../assets/img/product/img-5.jpg' ;
import product13 from '../assets/img/product/img-6.jpg' ;
import product14 from '../assets/img/product/img-7.jpg' ;
import product15 from '../assets/img/product/img-8.jpg' ;
import product16 from '../assets/img/product/img-9.jpg' ;
import product17 from '../assets/img/product/img-10.jpg' ;
import product18 from '../assets/img/product/img-11.jpg' ;
import product19 from '../assets/img/product/img-12.jpg' ;
import product20 from '../assets/img/product/img-13.jpg' ;
import product21 from '../assets/img/product/img-14.jpg' ;
import product22 from '../assets/img/product/img-15.jpg' ;

import '../../../../style/Shop.css'


import SingleProduct from '../../SingleProducts'

import {CartContext} from '../Contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';

// import uuidv4() from 'uniqid';
var randomstring = require("randomstring");


export default function Shop() {

    const [cart,setcart] = useContext(CartContext);

       const Products1= [
        {name:"Produit" ,id:"gdfgdfgdfgdfg", image:product8},
        {name:"Produit" ,id:"gfgdffgd", image:product9},
        {name:"Produit" ,id:"ezrzertynh", image:product10},
        {name:"Produit" ,id:"ezrzertynhfgdfg", image:product11},
        {name:"Produit " ,id:"fdfdfdf", image:product12},
        {name:"Produit 1" ,id:"fdfdfdfddfdfdf", image:product13},
        {name:"Produit 1" ,id:"fdfdfdfddfdfdffdfdfdfdf", image:product1},
        {name:"Produit" ,id:"fdfdfdfddfdfdffdfdfdfddfdfdff", image:product2},
        {name:"Produit" ,id:"dfdfdf", image:product3},
        {name:"Produit" ,id:"dfdfdfd", image:product4},
        {name:"Produit" ,id:"dfdfdfdf", image:product5},
        {name:"Produit" ,id:"dfdfdfdfd", image:product8},
        {name:"Produit" ,id:"dfdfdf", image:product9},
        {name:"Produit" ,id:"dfdfdfdfdfdfddfd", image:product10},
        {name:"Produit" ,id:"sertgfdg", image:product11},
        {name:"Produit " ,id:"fghghjfjfgh", image:product12},
        {name:"Produit 1" ,id:"fgdhfghfgh", image:product13},
        {name:"Produit" ,id:"fhdfhdghdergh", image:product8},
        {name:"Produit" ,id:"gjfgjhghj", image:product9},
        {name:"Produit" ,id:"djhfgjfgjfghdfgq", image:product10},
        {name:"Produit" ,id:"djhfgjfgjfghdfgqfhdgjhdf", image:product11},
        {name:"Produit " ,id:"shgdfhdfhdffffz", image:product12},
        {name:"Produit 1" ,id:"hdjdghjedfghdf", image:product13},
        {name:"Produit" ,id:"hsfhfdhdfhsdfg", image:product8},
        {name:"Produit" ,id:"hdfjghkukjfgh", image:product9},
        {name:"Produit" ,id:"dfhdjgjdfgdfg", image:product10},
        {name:"Produit" ,id:"dhdfhdfhdh", image:product11},
        {name:"Produit" ,id:"dfhdgjthkujhk", image:product8},
        {name:"Produit" ,id:"uuidsdfsdfsdfsv4()", image:product9},
        {name:"Produit" ,id:"uuifsdfdv4()", image:product10},
        {name:"Produit" ,id:"uuidfsdfsdv4()", image:product11},
        {name:"Produit " ,id:"uuigsdfsddv4()", image:product12},
        {name:"Produit 1" ,id:"uuidv4()", image:product13},
        {name:"Produit " ,id:"uuisqsdqsdv4()", image:product12},
        {name:"Produit 1" ,id:"uuqidv4()", image:product13},
        {name:"Produit " ,id:"uuizezdv4()", image:product6},
        {name:"Produit 1" ,id:"uusdqsdqidv4()", image:product7},
        {name:"Produit" ,id:"uuiqsdqsdqdv4()", image:product8},
        {name:"Produit" ,id:"uuiqsqfghfgddv4()", image:product9},
        {name:"Produit" ,id:"uuidfgdfhddv4()", image:product10},
        {name:"Produit" ,id:"uuiddfgdfgdfgv4()", image:product11},
        {name:"Produit " ,id:"uuidfbvbddv4()", image:product12},
        {name:"Produit 1" ,id:"uufsrzfeqidv4()", image:product13},
        {name:"Produit" ,id:"uuidsdqsdqv4()", image:product14},
        {name:"Produit" ,id:"usdfgfudgvdgsdfgidv4()", image:product8},
        {name:"Produit" ,id:"uuigfgfgfgdv4()", image:product9},
        {name:"Produit" ,id:"uuidsedv4()", image:product12},
        {name:"Produit 1" ,id:"uudgsfhdfidv4()", image:product13},
        {name:"Produit" ,id:"uuidfdgdfhdfv4()", image:product15},
        {name:"Produit" ,id:"uuifdhdfhddv4()", image:product16},
        {name:"Produit" ,id:"uuiddfhdfhdv4()", image:product17},
        {name:"Produit " ,id:"uuidfgdv4()", image:product18},
        {name:"Produit 1" ,id:"uuihdfdfdv4()", image:product19},
        {name:"Produit" ,id:"uuiqsqsdv4()", image:product20},
        {name:"Produit" ,id:"uuisdfgsdv4()", image:product21},
        {name:"Produit" ,id:"uuidqsdfgsdgv4()", image:product22},

    ]  ;
        return (
        <div className="shop-container">
            <div className="menu">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <b>Famille</b>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
            </div>
            <div className="shop-products">
                <div className="shop-preference">
                <nav className="nav nav-tabs">
                    <a className="nav-link active" href="#">Active</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link disabled" href="#">Disabled</a>
                </nav>

<div className="input-group">
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div role="separator" className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
                </div>
                <div className="shop-elements">     
            {Products1.map((element,index)=><SingleProduct key={index} cart={cart} setcart={setcart} product={element}/>)}
                </div>
            </div>
        </div>
    )
}
