/*

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

import { RiPlayListAddFill } from "react-icons/all";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";



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

function AddChild({open, setOpen}) {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form.items);
  const loading = useSelector((state) => state.form.loading);


  const [text, setText] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [user, setUser] = useState("")



  // для открытия закрытия
  const handleClose = () => {
    setOpen(false);
  };
  ///

  const handleAddImage = (e) => {
    setImage(e.target.value)
  }

  const handleAddName = (e) => {
    setName(e.target.value)
  }
  const handleAddAge = (e) => {
    setAge(e.target.value)
  }
  const handleAddGender = (e) => {
    setGender(e.target.value)
  }

  // const handleAddUser = (e) => {
  //   setUser(e.target.value)
  // }

  const handlePostChild = () => {
    dispatch(postChild({name: name, imageURL: imageURL, age:age, gender:gender}))
  }

  const handleDelete = (id) => {
    dispatch(deleteChild(id))
  }


  const classes = useStyles();


  return (
    <div className={classes.container}>
      <Container className={classes.paper}>
        {/!* <grid container spacing={6}>
          <h3>Админка</h3>
        </grid>*!/}
        <grid container spacing={6} className={classes.addLogo}>
          {/!*<Fab variant="outlined" color="primary" onClick={handleClickOpen}>*!/}
          {/!*  <RiPlayListAddFill />*!/}
          {/!*</Fab>*!/}
        </grid>
      </Container>
      <TableContainer component={classes.paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {child.map((item) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Avatar>
                      <img
                        className={classes.img}
                        src={`${item.imageURL}`}
                        alt="logo"
                      />
                    </Avatar>
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell>
                    <button onClick={() => handleDelete(item._id)}>
                      удалить
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Анкета</DialogTitle>
        <DialogContent>
          <DialogContentText>Ведите имя и путь к изображению ребенка</DialogContentText>
          <TextField
            value={name}
            autoFocus
            margin="dense"
            id="name"
            label="Имя Ребенка"
            type="text"
            fullWidth
            onChange={handleAddName}

          />
          <TextField
            value={imageURL}
            autoFocus
            margin="dense"
            id="name"
            label="Фотография"
            type="text"
            fullWidth
            onChange={handleAddImage}
          />
          <TextField
            value={age}
            autoFocus
            margin="dense"
            id="name"
            label="Возраст"
            type="text"
            fullWidth
            onChange={handleAddAge}


          />
          <TextField
            value={gender}
            autoFocus
            margin="dense"
            id="name"
            label="пол"
            type="text"
            fullWidth
            onChange={handleAddGender}



          />
          {/!*<TextField*!/}
          {/!*  value={user}*!/}
          {/!*  autoFocus*!/}
          {/!*  margin="dense"*!/}
          {/!*  id="name"*!/}
          {/!*  label="Родитель"*!/}
          {/!*  type="text"*!/}
          {/!*  fullWidth*!/}
          {/!*  onChange={handleAddUser}*!/}

          {/!*!/>*!/}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
          <Button onClick={handlePostChild} color="primary">
            Добавить
          </Button>


        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddChild;




















*/
