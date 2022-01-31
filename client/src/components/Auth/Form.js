import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Form = ({ title, onSubmit }) => {
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <Typography variant="h1">Heading</Typography>
      <Grid>
        <Grid>
          <FormControl margin="normal" required>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
            />
          </FormControl>
        </Grid>
        <FormControl margin="normal" required>
          <TextField
            label="password"
            aria-label="password"
            type="password"
            name="password"
          />
        </FormControl>
        <Grid>
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;

//<FormControl margin="normal" required>
//   <TextField
//     aria-label="username"
//     label="Username"
//     name="username"
//     type="text"
//   />
// </FormControl>
