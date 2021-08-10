//
// import React, { useEffect, useState } from "react";
// import {
//   Avatar,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle, Fab,
//   makeStyles, Table, TableBody,
//   TableCell, TableContainer, TableRow,
//   TextField,
// } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
//
//
// import { RiPlayListAddFill } from "react-icons/all";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import Button from "@material-ui/core/Button";
//
// import { loadForm, postForm } from '../../redux/features/form';
//
//
// const useStyles = makeStyles((theme) => ({
//   container: {
//     marginTop: 100,
//     width: 800,
//     margin: "auto",
//   },
//   img: {
//     width: 70,
//     height: 50,
//     borderRadius: 100,
//     // border: 3, solid, green,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary,
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   marginright: 20,
//
//   addLogo: {
//     fontSize: 40,
//   },
// }));
//
// function AddForm(props) {
//   const dispatch = useDispatch();
//
//   const form = useSelector((state) => state.form.items;
//   const loading = useSelector((state) => state.form.loading);
//
//   const [text, setText] = useState("");
//   const [userID, setUserID] = useState("");
//   const [shildID, setShildID] = useState("");
//   const [eventID, setEventID] = useState("");
//   const [open, setOpen] = useState(false);
//
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//
//   const handleAddText = (e) => {
//     setText(e.target.value)
//   }
//
//   const handleAddImage = (e) => {
//     setUserID(e.target.value)
//   }
//
//
//
//   const handleAddPosition = (e) => {
//     setPosition(e.target.value)
//   }
//
//   const handleDelete = (id) => {
//     dispatch(deleteDoctor(id))
//   }
//
//
//   const handlePostDoctor = () => {
//     dispatch(postDoctor({name: name, imageURL: imageURL, position:position}))
//   }
//
//
//   useEffect(() => {
//     dispatch(loadDoctors())
//   },[dispatch])
//
//   const classes = useStyles();
//
//
//   return (
//     <div className={classes.container}>
//       <Container className={classes.paper}>
//         <grid container spacing={6}>
//           <h3>Админка</h3>
//         </grid>
//         <grid container spacing={6} className={classes.addLogo}>
//           <Fab variant="outlined" color="primary" onClick={handleClickOpen}>
//             <RiPlayListAddFill />
//           </Fab>
//         </grid>
//       </Container>
//       <TableContainer component={classes.paper}>
//         <Table size="small" aria-label="a dense table">
//           <TableBody>
//             {doctors.map((item) => {
//               return (
//                 <TableRow>
//                   <TableCell component="th" scope="row">
//                     <Avatar>
//                       <img
//                         className={classes.img}
//                         src={`${item.imageURL}`}
//                         alt="logo"
//                       />
//                     </Avatar>
//                   </TableCell>
//                   <TableCell align="right">{item.name}</TableCell>
//                   <TableCell>
//                     <button onClick={() => handleDelete(item._id)}>
//                       удалить
//                     </button>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Новое обращение</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Ведите имя и путь к изображению</DialogContentText>
//           <TextField
//             value={text}
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Имя доктора"
//             type="text"
//             fullWidth
//             onChange={handleAddText}
//
//           />
//           <TextField
//             value={imageURL}
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Фотография"
//             type="text"
//             fullWidth
//             onChange={handleAddImage}
//           />
//           <TextField
//             value={position}
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Должность"
//             type="text"
//             fullWidth
//             onChange={handleAddPosition}
//
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Закрыть
//           </Button>
//           <Button onClick={handlePostDoctor} color="primary">
//             Добавить
//           </Button>
//
//
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
//
//
// }
//
// export default AddForm;
//
//
//
//
//
// /*
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
