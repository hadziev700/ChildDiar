import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChild } from "../../redux/features/child";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Index from "../../index.css";
import Button from "@material-ui/core/Button";
import ButtonEvent from "./ButtonEvent";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
});
function IdChild() {
  const classes = useStyles();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const event = useSelector((state) =>
    state.event.items.find((event) => event.child_id === id)
  );
  const child = useSelector((state) => {
    return state.child.items.find((item) => item._id === id);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChild());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {" "}
      <Button onClick={handleClickOpen}>добавить события</Button>
      <img style={{ marginTop: 30, marginLeft: 120 }} src={child?.imageURL} />
      <Typography align='center' variant='h3' > Имя:{child?.name}</Typography>
      <Typography align='center' variant='h3' > Возраст:{child?.age}</Typography>
      <Typography align='center' variant='h3' > Пол:{child?.gender}</Typography>
      {/*<Typography align='center' variant='h3' > событие:{event.text}</Typography>*/}

      {/*<div>{child?.age}</div>*/}
      {/*<Typography align='center' variant='h3' > {event}</Typography>*/}
      {/*<div>{JSON.stringify(child)}</div>
      <div>{JSON.stringify(event)}</div>*/}
      <ButtonEvent open={open} setOpen={setOpen} child={child} />
    </div>
  );
}

export default IdChild;
