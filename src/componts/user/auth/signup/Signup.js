import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../../../config/Api";
import { DataService, DataServices } from "../../../../config/DataService";
import Index from "../../../Index";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const { editId } = useParams();
  console.log(editId);
  const [registeruserfields, setRagisterUserFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [validation, setValidation] = useState({});
  const [nameError, setNameError] = useState("");

  const handleInputFields = (e) => {
    const { name, value } = e.target;
    setRagisterUserFields({
      ...registeruserfields,
      [name]: value,
    });
  };

  const RegsiterValidation = (value) => {
    let errors = {};
    // const namevali = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.firstName) {
      errors.firstName = "first Name is required";
    }
    // else if (!namevali.test(value)) {
    //   errors.firstName = "invalid first Name format";
    // }
    else {
      errors.firstName = "";
    }
    if (!value.lastName) {
      errors.lastName = "last Name is required";
    }
    // else if (!namevali.test(value)) {
    //   errors.lastName = "invalid last Name format";
    // }
    else {
      errors.lastName = "";
    }
    if (!value.email) {
      errors.email = "email is required";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    } else {
      errors.email = "";
    }
    if (!value.password) {
      errors.password = "password is required";
    } else if (value.password.length < 4) {
      // console.log(value.password.length);
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else {
      errors.password = "";
    }
    if (!value.mobile) {
      errors.mobile = "mobile is required";
    } else if (value.mobile.length > 10) {
      errors.mobile = "mobile number cannot exceed more than 10 digit";
    } else {
      errors.mobile = "";
    }
    return setValidation(errors);
  };
  const CreateUser = async () => {
    // setSumitError()
    RegsiterValidation(registeruserfields);
    const formData = new URLSearchParams();

    formData.append("firstName", registeruserfields.firstName);
    formData.append("lastName", registeruserfields.lastName);
    formData.append("email", registeruserfields.email);
    formData.append("password", registeruserfields.password);
    formData.append("mobile", registeruserfields.mobile);
    dispatch(Signup(formData))
  };
  return (
    <div>
      <Index.Box className="auth-flex-main">
        <Index.Box className="auth-right">
          <Index.Box className="auth-inner-main">
            <Index.Box className="auth-inner">
              <Index.Box className="auth-logo-main">
                <img
                  src={Index.Svg.ncxbluelogo}
                  className="auth-logo"
                  alt="auth-logo"
                ></img>
                <Index.Typography className="auth-logo-text">
                  Token
                </Index.Typography>
              </Index.Box>
              <ToastContainer />
              <Index.Typography
                className="auth-title"
                variant="h1"
                component="h1"
              >
                Sign Up
              </Index.Typography>
              <Index.Typography className="auth-para" variant="p" component="p">
                Create New NCX Account
              </Index.Typography>
              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    id="fullWidth"
                    name="firstName"
                    // required
                    className="form-control"
                    placeholder="First Name"
                    value={registeruserfields.firstName}
                    onChange={handleInputFields}
                  />
                </Index.Box>
                {validation.firstName && (
                  <p style={{ color: "red" }}>{validation.firstName}</p>
                )}
                {validation.firstName && console.log(validation)}
              </Index.Box>

              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    id="fullWidth"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={registeruserfields.lastName}
                    onChange={handleInputFields}
                  />
                </Index.Box>
                {validation.lastName && (
                  <p style={{ color: "red" }}>{validation.lastName}</p>
                )}
                {validation.lastName && console.log(validation)}
              </Index.Box>
              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    name="email"
                    value={registeruserfields.email}
                    id="fullWidth"
                    className="form-control"
                    placeholder="Your Email"
                    onChange={handleInputFields}
                  />
                </Index.Box>
                {validation.email && (
                  <p style={{ color: "red" }}>{validation.email}</p>
                )}
                {validation.email && console.log(validation)}
              </Index.Box>

              <Index.Box className="input-box auth-field">
                <Index.Box className="input-box">
                  <Index.Box className="form-group">
                    <Index.OutlinedInput
                      className="form-control-eye"
                      id="outlined-adornment-password"
                      name="password"
                      // type="password"
                      placeholder="password"
                      value={registeruserfields.password}
                      onChange={handleInputFields}
                    />
                  </Index.Box>
                  {validation.password && (
                    <p style={{ color: "red" }}>{validation.password}</p>
                  )}
                  {validation.password && console.log(validation)}
                </Index.Box>
              </Index.Box>

              <Index.Box className="input-box auth-field">
                <Index.Box className="input-box auth-field">
                  <Index.Box className="input-box">
                    <Index.Box className="form-group">
                      <Index.OutlinedInput
                        name="mobile"
                        placeholder="Mobile number"
                        className="form-control-eye"
                        type="phone"
                        value={registeruserfields.mobile}
                        // id="outlined-adornment-password"
                        onChange={handleInputFields}
                      />
                    </Index.Box>
                    {validation.mobile && (
                      <p style={{ color: "red" }}>{validation.mobile}</p>
                    )}
                    {validation.mobile && console.log(validation)}
                  </Index.Box>
                </Index.Box>
              </Index.Box>

              <Index.Box className="auth-checkbox-main">
                <Index.FormControlLabel
                  control={<Index.Checkbox />}
                  className="checkbox-lable"
                />
                <Index.Typography className="auth-checkbox-lable">
                  I agree to the
                  <span className="auth-checkbox-spanlable">
                    Terms & Condition
                  </span>
                  and
                  <span className="auth-checkbox-spanlable">
                    Privacy and Policy.
                  </span>
                </Index.Typography>
              </Index.Box>

              <Index.PrimaryButton
                className="primary-btn auth-btn"
                type="submit"
                btnLabel="Create Account"
                onClick={CreateUser}
              />
              <Index.Typography
                className="auth-sub-para"
                variant="p"
                component="p"
              >
                Already have an account?{" "}
                <span className="auth-sub-para-span">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Signin instead
                  </Link>
                </span>{" "}
              </Index.Typography>
              <Index.AuthFooter />
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};
export default Signup;
