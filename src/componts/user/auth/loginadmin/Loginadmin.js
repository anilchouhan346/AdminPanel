import React from "react";
import Index from "../../../Index";

const Loginadmin = () => {
  return (
    <div>
    <Index.Box className="auth-flex-main">
      <Index.Box className="auth-right">
        <Index.Box className="auth-inner-main">
          <Index.Box className="auth-inner">
            <Index.Box className="auth-logo-main">
          
            
            </Index.Box>
         
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
                 
                  placeholder="Your Email"
                 
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
                <Index.Link
                  to="/forgot-password"
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password?
                </Index.Link>
              </Index.Typography>
            </Index.Box>

            <Index.PrimaryButton
              className="primary-btn auth-btn"
              type="submit"
              btnLabel="SignIn"
            
            />
            <Index.Typography
              className="auth-sub-para"
              variant="p"
              component="p"
            >
              Don't have an account?
              <span className="auth-sub-para-span">
                <Index.Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign Up here
                </Index.Link>
              </span>{" "}
            </Index.Typography>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  </div>
  );
};
export default Loginadmin;
