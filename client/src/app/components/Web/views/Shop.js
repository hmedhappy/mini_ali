import React from 'react' 



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

export default function Shop() {

       const Products1= [
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},
        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit 1" , image:product1},
        {name:"Produit" , image:product2},
        {name:"Produit" , image:product3},
        {name:"Produit" , image:product4},
        {name:"Produit" , image:product5},
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},
        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},
        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},
        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit " , image:product6},
        {name:"Produit 1" , image:product7},
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},
        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit" , image:product14},
        {name:"Produit" , image:product8},
        {name:"Produit" , image:product9},
        {name:"Produit" , image:product10},
        {name:"Produit" , image:product11},

        {name:"Produit " , image:product12},
        {name:"Produit 1" , image:product13},
        {name:"Produit" , image:product15},
        {name:"Produit" , image:product16},
        {name:"Produit" , image:product17},
        {name:"Produit " , image:product18},
        {name:"Produit 1" , image:product19},
        {name:"Produit" , image:product20},
        {name:"Produit" , image:product21},
        {name:"Produit" , image:product22},

    ]  ;
    return (
        <div className="shop-container">
            <div className="menu">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <b>Famille</b>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span class="badge badge-primary badge-pill">1</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span class="badge badge-primary badge-pill">1</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span class="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
            </div>
            <div className="shop-products">
                <div className="shop-preference">
                <nav class="nav nav-tabs">
                    <a class="nav-link active" href="#">Active</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link disabled" href="#">Disabled</a>
                </nav>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
                </div>
                <div className="shop-elements">     
            {Products1.map(element=><SingleProduct product={element}/>)}
            {Products1.map(element=><SingleProduct product={element}/>)}
                </div>
            </div>
        </div>
    )
}
