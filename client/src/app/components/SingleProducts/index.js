import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button } from '@material-ui/core';

export default function Index({product}) {
    return (
        <div class="card" style={{width:'13rem !important',margin:'15px',borderRadius:'10px'}}>
                <img class="card-img-top" src={product.image} alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">{product.name}</p>
                    </div>
                    <div class="product-price-and-shipping" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                      <Button
                      startIcon={ <FavoriteBorderIcon/>}>
                      </Button>
                    <span class="sr-only">Prix de base</span>
                <span class="regular-price">
                        <strong>3,</strong>
                        <span>
                        900
                        </span>
                        <strong>&nbsp;TND</strong>
                </span>
                     <Button
                      startIcon={<AddCircleOutlineIcon/>}
                      >
                      </Button>
                    
                    </div>
            </div>
    )
}
