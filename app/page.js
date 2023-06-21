"use client";
import { useContext } from "react";
import { use } from "react";
import { GlobalContext } from "@/context/CartContext";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";

export default function Home() {
  const { addProduct, removeProduct, checkProduct } = useContext(GlobalContext);
  const data = use(dataPromise);
  return (
    <Box p={2}>
      <Typography variant="h4" mb={4} mt={4}>
        All Products
      </Typography>
      <Grid container spacing={2} justifyContent={"center"} gap={4}>
        {data.map((product) => (
          <Card
            sx={{ maxWidth: 345, height: "100%", width: 345 }}
            key={product.id}
          >
            <CardActionArea style={{ height: 400 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="h4" color="text.secondary" mb={2}>
                  {product.price}
                </Typography>
                <Typography variant="h6" color="text.secondary" mb={2}>
                  {product.category}
                </Typography>
                <Rating name="simple-controlled" mt={4} />
              </CardContent>
            </CardActionArea>
            <CardActions>
              {checkProduct(product) ? (
                <Button
                  type="button"
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={() => removeProduct(product)}
                >
                  Remove Product
                </Button>
              ) : (
                <Button
                  type="button"
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const dataPromise = getData();
