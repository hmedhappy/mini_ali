import React from 'react';

import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Banner from '../../Banner'
import ProductsCards from '../../ProductsCards'

import banner from '../assets/SampleProducts/banner.webp';
import banner2 from '../assets/SampleProducts/banner2.webp';
import offer1 from '../assets/img/banners/offer-1.jpg' ;
import offer2 from '../assets/img/banners/offer-2.jpg' ;
import offer3 from '../assets/img/banners/offer-2.jpg' ;

import product1 from '../assets/SampleProducts/phone1.webp'
import product2 from '../assets/SampleProducts/phone2.webp'
import product3 from '../assets/SampleProducts/phone3.webp'
import product33 from '../assets/SampleProducts/product1.webp'
import product55 from '../assets/SampleProducts/product4.webp'
import product66 from '../assets/SampleProducts/product5.webp'
import product77 from '../assets/SampleProducts/product6.webp'
import product88 from '../assets/SampleProducts/product7.webp'
import product99 from '../assets/SampleProducts/product8.webp'
import product111 from '../assets/SampleProducts/product9.webp'
import product222 from '../assets/SampleProducts/product10.webp'
import product333 from '../assets/SampleProducts/product11.webp'
import product444 from '../assets/SampleProducts/product12.webp'
import product555 from '../assets/SampleProducts/product13.webp'
import product666 from '../assets/SampleProducts/product14.webp'
import tv from '../assets/SampleProducts/tv.webp' ;

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

import '../../../../style/HomeCss/Home.css'
import CategorieMenu from './CategorieMenu';

import unipid from 'uniqid'


