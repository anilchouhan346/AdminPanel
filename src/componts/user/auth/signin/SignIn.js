import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../../../config/Api";
import { DataService } from "../../../../config/DataService";
import Index from "../../../Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const {_id}=useParams()
  // console.log(params._id)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const onEmailChandge = (e) => {
    setEmail(e.target.value);
  };
  const onPasswrodChange = (e) => {
    setPassword(e.target.value);
  };
 
  const LoginUser = async () => {
//  console.log("loginid",getId)
 
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    await DataService.post(API.Users.UserLogin, formData,{
    
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message)
        setTimeout(()=>{
          navigate(`/getone/${_id}`)
        },1000)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
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
                Sign In
              </Index.Typography>
              <Index.Typography className="auth-para" variant="p" component="p">
                Login User
              </Index.Typography>

              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    name="email"
                    id="fullWidth"
                    className="form-control"
                    value={email}
                    placeholder="Your Email"
                    onChange={onEmailChandge}
                  />
                </Index.Box>
              </Index.Box>

              <Index.Box className="input-box auth-field">
                <Index.Box className="input-box">
                  <Index.Box className="form-group">
                    <Index.OutlinedInput
                      className="form-control-eye"
                      id="outlined-adornment-password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={onPasswrodChange}
                      placeholder="password"
                    />
                  </Index.Box>
                </Index.Box>
              </Index.Box>

              <Index.Box className="auth-checkbox-main">
                <Index.FormControlLabel
                  control={<Index.Checkbox defaultChecked />}
                  className="checkbox-lable"
                  label="Remember Me"
                />
                <Index.Typography className="auth-forgot-lable">
                  <Link
                    to="/forgot-password"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot Password?
                  </Link>
                </Index.Typography>
              </Index.Box>

              <Index.PrimaryButton
                className="primary-btn auth-btn"
                type="submit"
                btnLabel="SignIn"
                onClick={LoginUser}
              />
              <Index.Typography
                className="auth-sub-para"
                variant="p"
                component="p"
              >
                Don't have an account?
                <span className="auth-sub-para-span">
                  <Link to="/sign-up" style={{ textDecoration: "none" }}>
                    Sign Up here
                  </Link>
                </span>{" "}
              </Index.Typography>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};
export default SignIn;
