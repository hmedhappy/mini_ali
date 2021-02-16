import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button } from '@material-ui/core';

export default function Index({setcart,cart,product}) {

    const AddToCart = () => {
        var exist = false ;
      const newCart=  cart?.map(element=>{
            if (element.id == product.id) {
                element.qte = element.qte + 1 ;
                exist = true ;
            }
            return element ;
        })
        const products = {
            id:product.id,
            qte:product.qte || 1,
            photo:product.image,
            name:product.name,
            price:"3.200",
            data:Date.now(),
        }
        exist ? setcart([...newCart]) : setcart([...newCart,products]) ;

    }

    return (
        <div className="card" style={{width:'13rem !important',margin:'15px',borderRadius:'10px'}}>
                <img className="card-img-top" src={product.image} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{product.name}</p>
                    </div>
                    <div className="product-price-and-shipping" itemProp="offers" itemScope="" itemType="https://schema.org/Offer">
                      <Button
                      startIcon={ <FavoriteBorderIcon/>}>
                      </Button>
                    <span className="sr-only">Prix de base</span>
                <span className="regular-price">
                        <strong>3,</strong>
                        <span>
                        900
                        </span>
                        <strong>&nbsp;TND</strong>
                </span>
                     <Button
                     onClick={()=>AddToCart()}
                      startIcon={<AddCircleOutlineIcon/>}
                      >
                      </Button>
                    
                    </div>
            </div>
    )
}
