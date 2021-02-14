import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PetsIcon from '@material-ui/icons/Pets';

import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import { Link } from 'react-router-dom'
import Carousel from "react-elastic-carousel";
import '../../../../style/HomeCss/Home.css';
import Avatar from '@material-ui/core/Avatar';
import babycare from "../assets/img/category/babycare.png";
import beverage from "../assets/img/category/beverage.png";
import Biscuits from "../assets/img/category/Biscuits.png";
import breakfastdairy from "../assets/img/category/breakfastdairy.png";
import grocerystample from "../assets/img/category/grocerystample.jpg";
import household from "../assets/img/category/household.png";
import kitchen from "../assets/img/category/kitchen.png";
import noodles from "../assets/img/category/noodles.png";
import personalcare from "../assets/img/category/personalcare.png";
import petcare from "../assets/img/category/petcare.png";



export default function CategorieMenu() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 550, itemsToShow: 4 },
      ];
    return (
        <div className="products">
        <ul>
        <Carousel className="carrouss3"  breakPoints={breakPoints}>

         <Link ><Avatar style={{width:'70px',height:'70px',margin:'18px'}}  src={babycare}/>babycare </Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={beverage}/>beverage </Link>
         <Link> <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={Biscuits}/>Biscuits </Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={breakfastdairy}/>breakfastdairy</Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={grocerystample}/>grocerystample</Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={household}/>household</Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={kitchen}/>kitchen</Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={noodles}/>noodles</Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={personalcare}/>personalcare</Link>
         <Link>  <Avatar style={{width:'70px',height:'70px',margin:'18px'}} src={petcare}/>petcare</Link>
        </Carousel>
        </ul>
    </div>
    )
}
