import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import '../../../style/Cart.css'

export default function Index({cartOpen,setcartOpen}) {
    const [cartItems, setcartItems] = useState([])
    return (<>
        <div className="cart-sidebar" style={cartOpen?{right:'0px'}:null}>
                    <div style={{backgroundColor: '#44b2bc none repeat scroll 0 0 !important'}} className="bs-canvas-header side-cart-header p-3 ">
                        <div className="d-inline-block  main-cart-title">My Cart <span>({cartItems?.length} Items)</span></div>
                        <button type="button" className="bs-canvas-close close" data-toggle="offcanvas"><CloseIcon onClick={()=>setcartOpen(false)}/></button>
                    </div>
                    <div className="cart-sidebar-body" style={{backgroundColor: '#cec9c9',borderRadius: '14px',margin: '10px'}}>
                        {
                            cartItems?.map((row, index) => (
                                <div className="cart-item" key={index}>
                                    <div className="cart-product-img">
                                        <img className="img-fluid" src={row.photo} alt="cart" />
                                        <div className="offer-badge">{row.discountPer}% OFF</div>
                                    </div>
                                    <div className="cart-text">
                                        <h4>{row.name}</h4>
                                        <div className="cart-radio">
                                            <ul className="kggrm-now">
                                                <li>
                                                    <input type="radio" id="a1" name="cart1" />
                                                    <label >{row.unitSize}</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="qty-group">
                                            <div className="quantity buttons_added">
                                                <input type="button" defaultValue="-" className="minus minus-btn" onClick={() => this.props.decreaseToCart(row)} />
                                                <input type="number" value={row.qty} className="input-text qty text" disabled />
                                                <input type="button" defaultValue="+" className="plus plus-btn" onClick={() => this.props.incrementToCart(row)} />
                                                <button type="button" className="cart-close-btn" onClick={() => this.props.removeFromCart(row)}><i className="mdi mdi-close" /></button>
                                            </div>
                                            <div className="cart-item-price">DT {row.qty * row.netPrice}<span>DT {row.netPrice}</span></div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="cart-sidebar-footer" style={{ padding: '0px 18px'}}>
                        <div className="cart-store-details">
                            <p>Sub Total <strong className="float-right">
                            DT {cartItems?.reduce((sum, i) => (
                                    sum += i.qty * i.netPrice
                                ), 0)}
                            </strong></p>
                            <p>Delivery Charges <strong className="float-right text-danger">+ DT 29.69</strong></p>
                            <h6>Your total savings <strong className="float-right text-danger">DT 55 (42.31%)</strong></h6>
                        </div>
                        <a href="/checkout"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline" /> Proceed to Checkout </span><span className="float-right"><strong>
                        DT {cartItems?.reduce((sum, i) => (
                                sum += i.qty * i.netPrice
                            ), 0)}
                        </strong> <span className="mdi mdi-chevron-right" /></span></button></a>
                    </div>
                   
                </div>
                </>
    )
}
