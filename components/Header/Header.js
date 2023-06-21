"use client";
import React, { useContext } from "react";
import Cart from "../Cart/Cart";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// next authentication
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session);
  const isLoggedIn = false;
  // global context
  const { cart } = useContext(GlobalContext);
  console.log(cart);
  // Modal state
  const [open, setOpen] = React.useState(false);
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
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Deterator
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
                <ShoppingCartIcon onClick={() => setOpen(true)} />
                <Cart open={open} setOpen={setOpen} />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            <>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </>
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
                    <Link href="/profile/">
                      <Button onClick={handleLogout}>Logout</Button>
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="contained"
                    size={"large"}
                    startIcon={<LockOutlinedIcon />}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register" style={{ marginLeft: "1rem" }}>
                  <Button
                    variant="contained"
                    size={"large"}
                    color="secondary"
                    startIcon={<PersonOutlineOutlinedIcon />}
                  >
                    Register
                  </Button>
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
