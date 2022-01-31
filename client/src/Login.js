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
  FormButton,
  ForgotLink
} from "./components/Auth";
import { FormLabel, TextField } from "@material-ui/core";
import FormField from "./components/Auth/FormField";

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
        <FormField required>
          <FormLabel required={false}>E-mail address</FormLabel>
          <TextField aria-label="username" name="username" type="text" />
        </FormField>
        <FormField required>
          <FormLabel required={false}>Password</FormLabel>
          <TextField
            aria-label="password"
            type="password"
            name="password"
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