export default function Home() {


    const BanniereXL= [
        {id:unipid(),name:"BannierPhoto" , image:banner},
        {id:unipid(),name:"BannierPhoto" , image:banner2},
        {id:unipid(),name:"BannierPhoto" , image:offer1},
        {id:unipid(),name:"BannierPhoto" , image:offer2},
        {id:unipid(),name:"BannierPhoto" , image:offer3},
        {id:unipid(),name:"BannierPhoto" , image:banner2},

    ]  ;

    const Products1= [
        {id:unipid(),name:"BannierPhoto" , image:product1},
        {id:unipid(),name:"BannierPhoto" , image:product2},
        {id:unipid(),name:"BannierPhoto" , image:product3},
        {id:unipid(),name:"BannierPhoto" , image:tv},
        {id:unipid(),name:"BannierPhoto" , image:product1},
        {id:unipid(),name:"BannierPhoto" , image:product2},
        {id:unipid(),name:"BannierPhoto" , image:product3},
        {id:unipid(),name:"BannierPhoto" , image:tv},

    ]  ;

    const Products2= [
        {id:unipid(),name:"BannierPhoto" , image:product4},
        {id:unipid(),name:"BannierPhoto" , image:product5},
        {id:unipid(),name:"BannierPhoto" , image:product6},
        {id:unipid(),name:"BannierPhoto" , image:product7},
        {id:unipid(),name:"BannierPhoto" , image:product8},
        {id:unipid(),name:"BannierPhoto" , image:product9},

    ]  ;

    const Products3= [
        {id:unipid(),name:"BannierPhoto" , image:product10},
        {id:unipid(),name:"BannierPhoto" , image:product11},
        {id:unipid(),name:"BannierPhoto" , image:product12},
        {id:unipid(),name:"BannierPhoto" , image:product13},
        {id:unipid(),name:"BannierPhoto" , image:product14},
        {id:unipid(),name:"BannierPhoto" , image:product15},

    ]  ;

    const Products4= [
        {id:unipid(),name:"BannierPhoto" , image:product16},
        {id:unipid(),name:"BannierPhoto" , image:product17},
        {id:unipid(),name:"BannierPhoto" , image:product18},
        {id:unipid(),name:"BannierPhoto" , image:product19},
        {id:unipid(),name:"BannierPhoto" , image:product20},
        {id:unipid(),name:"BannierPhoto" , image:product21},

    ]  ;

    const Products5= [
        {id:unipid(),name:"BannierPhoto" , image:product77},
        {id:unipid(),name:"BannierPhoto" , image:product99},
        {id:unipid(),name:"BannierPhoto" , image:product88},
        {id:unipid(),name:"BannierPhoto" , image:product66},
        {id:unipid(),name:"BannierPhoto" , image:product22},
        {id:unipid(),name:"BannierPhoto" , image:product55},

    ]  ;

    const Products6= [
        {id:unipid(),name:"BannierPhoto" , image:product55},
        {id:unipid(),name:"BannierPhoto" , image:product33},
        {id:unipid(),name:"BannierPhoto" , image:product88},
        {id:unipid(),name:"BannierPhoto" , image:product99},
        {id:unipid(),name:"BannierPhoto" , image:product77},
        {id:unipid(),name:"BannierPhoto" , image:product66},

    ]  ;

    const Products7= [
        {id:unipid(),name:"BannierPhoto" , image:product111},
        {id:unipid(),name:"BannierPhoto" , image:product222},
        {id:unipid(),name:"BannierPhoto" , image:product333},
        {id:unipid(),name:"BannierPhoto" , image:product444},
        {id:unipid(),name:"BannierPhoto" , image:product555},
        {id:unipid(),name:"BannierPhoto" , image:product666},

    ]  ;
    


    return (
        <>
             <CategorieMenu/>

                <div>
                    <hr/>
                     <h4>Offre Special Promos <span><FavoriteBorderIcon/></span> </h4>
                    <hr/>
                </div>
                <Banner 
                className={"carrouss2"} 
                Banniere={Products1} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true} />

                <div> <hr/>
                     <h4>Nouvelle Collection <span><NewReleasesOutlinedIcon/></span> </h4>
                 <hr/> </div>
                <Banner 
                className="carrouss" 
                Banniere={BanniereXL} 
                style={{width:"100vw",height:"50vh"}} 
                breakPointsB={false}/>
                <div>
                    <hr/>
                        <h4>Top Achats 2020  <span><ShoppingBasketOutlinedIcon/></span> </h4>
                    <hr/>
                </div>
                
                <Banner 
                className="carrouss2" 
                Banniere={Products1} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>

                <Banner 
                className="carrouss2" 
                Banniere={Products2} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>

                <div>
                    <hr/>
                        <h4>Consomable Frais   <span><ShoppingBasketOutlinedIcon/></span> </h4>
                    <hr/>
                </div>
                <Banner 
                className="carrouss" 
                Banniere={BanniereXL} 
                style={{width:"100vw",height:"50vh"}} 
                breakPointsB={false}/>
                

                <Banner 
                className="carrouss2" 
                Banniere={Products3} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>

                <Banner 
                className="carrouss2" 
                Banniere={Products4} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>
               

                <div>
                    <hr/>
                        <h4>Consomable Frais   <span><ShoppingBasketOutlinedIcon/></span> </h4>
                    <hr/>
                </div>
                <Banner 
                className="carrouss" 
                Banniere={BanniereXL} 
                style={{width:"100vw",height:"50vh"}} 
                breakPointsB={false}/>

                <Banner 
                className="carrouss2" 
                Banniere={Products5} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>

                <Banner 
                className="carrouss2" 
                Banniere={Products6} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>

<div>
                    <hr/>
                        <h4>Consomable Frais   <span><ShoppingBasketOutlinedIcon/></span> </h4>
                    <hr/>
                </div>
                <Banner 
                className="carrouss" 
                Banniere={BanniereXL} 
                style={{width:"100vw",height:"50vh"}} 
                breakPointsB={false}/>

                <Banner 
                className="carrouss2" 
                Banniere={Products7} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>

                <Banner 
                className="carrouss2" 
                Banniere={Products2} 
                style={{width:"auto",height:"200px"}} 
                breakPointsB={true}/>
               
               
                <ProductsCards/>


        </>
    )
}
