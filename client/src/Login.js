import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";
import {
  Layout,
  Header,
  HeaderButton,
  Form,
  FormHeading,
  FormLabel,
  FormButton,
  ForgotLink,
  FormField
} from "./components/Auth";
import { TextField } from "@material-ui/core";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Layout>
      <Header question={"Don't have an account?"}>
        <HeaderButton onClick={() => history.push("/register")}>
          Create account
        </HeaderButton>
      </Header>
      <Form onSubmit={handleLogin}>
        <FormHeading>Welcome Back!</FormHeading>
        <FormField>
          <FormLabel htmlFor="username">E-mail address</FormLabel>
          <TextField
            id="username"
            aria-label="username"
            name="username"
            type="text"
            placeholder="andy@language.com"
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            id="password"
            aria-label="password"
            type="password"
            name="password"
            placeholder="password123"
            InputProps={{
              endAdornment: <ForgotLink />
            }}
          />
        </FormField>
        <FormButton type="submit" variant="contained" size="large">
          Login
        </FormButton>
      </Form>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
