import React from 'react';
import { Carousel } from 'react-bootstrap';
import logoOne from './images/carousel-1.jpg';
import logoTwo from './images/carousel-2.jpg';
import logoThree from './images/carousel-3.jpg';

console.log(logoOne);
console.log(logoTwo);
console.log(logoThree);

function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logoOne}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logoTwo}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logoThree}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Home
