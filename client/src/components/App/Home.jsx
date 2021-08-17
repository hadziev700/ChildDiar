import React, { Component, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import d from './assets/4.jpg'
import a from './assets/1.jpg'
import b from './assets/2.jpg'
import c from './assets/3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logout } from '../../redux/features/application';
import logo from '../../components/kk.jpg'
import { makeStyles } from '@material-ui/core/styles';
/*style={{width:'100%',
  height: '100%', marginTop: 40}}*/

const useStyles = makeStyles((theme) => ({
  img:{
    bgImgWrapper: {
      position: 'absolute',
      top: 0, bottom: 0, left: 0, right: 0
    }
  }
}))


function Home(props) {
  const token = useSelector((state) => state.application.token); // прописываем для авторизованных пользователей
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const classes = useStyles();


  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedOut(false);
    dispatch(logout());
  };


  if (!token) {
    return (
      <img
        style={{width:'100%', height: '100%'}}
        src={logo}
        alt='logo'
      />
    )
  }
  {
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

export default Home;
