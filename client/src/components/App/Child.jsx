import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Paper } from '@material-ui/core';
import { loadChild } from '../../redux/features/child';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    minWidth: 275,
  },
  container: {
    width: '80%',
    display: 'flex',
  },
  media: {
    height: 140,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
}));




function Child(props) {

  const [spacing, setSpacing] = React.useState(2);
  const child = useSelector(state => state.child.items)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadChild());
  }, [dispatch])

  return (
    (
      <div>
        <Container maxWidth="xl">
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Дети</Paper>
            </Grid>
            <Grid container justifyContent="center" spacing={spacing}>
              {child.map(item => (
                <Card className={classes.root}>
                  <CardContent>
                    <Typography>
                      {/*<img className='img' src={item.imageURL}/>*/}
                      <img className='img' src={item.imageURL}/>
                    </Typography>
                    <Typography variant="h5" component="h2">
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                      <h3>{item.name}</h3>
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                      <h4>{item.age}</h4>
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                      <h4>{item.gender}</h4>
                    </Typography>

                  </CardContent>
                  <CardActions>
                    {/*<Button size="small">Читать подробнее</Button>*/}
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Grid>

        </Container>

      </div>
    )
  );

}

export default Child;