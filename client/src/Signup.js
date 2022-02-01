import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import {
  Layout,
  Header,
  HeaderButton,
  Form,
  FormHeading,
  FormField,
  FormLabel,
  FormButton
} from "./components/Auth";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { user, register } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Layout>
      <Header question={"Already have an account?"}>
        <HeaderButton onClick={() => history.push("/login")}>
          Login
        </HeaderButton>
      </Header>
      <Form onSubmit={handleRegister}>
        <FormHeading>Create an account.</FormHeading>
        <FormField>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            aria-label="username"
            name="username"
            type="text"
            id="username"
            placeholder="andy-language"
            required
          />
        </FormField>

        <FormField>
          <FormLabel htmlFor="email">E-mail address</FormLabel>
          <TextField
            aria-label="e-mail address"
            type="email"
            name="email"
            id="email"
            placeholder="andy@language.com"
            required
          />
        </FormField>

        <FormField>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            aria-label="password"
            type="password"
            inputProps={{ minLength: 6 }}
            name="password"
            id="password"
            placeholder="password123"
            required
          />
        </FormField>

        <FormButton type="submit" variant="contained" size="large">
          Create
        </FormButton>
      </Form>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
