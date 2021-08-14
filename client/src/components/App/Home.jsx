import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import d from './assets/4.jpg'
import a from './assets/1.jpg'
import b from './assets/2.jpg'
import c from './assets/3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css"

/*style={{width:'100%',
  height: '100%', marginTop: 40}}*/

export default class CarouselBox extends Component{
  render() {
    return(
      <div style={{width: 800,margin:'auto',marginTop: 50}}>

        <Carousel className="carousel">
          <Carousel.Item className="parentImg">
            <img
              style={{width:'100%', height: '100%'}}
              // className="d-block w-25"
              src={d}
              alt='Forest'
            />
            <Carousel.Caption>
              {/*<h3>Forest image</h3>*/}
              {/*<p>Lorem ipsum dolor sit.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{width:'100%', height: '100%'}}
              // className="d-block w-100"
              src={a}
              alt='Forest'
            />
            <Carousel.Caption>
              <h3>Дети это святое</h3>
              <p> самое главное в жизни, это здоровье детям</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{width:'100%',
                height: '100%'}}
              // className="d-block w-25"
              src={b}
              alt='Forest'
            />
            <Carousel.Caption>
              {/*<h3>Forest image</h3>*/}
              {/*<p>Lorem ipsum dolor sit.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{width:'100%',
                height: '100%'}}
              // className="d-block w-25"
              src={c}
              alt='Forest'
            />
            <Carousel.Caption>
              {/*<h3>Forest image</h3>*/}
              {/*<p>Lorem ipsum dolor sit.</p>*/}
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
    )
  }
}
