import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
//import Preloader from '../Preloader';
import { loadUsers } from "../../redux/features/users";
import Rating from "@material-ui/lab/Rating";
import { BsSearch } from "react-icons/all";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(2),
  },
  paperCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  gridSearch: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    width: "100%",
    backgroundColor: "#000841",
    marginTop: "20px",
    borderRadius: "5px",
    color: "#fff",
  },
  card: {
    padding: "5px",
    width: "300px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5px",
  },
  cardMedia: {
    paddingTop: "56.25%",
    borderRadius: "3px",
  },
  cardContent: {
    padding: "5px",
  },
  BtnNoteId: {
    textDecoration: "none",
    position: "relative",
    padding: "0",
    background: "#000841",
    color: "#fff",
    borderRadius: "5px",
    transition: "all .3s",
    "&:hover": {
      background: "transparent",
      border: "2px solid #000841",
      color: "#000841",
      transform: "scale(1.02)",
    },
  },
  BtnNote: {
    transition: "all .3s",
    color: "#fff",
    "&:hover": {
      color: "#000841",
    },
  },
  rootRating: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
  search: {
    width: "500px",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
  },
  searchIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: "10px",
  },
}));

function Users() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const classes = useStyles();
  //const loading = useSelector((state) => state.notes.loading);
  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  /*  useEffect(() => {
    document.title = "Волонтеры";
  });
  useEffect(() => {
    dispatch(loadUserNotes());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }*/
  return (
    <Container className={classes.cardGrid} maxWidth="1440px">
      <Grid container spacing={4} className={classes.gridSearch}>
        <div className={classes.search}>
          <div>
            <BsSearch className={classes.searchIcon} />
          </div>
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className={classes.textField}
            placeholder="Поиск…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Grid>
      <Grid container spacing={4} className={classes.grid}>
        {users.map((item) => {
          return (
            <Grid item key={item}xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title="Image title"
                  image={item.imageURL}
                />
                <CardContent className={classes.cardContent}>
                  <Box>
                    <Typography gutterBottom variant="h6" component="h5">
                      <div>{item.name}</div>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Users;
