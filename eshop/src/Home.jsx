import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="Home image" className="home__image" />
                <div className='grid__container'>
                    <div className="home__row">
                        <div className="col">
                            <Product id='1234123'
                                title="ASUS TUF Gaming A15, 15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 5 4600H, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Black/2.3 Kg), FA506IHRZ-HN111W"
                                price={624.5}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/91zVSkGGZbS._SX679_.jpg"
                            />
                        </div>
                        <div className="col">
                            <Product id='2234123'
                                title="Apple iPhone 14 Plus (128 GB) - Blue"
                                price={900}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg"
                            />
                        </div>
                    </div>
                    <div className="home__row">
                        <div className="col">
                            <Product id='3234123' title="Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)" price={180} rating={4} image="https://m.media-amazon.com/images/I/91veRYPjpeL._SX679_.jpg" />
                        </div>
                        <div className="col">
                            <Product id='4234123'
                                title="American Tourister 32 Ltrs Grey Casual Backpack (AMT FIZZ SCH BAG 02 - GREY)"
                                price={12}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/91PZUhSoOVL._SY741_.jpg"
                            />
                        </div>
                        <div className="col">
                            <Product id='5234123'
                                title="PHILIPS Handheld Garment Steamer STH3000/20 - Compact & Foldable, Convenient Vertical Steaming, 1000 Watt Quick Heat Up, up to 20g/min, Kills 99.9%* Bacteria (Reno Blue), Small"
                                price={42}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/71W2XPQdBqL._SX522_.jpg"
                            />
                        </div>
                    </div>
                    <div className="home__row">
                        <div className="col">
                            <Product id='6234123'
                                title="Nikon Z5 Kit 24-200 with Additional Battery, Optical Zoom (Black)"
                                price={1812}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/51+7Guk8aGL.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home