import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logotype.png";
import { useDispatch, useSelector } from "react-redux";
//import { loadCategories } from "../../redux/features/categories";
import { NavLink, useLocation } from "react-router-dom";
import { logout } from "../../redux/features/application";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 6,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    //backgroundColor: "#000841",
    borderRadius: 4,
    width: "97%",
    margin: "auto",
    color: "white",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    color: "white",
    marginTop: theme.spacing(2),
  },
  btnSob: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
    marginLeft: 75,
    marginRight: 75,
    backgroundColor: "#000841",
  },
  btnVolonters: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "blue",   // дети
    marginLeft: 75,
    marginRight: 75,
    //backgroundColor: "#000841", //
  },
  btnLogUp: {
    padding: "0 5px",
    textDecoration: "none",
    //color: "#000841",
    backgroundColor: "#fff",
    borderRadius: "3px",
    //marginLeft:400,



  },
  btnLogOut: {
    padding: "0 5px",
    textDecoration: "none",
    color: "#e5266e",
    marginLeft: 10,
    backgroundColor: "#fff",
    borderRadius: "3px",
  },
  selectTitle: {
    textDecoration: "none",
    color: "#000",
  },
  menuItemLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "22px",
  },
  linkActive: {
    color: "red",
  },
  textDecoration: "none",
  color: "white",
  //backgroundColor: "#000841",
}));

function Header() {
  const token = useSelector((state) => state.application.token); // прописываем для авторизованных пользователей
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  /*useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);*/

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedOut(false);
    dispatch(logout());
  };

  const classes = useStyles();

  if (!token) {
    return (
      <div>
        <AppBar
          color="transparent"
          position="sticky"
          className={classes.appbar}
        >
          <Toolbar>
            <NavLink color="inherit" to={`/`}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <img
                  src={logo}
                  alt='logo'
                />
              </IconButton>
            </NavLink>
           {/* <Typography variant="h6" className={classes.title}>
              <Button color="inherit">
                <NavLink
                  className={classnames(
                    classes.btnVolonters,
                    pathname === "/notes/all" && classes.linkActive
                  )}
                  to={`/notes/all`}
                >
                  {" "}
                  Дети
                </NavLink>
              </Button>

              <Button color="inherit">
                <NavLink
                  className={classnames(
                    classes.btnSob,
                    pathname === "/event" && classes.linkActive
                  )}
                  to={`/event`}
                >
                  {" "}
                  Событие
                </NavLink>
              </Button>


            </Typography>*/}
            <Button color="inherit">
              <NavLink
                className={classnames(
                  classes.btnLogUp,
                  pathname === "/registration" && classes.linkActive
                )}
                to={`/registration`}
              >
                Регистрация
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                className={classnames(
                  classes.btnLogUp,
                  pathname === "/login" && classes.linkActive
                )}
                to={`/login`}
              >
                {" "}
                Войти
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return (
    <div>
      <AppBar color="transparent" position="sticky" className={classes.appbar}>
        <Toolbar>
          <NavLink color="inherit" to={`/`}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img
                src={logo}
                alt='logo'
              />
            </IconButton>
          </NavLink>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <NavLink
                className={classnames(
                  classes.btnVolonters,
                  pathname === "/notes/all" && classes.linkActive
                )}
                to={`/notes/all`}
              >
                {" "}
                Фото галерея
              </NavLink>
            </Button>

            {/*<Button color="inherit">*/}
            {/*  <NavLink*/}
            {/*    className={classnames(*/}
            {/*      classes.btnVolonters,*/}
            {/*      pathname === "/rod" && classes.linkActive*/}
            {/*    )}*/}
            {/*    to={`/rod`}*/}
            {/*  >*/}
            {/*    {" "}*/}
            {/*    Родители*/}
            {/*  </NavLink>*/}
            {/*</Button>*/}

            {/*<Button color="inherit">*/}
            {/*  <NavLink*/}
            {/*    className={classnames(*/}
            {/*      classes.btnVolonters,*/}
            {/*      pathname === "/event" && classes.linkActive*/}
            {/*    )}*/}
            {/*    to={`/event`}*/}
            {/*  >*/}
            {/*    {" "}*/}
            {/* Событие*/}
            {/*  </NavLink>*/}
            {/*</Button>*/}

          </Typography>

          {/*<Button color="inherit">
            <NavLink
              className={classnames(
                classes.btnVolonters,
                pathname === "/eee" && classes.linkActive
              )}
              to={`/eee`}
            >
              {" "}
              Добавление
            </NavLink>
          </Button>*/}

          <Button color="inherit" disableElevation>
            <NavLink
              className={classnames(
                classes.btnLogUp,
                pathname === "/admin" && classes.linkActive
              )}
              to={`/admin`}
            >
              Личный кабинет
            </NavLink>
          </Button>

          <Button color="inherit" value={isLoggedOut} onClick={handleLogout}>
            <NavLink
              className={classnames(
                classes.btnLogOut,
                pathname === "/login" && classes.linkActive
              )}
              to={`/`}
            >
              {" "}
              Выйти
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
