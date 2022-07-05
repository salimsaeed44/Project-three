import React, { useState }from 'react'
import "./Shop.css"
import { ReactComponent as YourSvg } from './images/logo.svg';
import { ReactComponent as Cart } from './images/icon-cart.svg';
import { ReactComponent as Plus } from './images/icon-plus.svg';
import { ReactComponent as Minus } from './images/icon-minus.svg';
import { ReactComponent as Remove } from './images/icon-delete.svg';
import { ReactComponent as Menu } from './images/icon-menu.svg';
import { ReactComponent as Close } from './images/icon-close.svg';
import { ReactComponent as Previous } from './images/icon-previous.svg';
import { ReactComponent as Next } from './images/icon-next.svg';


const Shop = () => {
    const [active, setActive] = useState(1);
    const [browsmode, setBrowsMode] = useState(false);
    const [counter, setCounter] = useState(0);
    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const handleClick = event => {
      // 👇️ toggle class on click
      event.currentTarget.classList.toggle('overlay');
  
      // 👇️ add class on click
      event.currentTarget.classList.add('overlay');
  
      // 👇️ remove class on click
      // event.currentTarget.classList.remove('hidden');
    };
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = event => {
    //   // 👇️ toggle isActive state on click
    //   setIsActive(current => !current);
    // };
    var price = 125.00 * counter;
  return (
    <div>
      {/* Start Header */}
        <div className='header '>
          <div className='overlay'>
            {/* Left Content */}
          <div className='container'>
              <div className='logo-ul'>
                <div className='menu'>
                <Menu className='menu' onClick={() => setCheck2(true)}/>
                </div>
                <div className='logo'>
                  <YourSvg />
                </div>
                <div className={`ul-lists ${check2 ? "" : "hidden2"}`} onClick={() => setCheck2(false)} >
                  <div className='close'>
                    <Close onClick={() => setCheck3(false)}/>
                  </div>
                  <ul>
                    <li><a href='#'>Collection</a></li>
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
                </div>
            </div>
            {/* Right Content */}
            <div className='icon-prfo'>
              <div className='icon' onClick={() => setCheck(true)} >
                {counter > 0 ? <div className='show-sale'>{counter}</div>: ''}
                <Cart />
                <div className={`add-to-cart ${check ? "" : "hidden"}`} onClick={() => setCheck(false)} >
                <h4>Card</h4>
                <div className='items'>
                {
                  counter < 1 ? <p className='empty'>Your cart is empty.</p> : <div className='item'>
                  <div className='image'>
                  <img src={require("./images/image-product-1.jpg")} />
                  </div>
                  <div className='p'>
                  <p>
                    Fall Limited Edition Sneakers<br/>
                    $125.00 x {counter} <span>${price}</span>
                  </p>
                  </div>
                  <div className='del' onClick={() => setCounter(counter -1)}><Remove /></div>
                  <div className='btn-check'>
                    <button>Checkout</button>
                    </div>
                  </div>
                }
                </div>
              </div>
              </div>
              <div className='profo'>
                <img src={require("./images/image-avatar.png")} />
              </div>
            </div>
            </div>
          </div>
            </div>
            {/* End Header */}
            {/* Start  */}
            <div className='gallery'>
              <div className='container'>
              <div className='images'>
              <div className='parent-image'>
                <div className='cont'>
                <div className='prev'>
                <Previous onClick={() => {active < 4 ? setActive(active + 1) : setActive(1)}} />
                </div>
                <div className='next'>
                <Next onClick={() => {active > 1 ? setActive(active - 1) : setActive(4)}}/>
                </div>
                </div>
                <img src={require("./images/image-product-1.jpg")} onClick={() => {setBrowsMode(true)}} />
              </div>
              <div className='child-images'>
              <img className='active' src={require("./images/image-product-1-thumbnail.jpg")} />
              <img src={require("./images/image-product-2-thumbnail.jpg")} />
              <img src={require("./images/image-product-3-thumbnail.jpg")} />
              <img src={require("./images/image-product-4-thumbnail.jpg")} />
              </div>
              </div>
              <div className='text-content'>
                <div className='text'>
                  <h6>SNEKER COMPANY</h6>
                  <h1>Fall Limited Edition Sneakers</h1>
                  <h2>
                    These low-profile sneakers are your prefect casual wear
                    companin. Featuring durable rubber  outer sole they'll
                    withstand everything the weater can offer.
                    </h2>
                    <h2>$125.00 <span>50%</span></h2>
                    <span className='span'>$250.00</span>
                </div>
                <div className='buttons'>
                  <div className='items'>
                  <div className='btn-minus' onClick={() => setCounter(counter - 1)}>
                    <Minus />
                  </div>
                  <div className='counter'>{counter}</div>
                  <div className='btn-plus' onClick={() => setCounter(counter + 1)}>
                  <Plus />
                  </div>
                  </div>
                  <div className='btn-cart'>
                  <button className='cart-btn'><Cart fill='white'/> Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
  )
}

export default Shop;