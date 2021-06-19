import React from "react";
import { Typography, Modal } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeAlert } from "../../store/actions/alert.action";
import { MdError, MdCheckCircle } from "react-icons/md";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alertReducer);
  if (alert.open) {
    setTimeout(() => {
      dispatch(changeAlert({ open: false }));
    }, alert.time);
  }
  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className="d-flex flex-column justify-content-center align-items-center h-100"
    >
      <div className="bg-white d-flex align-items-center rounded p-4 ">
        {alert.class === "success" && (
          <MdCheckCircle
            autoHideDuration={alert.time}
            style={{ fontSize: "2.5rem" }}
            className="me-3 text-success"
          />
        )}
        {alert.class === "error" && (
          <MdError
            style={{ fontSize: "2.5rem" }}
            className="me-3 text-danger"
          />
        )}
        <Typography className="font-weight-bold" variant="subtitle2">
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
};

export default Alert;
