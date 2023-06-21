import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { GlobalContext } from "@/context/CartContext";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CartList({ products }) {
  const { removeProduct } = React.useContext(GlobalContext);
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 600,
        flexGrow: 1,
        marginBottom: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={products.name} src={products.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {products.category.toUpperCase()}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {products.title.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer", color: "error" }}
                variant="h6"
                onClick={() => removeProduct(products)}
              >
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              ${products.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
