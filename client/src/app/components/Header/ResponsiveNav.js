import React from 'react'

export default function ResponsiveNav({open}) {
    return (
        <div class="w3-sidebar w3-light-grey w3-bar-block" style={open ?{width: '50vw',zIndex: '10',transition:"1s"}:{width: '50vw',zIndex: '10',transform:'translateX(-50vw)',transition:"1s"}}>
            <h3 class="w3-bar-item">Menu</h3>
            <a href="#" class="w3-bar-item w3-button">Link 1</a>
            <a href="#" class="w3-bar-item w3-button">Link 2</a>
            <a href="#" class="w3-bar-item w3-button">Link 3</a>
        </div>
    )
}
