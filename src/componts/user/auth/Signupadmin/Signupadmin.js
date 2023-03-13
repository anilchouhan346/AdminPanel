import React, { useState } from "react";
import { API } from "../../../../config/Api";
import { DataService } from "../../../../config/DataService";
import Index from "../../../Index";
const Signupadmin = () => {
  const [adminregister, setAdminRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const adminhandlechange = (event) => {
    const { name, value } = event.target;
    console.log("name,value", name, value);
    setAdminRegister({
      ...adminregister,
      [name]: value,
    });
  };

  const CreateAdminAccout = async () => {
    const formdata = new URLSearchParams();
    formdata.append("firstName", adminregister.firstName);
    formdata.append("lastName", adminregister.lastName);
    formdata.append("email", adminregister.email);
    formdata.append("password", adminregister.password);
    formdata.append("mobile", adminregister.mobile);

    await DataService.post(API.Users.RegisterUsers, formdata)
      .then((res) => {
        console.log("respone", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Index.Box className="auth-flex-main">
        <Index.Box className="auth-right">
          <Index.Box className="auth-inner-main">
            <Index.Box className="auth-inner">
              <Index.Box className="auth-logo-main"></Index.Box>

              <Index.Typography
                className="auth-title"
                variant="h1"
                component="h1"
              >
                Sign Up
              </Index.Typography>
              <Index.Typography className="auth-para" variant="p" component="p">
                Create New Admin Account
              </Index.Typography>
              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    id="fullWidth"
                    name="firstName"
                    // required
                    className="form-control"
                    placeholder="firstName"
                    onChange={adminhandlechange}
                  />
                </Index.Box>
              </Index.Box>

              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    id="fullWidth"
                    name="lastName"
                    // required
                    className="form-control"
                    placeholder="lastName"
                    onChange={adminhandlechange}
                  />
                </Index.Box>
              </Index.Box>

              <Index.Box className="input-box auth-field">
                <Index.Box className="form-group">
                  <Index.TextField
                    fullWidth
                    name="email"
                    id="fullWidth"
                    className="form-control"
                    placeholder="Your Email"
                    onChange={adminhandlechange}
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
                      // type="password"
                      placeholder="password"
                      onChange={adminhandlechange}
                    />
                  </Index.Box>
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
                        onChange={adminhandlechange}
                      />
                    </Index.Box>
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
                onClick={CreateAdminAccout}
              />
              <Index.Typography
                className="auth-sub-para"
                variant="p"
                component="p"
              >
                Already have an account?{" "}
                <span className="auth-sub-para-span">
                  <Index.Link to="/login" > Signin instead</Index.Link>
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
export default Signupadmin;
