import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardActions, CardContent, Container, Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { loadForm } from '../../../redux/features/form';
import AddChild from '../AddChild';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 32,
    margin: 20,
  },

   bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',

  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
}))



function Record(props) {
  const [open, setOpen] = React.useState(false);
  const form = useSelector(state => state.form.items)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(loadForm());
  }, [dispatch])

  return (
    <div>
      {form.map(item => {
        return (
          <Container maxWidth="xl">
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>АНКЕТА</Paper>
                <Button onClick={handleClickOpen}>
                  Добавить анкету
                </Button>
              </Grid>
              <Grid container justifyContent="center" spacing={spacing}>
                  <Card className={classes.root}>
                    <CardContent>


                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                       {/* <h2>Нужна ли эта строка??????????: {item.text}</h2>*/}
                      </Typography>

                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h2>Имя родителя: {item.user.name}</h2>
                      </Typography>

                      <Typography className={classes.images}>
                        <img className='img' src={item.child.imageURL}/>
                      </Typography>

                      <Typography className={classes.pos} color="textSecondary">
                        <h3> Имя ребенка: {item.child.name}</h3>
                      </Typography>

                      <Typography className={classes.pos} color="textSecondary">
                        <h3>Возраст: {item.child.age}</h3>
                      </Typography>

                      <Typography className={classes.pos} color="textSecondary">
                        <h3>Пол: {item.child.gender}</h3>
                      </Typography>

                      <Typography className={classes.pos} color="textSecondary">
                        <h3>День события: {item.event.date}</h3>
                      </Typography>

                      <Typography className={classes.pos} color="textSecondary">
                        <h3>Что произошло: {item.event.text}</h3>
                      </Typography>



                     {/* <Typography className={classes.pos} color="textSecondary">
                        <h3>{item.patient}</h3>
                      </Typography>*/}
                    </CardContent>
                    {/*<CardActions>
                      <Button size="small">Читать подробнее</Button>
                    </CardActions>*/}
                  </Card>
              </Grid>
            </Grid>

          </Container>
        )
      })}
      <AddChild open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Record;
