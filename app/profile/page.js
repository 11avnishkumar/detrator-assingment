"use client";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@mui/material";

const ProfilePage = () => {
  // if the user authenticated fetch the information
  const { data: authUserInfo } = useSession();
  console.log(authUserInfo);
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: authUserInfo?.user.email,
    phoneNumber: "123-456-7890",
    locale: "en-US",
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 3, marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} align="center">
            <Avatar sx={{ width: 120, height: 120 }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Email: {user.email}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" onClick={handleLogout}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
