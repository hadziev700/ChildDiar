import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from '@material-ui/core';
import { loadEvent } from '../../redux/features/event';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 32,
    margin: 20,
  },
  table: {
    marginTop: 20,
  },
  imgSize: {
    width: 120,
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
  tableRow: {
    backgroundColor: "white",
  },

}))
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




function Child(props) {

  const [spacing, setSpacing] = React.useState(2);
  const event = useSelector(state => state.event.items)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadEvent());
  }, [dispatch])

  return (
    (
      <div>

        <TableContainer  className={classes.tableRow}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead  className={classes.tableRow}>
              <TableRow>
                <StyledTableCell  className={classes.tableRow} align="right">Дата</StyledTableCell>
                <StyledTableCell  className={classes.tableRow} align="right">Что произошло</StyledTableCell>
                <StyledTableCell  className={classes.tableRow} align="right">Фото</StyledTableCell>
                <StyledTableCell  className={classes.tableRow} align="right">Имя</StyledTableCell>
                <StyledTableCell  className={classes.tableRow} align="right">Возраст</StyledTableCell>
                <StyledTableCell  className={classes.tableRow} align="right">Пол</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {event.map((item) => (
                <StyledTableRow key={item.date}>
                  <StyledTableCell component="th" scope="row">

                  </StyledTableCell>

                  <StyledTableCell align="right">{item.text}</StyledTableCell>
                  <StyledTableCell align="right">{item.child.imageURL}</StyledTableCell>
                  <StyledTableCell align="right">{item.child.name}</StyledTableCell>
                  <StyledTableCell align="right">{item.child.age}</StyledTableCell>
                  <StyledTableCell align="right">{item.child.gender}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );

}

export default Child;







/*
<div>
  <Container maxWidth="xl">
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>События</Paper>
      </Grid>
      <Grid container justifyContent="center" spacing={spacing}>
        {event.map(item => (
          <Card className={classes.root}>
            <CardContent>

              <Typography variant="h5" component="h2">
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                <h3>{item.date}</h3>
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                <h4>{item.text}</h4>
              </Typography>

              <Typography>
                <img className='img' src={item.child.imageURL}/>
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                <h4>{item.child.name}</h4>
              </Typography>

            </CardContent>
            <CardActions>
              {/!*<Button size="small">Читать подробнее</Button>*!/}
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>

  </Container>

</div>*/
