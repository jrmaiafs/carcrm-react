import React from "react";
import { Redirect} from 'react-router-dom'
import { Button, Typography, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { change, login } from "../../store/actions/auth.action";

export default function Auth() {
  const { credentials, success } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="CAR CRM" height="48" />
              <Typography className="mt-3" component="h6" variant="h6">
                Plataforma para revenda de veículos
              </Typography>
              <TextField
                label="Email"
                type="email"
                margin="normal"
                autoComplete="email"
                value={credentials.email}
                onChange={(text) =>
                  dispatch(change({ email: text.target.value }))
                }
              />
              <TextField
                label="Senha"
                type="senha"
                margin="normal"
                value={credentials.password}
                onChange={(text) =>
                  dispatch(change({ password: text.target.value }))
                }
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="mb-4 mt-4"
                onClick={() => dispatch(login(credentials))}
              >
                Entrar
              </Button>
              {(success) &&
                <Redirect to="/vehicles" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
