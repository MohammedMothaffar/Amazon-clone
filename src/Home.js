import React from "react";
import "./Home.css";
import Product from './Product';
import Logo from './images/prime.jpg'

function Home() {
  return (
    <div className="home">
<div className="home__container">
<img className="home__image" src={Logo} alt="" />
<div className="home__row">
<Product
title="The lean startup" 
price={30.23}
image="images/fridge.webp"
/>
<Product

title="The lean startup" 
price={368}
image="images/fridge.webp"
/>

</div>

<div className="home__row">
<Product/>
<Product/>
<Product/>
</div>

<div className="home__row">
<Product/>
</div>
</div>



    </div>
  )
}

export default Home