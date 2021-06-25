import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { change, register } from "../../store/actions/register.action";

const Register = () => {
  const { user, error, success } = useSelector(
    (state) => state.registerReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img
                height="48"
                src="/logo.png"
                alt="nome escrito car crm - logo do site"
              />
              <Typography className="mt-3" variant="h6" component="h1">
                Crie sua conta, teste grátis!
              </Typography>
            </div>
            <TextField
              error={error.name && true}
              margin="normal"
              label="Nome"
              value={user.name}
              onChange={(text) => {
                dispatch(change({ name: text.target.value }));
                if (error.name && delete error.name);
              }}
            />
            {error.name && (
              <strong className="text-danger">{error.name[0]}</strong>
            )}
            <TextField
              error={error.email && true}
              margin="normal"
              label="Email"
              value={user.email}
              type="email"
              autoComplete="email"
              onChange={(text) => {
                dispatch(change({ email: text.target.value }));
                if (error.email && delete error.email);
              }}
            />
            {error.email && (
              <strong className="text-danger">{error.email[0]}</strong>
            )}
            <TextField
              error={error.password && true}
              margin="normal"
              label="Senha"
              type="password"
              value={user.password}
              onChange={(text) => {
                dispatch(change({ password: text.target.value }));
                if (error.password && delete error.password);
              }}
            />
            {error.password && (
              <strong className="text-danger">{error.password[0]}</strong>
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="mt-4 mb-4"
              onClick={() => dispatch(register(user))}
            >
              Cadastrar
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-danger">
                Fazer login
              </Link>
            </div>
            {success && <Redirect to="/vehicles" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
