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

export default function Home() {


    const BanniereXL= [
        {name:"BannierPhoto" , image:banner},
        {name:"BannierPhoto" , image:banner2},
        {name:"BannierPhoto" , image:offer1},
        {name:"BannierPhoto" , image:offer2},
        {name:"BannierPhoto" , image:offer3},
        {name:"BannierPhoto" , image:banner2},

    ]  ;

    const Products1= [
        {name:"BannierPhoto" , image:product1},
        {name:"BannierPhoto" , image:product2},
        {name:"BannierPhoto" , image:product3},
        {name:"BannierPhoto" , image:tv},
        {name:"BannierPhoto" , image:product1},
        {name:"BannierPhoto" , image:product2},
        {name:"BannierPhoto" , image:product3},
        {name:"BannierPhoto" , image:tv},

    ]  ;

    const Products2= [
        {name:"BannierPhoto" , image:product4},
        {name:"BannierPhoto" , image:product5},
        {name:"BannierPhoto" , image:product6},
        {name:"BannierPhoto" , image:product7},
        {name:"BannierPhoto" , image:product8},
        {name:"BannierPhoto" , image:product9},

    ]  ;

    const Products3= [
        {name:"BannierPhoto" , image:product10},
        {name:"BannierPhoto" , image:product11},
        {name:"BannierPhoto" , image:product12},
        {name:"BannierPhoto" , image:product13},
        {name:"BannierPhoto" , image:product14},
        {name:"BannierPhoto" , image:product15},

    ]  ;

    const Products4= [
        {name:"BannierPhoto" , image:product16},
        {name:"BannierPhoto" , image:product17},
        {name:"BannierPhoto" , image:product18},
        {name:"BannierPhoto" , image:product19},
        {name:"BannierPhoto" , image:product20},
        {name:"BannierPhoto" , image:product21},

    ]  ;

    const Products5= [
        {name:"BannierPhoto" , image:product77},
        {name:"BannierPhoto" , image:product99},
        {name:"BannierPhoto" , image:product88},
        {name:"BannierPhoto" , image:product66},
        {name:"BannierPhoto" , image:product22},
        {name:"BannierPhoto" , image:product55},

    ]  ;

    const Products6= [
        {name:"BannierPhoto" , image:product55},
        {name:"BannierPhoto" , image:product33},
        {name:"BannierPhoto" , image:product88},
        {name:"BannierPhoto" , image:product99},
        {name:"BannierPhoto" , image:product77},
        {name:"BannierPhoto" , image:product66},

    ]  ;

    const Products7= [
        {name:"BannierPhoto" , image:product111},
        {name:"BannierPhoto" , image:product222},
        {name:"BannierPhoto" , image:product333},
        {name:"BannierPhoto" , image:product444},
        {name:"BannierPhoto" , image:product555},
        {name:"BannierPhoto" , image:product666},

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
