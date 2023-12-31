import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import { Formik } from "formik";
import { useFormik } from "formik";
import * as yup from "yup";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { getAdminLogin } from "../../redux/admin/Actions";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const defaultTheme = createTheme();

// const validationSchema = yup.object({
//   email: yup.string().email("invalid email").required("email is required"),
//   password: yup.string().required("password is required"),
// });

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorData = useSelector((state) => state.admin.error);
  //console.log(errorData?.data);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: validationSchema,

    onSubmit: (values) => {
      dispatch(getAdminLogin(values)).then(() => {
        navigate("/");
      });
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {errorData?.data?.message ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">{errorData?.data?.message}</Alert>
            </Stack>
          ) : (
            ""
          )}
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              {...formik.getFieldProps("email")}
              // error={!!formik.touched.email && !!formik.errors.email}
              // helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...formik.getFieldProps("password")}
              // error={!!formik.touched.password && !!formik.errors.password}
              // helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
