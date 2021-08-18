import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Paper } from "@material-ui/core";
import { loadChild } from "../../redux/features/child";
import { NavLink, useParams } from "react-router-dom";
import AddChild from "./AddChild";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    minWidth: 275,
  },
  container: {
    width: "80%",
    display: "flex",
  },
  media: {
    height: 140,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  marginLeft: 30,

  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
  img: {
    height: 200,
  },
}));

function Child(props) {
  const [open, setOpen] = React.useState(false);
  const token = useSelector((state) => state.application.token);
  const { id } = useParams();
  const [spacing, setSpacing] = React.useState(2);
  const child = useSelector((state) => state.child.items);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadChild());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (token) {
    return (
      <div>
        <Container maxWidth="xl">
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><h1>Лучшие фотографии</h1></Paper>
            </Grid>
            <Button onClick={handleClickOpen}>Добавить ребенка</Button>
            <Grid container justifyContent="center" spacing={spacing}>
              {child.map((item) => (
                <Card className={classes.root}>
                  <CardContent>
                    <NavLink to={`/child/${item._id}`}>
                      <Typography style={{ height: "100%" }}>
                        <img className="img" src={item.imageURL} />
                      </Typography>
                    </NavLink>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              ))}
              <AddChild open={open} setOpen={setOpen} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Child;
