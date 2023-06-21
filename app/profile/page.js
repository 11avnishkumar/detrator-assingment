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
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: authUserInfo.user.email,
    phoneNumber: "123-456-7890",
    locale: "en-US",
    lastLoggedIn: "June 20, 2023",
    dateOfBirth: "January 1, 1990",
    address: "123 Main Street, City, Country",
    gender: "Male",
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    socialMedia: {
      facebook: "https://www.facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedIn: "https://www.linkedin.com/in/johndoe",
    },
    website: "https://www.johndoe.com",
    accountCreationDate: "January 1, 2020",
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
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  First Name: {user.firstName}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  Last Name: {user.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Email: {user.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Phone Number: {user.phoneNumber}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Locale: {user.locale}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Last Logged In: {user.lastLoggedIn}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Date of Birth: {user.dateOfBirth}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Address: {user.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Gender: {user.gender}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Biography: {user.biography}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Account Creation Date: {user.accountCreationDate}
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
