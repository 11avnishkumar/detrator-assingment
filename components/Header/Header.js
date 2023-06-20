"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/CartContext";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const isLoggedIn = true;
  const { cart } = useContext(GlobalContext);

  const handleLogout = () => {};

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Deter
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            "@media (max-width: 600px)": {
              justifyContent: "flex-start",
              maxWidth: "100%",
              padding: "0 16px",
            },
          }}
        >
          <Grid item>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              Search
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="/posts"
              style={{ textDecoration: "none", color: "white" }}
            >
              Posts
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="/live"
              style={{ textDecoration: "none", color: "white" }}
            >
              Live
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton>
              <Badge badgeContent={`${cart.length}`} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            <div>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
          <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton>
              <Badge badgeContent={`${cart.length}`} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            {isLoggedIn ? (
              <>
                <IconButton onClick={handleClick}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link href="/profile/">
                      <Button>Profile</Button>
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button color="inherit">Login</Button>
                </Link>
                <Link href="/register">
                  <Button color="inherit">Register</Button>
                </Link>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
