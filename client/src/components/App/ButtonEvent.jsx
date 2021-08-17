
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, Fab,
  makeStyles, Table, TableBody,
  TableCell, TableContainer, TableRow,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deleteChild, postChild } from '../../redux/features/child';
import { useParams } from 'react-router-dom'

import { RiPlayListAddFill } from "react-icons/all";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { postEvent } from '../../redux/features/event';



const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    width: 800,
    margin: "auto",
  },
  img: {
    width: 70,
    height: 50,
    borderRadius: 100,
    // border: 3, solid, green,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
  },
  marginright: 20,

  addLogo: {
    fontSize: 40,
  },
}));

function ButtonEvent({open, setOpen, id}) {
  const dispatch = useDispatch();

  //const event = useSelector((state) => state.event.items);
 // const loading = useSelector((state) => state.event.loading);

  const [date, setDate] = useState("")
  const [text, setText] = useState("")
  const [child, setChild] = useState("")


  // для открытия закрытия
  const handleClose = () => {
    setOpen(false);
  };


  const handleAddText = (e) => {
    setText(e.target.value)
  }
  const handleAddDate = (e) => {
    setDate(e.target.value)
  }
  const handleAddChild = (e) => {
    setChild(e.target.value)
  }

  const handlePostEvent = () => {
    dispatch(postEvent({date, text, child, id}))
  }

  const handleDelete = (id) => {
    dispatch(deleteChild(id))
  }


  const classes = useStyles();


  return (
    <div className={classes.container}>
      <Container className={classes.paper}>
        <grid container spacing={6} className={classes.addLogo}>
        </grid>
      </Container>
      {/*<TableContainer component={classes.paper}>*/}
      {/*  <Table size="small" aria-label="a dense table">*/}
      {/*    <TableBody>*/}
      {/*      {event.map((item) => {*/}
      {/*        return (*/}
      {/*          <TableRow>*/}
      {/*            <TableCell component="th" scope="row">*/}
      {/*              <Avatar>*/}
      {/*                <img*/}
      {/*                  className={classes.img}*/}
      {/*                  src={`${item.imageURL}`}*/}
      {/*                  alt="logo"*/}
      {/*                />*/}
      {/*              </Avatar>*/}
      {/*            </TableCell>*/}
      {/*            <TableCell align="right">{item.text}</TableCell>*/}
      {/*            <TableCell>*/}
      {/*              <button onClick={() => handleDelete(item._id)}>*/}
      {/*                удалить*/}
      {/*              </button>*/}
      {/*            </TableCell>*/}
      {/*          </TableRow>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </TableBody>*/}
      {/*  </Table>*/}
      {/*</TableContainer>*/}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Анкета</DialogTitle>
        <DialogContent>

          <DialogContentText>Ведите события</DialogContentText>

         {/* <TextField
            value={date}
            autoFocus
            margin="dense"
            id="name"
            label="дата"
            type="text"
            fullWidth
            onChange={handleAddDate}
          />*/}

          <TextField
            value={text}
            autoFocus
            margin="dense"
            id="name"
            label="События"
            type="text"
            fullWidth
            onChange={handleAddText}
          />

          {/*<TextField*/}
          {/*  value={child}*/}
          {/*  autoFocus*/}
          {/*  margin="dense"*/}
          {/*  id="name"*/}
          {/*  label="ID ребенка"*/}
          {/*  type="text"*/}
          {/*  fullWidth*/}
          {/*  onChange={handleAddChild}*/}
          {/*/>*/}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
          <Button onClick={handlePostEvent} color="primary">
            Добавить
          </Button>


        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ButtonEvent;




















