"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import AuthModalInput from "./AuthModalInput";
import useAuth from "@/hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  isSignIn: boolean;
}

export interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

export default function AuthModal({ isSignIn }: Props) {
  const [open, setOpen] = useState(false);
  const { signIn } = useAuth();
  const { loading, data, error, setAuthState } = useContext(
    AuthenticationContext
  );

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const [inputs, setInputs] = useState<Inputs>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInputs({
      ...inputs,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      password: "",
    });
    setAuthState({
      loading: loading,
      data: data,
      error: null,
    });
  };

  const handleOnClick = () => {
    if (isSignIn) {
      signIn(inputs.email, inputs.password);
    }
  };

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        setDisabled(false);
        return;
      }
    } else {
      if (
        inputs.city &&
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.password &&
        inputs.phone
      ) {
        setDisabled(false);
        return;
      }
    }

    setDisabled(true);
  }, [inputs]);

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )} border p-1 px-4 rounded mr-3`}>
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="p-2 h-[600px]">
            {error ? (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            ) : null}
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {renderContent("Sign In", "Create Account")}
              </p>
            </div>
            {loading ? (
              <div className="flex justify-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="m-auto">
                <h2 className="text-2xl font-light text-center">
                  {renderContent(
                    "Log into Your Account",
                    "Create your Open Table Account"
                  )}
                </h2>
                <AuthModalInput
                  inputs={inputs}
                  handleOnChange={handleOnChange}
                  isSignIn={isSignIn}></AuthModalInput>
                <button
                  onClick={handleOnClick}
                  className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  disabled={disabled}>
                  {renderContent("Sign In", " Sign Up")}
                </button>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
