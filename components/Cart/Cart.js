"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { GlobalContext } from "@/context/CartContext";
import CartList from "./CartList";
import { Typography } from "@mui/material";

export default function Cart(props) {
  const { cart, totalAmount } = React.useContext(GlobalContext);
  const handleClose = () => {
    props.setOpen(false);
  };
  if (cart.length === 0) {
    return (
      <Dialog fullWidth maxWidth={"md"} open={props.open} onClose={handleClose}>
        <DialogTitle>Empty Cart</DialogTitle>
        <DialogContent>
          <DialogContentText variant="h4" textAlign={"center"}>
            Your Cart is empty
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }
  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={"md"} open={props.open} onClose={handleClose}>
        <DialogTitle>Cart Items</DialogTitle>
        <DialogContent>
          {cart.map((product) => (
            <CartList products={product} key={product.id} />
          ))}
          <DialogContentText textAlign={"center"} variant="h4">
            Toatal Amount : $ {totalAmount()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
