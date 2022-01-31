import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";
import { Layout, Header, HeaderButton, Form } from "./components/Auth";

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
        <div className="main-content-form">
          <div className="form-field">
            <div className="label"></div>
            <div className="input"></div>
          </div>
          <div className="form-button"></div>
        </div>
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
