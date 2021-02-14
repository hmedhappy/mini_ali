import React from 'react'
import '../../../style/Header.css'
import { Link } from 'react-router-dom'
import ResponsiveNav from './ResponsiveNav'
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PetsIcon from '@material-ui/icons/Pets';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import Carousel from "react-elastic-carousel";
import image1 from './image.jpg'
import image2 from './immage.jpg'
import banner from './SampleProducts/banner.webp';
import banner2 from './SampleProducts/banner2.webp';
import logo from './SampleProducts/logochlhh.png';

import product1 from './SampleProducts/phone1.webp'
import product2 from './SampleProducts/phone2.webp'
import product3 from './SampleProducts/phone3.webp'
import tv from './SampleProducts/tv.webp' ;
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



export default function Index() {
    const [open, setopen] = useState(false);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 550, itemsToShow: 4 },
      ];
    return (
         <div className="header">
             <ResponsiveNav open={open}/>
 <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Ninth navbar example">
    <div className="container-xl">
      <a className="navbar-brand" href="#">
      <img className="logo" class="logo" src={logo}/>
      </a>
      <button onClick={()=>setopen(!open)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL" style={{justifyContent: 'space-around'}}>
      <form style={{    flex: '0.7'}}>
          <input style={{border: 'none',borderRadius:"24px"}} className="form-control" type="text" placeholder="Search" aria-label="Search"/><span style={{position: 'absolute',top: '25%',right: '37%',float: 'right'}}><SearchOutlinedIcon/></span>
        </form>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " href="#" tabindex="-1" ><span><ShoppingCartOutlinedIcon/></span> Panier </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" tabindex="-1" ><span><PersonOutlineOutlinedIcon/></span> Sign-in </a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
                <div className="products">
                    <ul>
                    <Carousel className="carrouss3"  breakPoints={breakPoints}>

                     <Link ><Button  startIcon={<HomeIcon/>}><li>Home</li></Button> </Link>
                     <Link>  <Button startIcon={<InfoIcon/>}><li>About</li></Button> </Link>
                     <Link> <Button startIcon={<DirectionsBikeIcon/>}><li>Mobile</li></Button> </Link>
                     <Link>  <Button startIcon={<PetsIcon/>}><li>Animeaux</li></Button> </Link>
                     <Link>  <Button startIcon={<RemoveFromQueueIcon/>}><li>ElectroMenager</li></Button> </Link>
                    </Carousel>
                    </ul>
                </div>

                {/* ********************************* Carpussol ********************************* */}
                <Carousel enableAutoPlay={true} autoPlaySpeed={2000}  className="carrouss" >
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner} />
                    </div>
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner2} />
                    </div> 
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner} />
                    </div>
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner} />
                    </div>
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner2} />
                    </div> 
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner2} />
                    </div> 
                    
                </Carousel>
                {/* ********************************* Carpussol ********************************* */}


                {/* ********************************* Some Offre ********************************* */}
                <div>
                <hr/>
                <h4>Offre Special Promos <span><FavoriteBorderIcon/></span> </h4>
                <hr/>
                </div>
                <Carousel enableAutoPlay={true} autoPlaySpeed={2000} className="carrouss2"  breakPoints={breakPoints}>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product1} />
                    <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product2} />
                    <h6>telephone 24fd</h6>

                    </div> 
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product3} />
                        <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={tv} />
                    <h6>telephone 24fd</h6>
                    </div> 

                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product1} />
                    <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product2} />
                    <h6>telephone 24fd</h6>

                    </div> 
                    <div>
                    <img  style={{width:"auto",height:"200px"}} src={product3} />
                        <h6>telephone 24fd</h6>
                    </div>
                    <div>
                    <img  style={{width:"auto",height:"200px"}} src={tv} />
                    <h6>telephone 24fd</h6>
                    </div> 
                </Carousel>
                <style jsx>{`

                .logo{
                    width: 15vw;
                    height: 16vh;
                    top: 16%;
                    left: 0%;
                    transform: rotate(
                -22deg
                );
                    position: absolute;
                }
                @media (max-width: 768px) {
                    .logo{
                        width: 35vw;

                    }
                }


                    .carrouss {
                        margin-top: -28px;
                        zoom: 0.6;

                    }
                    .carrouss > div:first-child {
                        width: 65%;
                        border-radius : 10px;
                    }
                    .carrouss > div > div {
                        margin: 0px -50px;
                    }
                    .carrouss > div > button {
                        z-index : 50 ;
                    }
    
                    @media (max-width: 768px) {
                        .carrouss{
                            width :100% !important ;
                            zoom: 1;

                        }
                        .carrouss > div:nth-child(1) {
                            width: 100%;
                            border-radius : 10px;
                        }
    
                        .imgg {
                            height: auto !important;
                        }
                      }

                      .carrouss3{
                        width :60% !important ;
 
                      }
                      
                      .carrouss3 > div > button {
                        box-shadow:none;
                        background : none ;
                      }

                      @media (max-width: 768px) {
                        .carrouss3{
                            width :100% !important ;
                        }
                      }



                .carrouss2{
                    width :70% !important ;
                    margin: auto;
                }

                @media (max-width: 768px) {
                    .carrouss2{
                        width :100% !important ;
                    }
                  }
            `}</style>
                {/* ********************************* Some Offre ********************************* */}

                {/* ********************************* Some Offre II ********************************* */}
                <div>
                <hr/>
                <h4>Nouvelle Collection <span><NewReleasesOutlinedIcon/></span> </h4>
                <hr/>
                </div>
                <Carousel className="carrouss" >
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner} />
                    </div>
                    <div>
                        <img className="imgg" style={{width:"100vw",height:"50vh"}} src={banner2} />
                    </div> 
                    <h1>Three</h1>
                    <h1>Four</h1>
                    <h1>Five</h1>
                    <h1>Six</h1>
                    <h1>Seven</h1>
                    <h1>Eight</h1>
                </Carousel>
                <div>
                <hr/>
                <h4>Top Achats 2020  <span><ShoppingBasketOutlinedIcon/></span> </h4>
                <hr/>
                </div>
                <Carousel className="carrouss2"  breakPoints={breakPoints}>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product1} />
                    <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product2} />
                    <h6>telephone 24fd</h6>

                    </div> 
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product3} />
                        <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={tv} />
                    <h6>telephone 24fd</h6>
                    </div> 

                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product1} />
                    <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product2} />
                    <h6>telephone 24fd</h6>

                    </div> 
                    <div>
                    <img  style={{width:"auto",height:"200px"}} src={product3} />
                        <h6>telephone 24fd</h6>
                    </div>
                    <div>
                    <img  style={{width:"auto",height:"200px"}} src={tv} />
                    <h6>telephone 24fd</h6>
                    </div> 
                </Carousel>
                <Carousel className="carrouss2"  breakPoints={breakPoints}>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product1} />
                    <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product2} />
                    <h6>telephone 24fd</h6>

                    </div> 
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product3} />
                        <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={tv} />
                    <h6>telephone 24fd</h6>
                    </div> 

                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product1} />
                    <h6>telephone 24fd</h6>
                    </div>
                    <div >
                    <img  style={{width:"auto",height:"200px"}} src={product2} />
                    <h6>telephone 24fd</h6>

                    </div> 
                    <div>
                    <img  style={{width:"auto",height:"200px"}} src={product3} />
                        <h6>telephone 24fd</h6>
                    </div>
                    <div>
                    <img  style={{width:"auto",height:"200px"}} src={tv} />
                    <h6>telephone 24fd</h6>
                    </div> 
                </Carousel>
                <div class="row  row-cols-1 row-cols-md-4 g-5">
              <div class="col">  
                <div class="card">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
              </div>
              <div class="col">  
                <div class="card">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
              </div>
              <div class="col">  
                <div class="card">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
              </div>
              <div class="col">  
                <div class="card">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
              </div>
            </div>

                {/* ********************************* Some Offre II ********************************* */}

            
    </div>
    )
}
