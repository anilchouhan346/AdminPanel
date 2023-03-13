import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Index from "../../../../componts/Index";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DataService } from "../../../../config/DataService";
import { API } from "../../../../config/Api";
import { toast, ToastContainer } from "react-toastify";

const AddUser = () => {
  const { editId } = useParams();
  const navigate = useNavigate();
  //   console.log(editId);
  const [singledata, setSingleData] = useState({});
  const [registerfields, setRagisterField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const getSigleData = async () => {
    await DataService.get(`${API.Users.GET_Users_Id}/${editId}`, {})
      .then((response) => {
        console.log("res", response);
        setSingleData(response.data.data);
      })
      .catch((error) => {
        console.log("error->", error);
      });
  };
  useEffect(() => {
    const IntialState = {
      firstName: editId ? singledata?.firstName : "",
      lastName: editId ? singledata?.lastName : "",
      email: editId ? singledata?.email : "",
      password: editId ? singledata?.password : "",
      mobile: editId ? singledata?.mobile : "",
    };
    setRagisterField(IntialState);
  }, [singledata]);

  useEffect(() => {
    getSigleData();
  }, []);
  const RagisterHandleChange = (e) => {
    const { name, value } = e.target;
    setRagisterField({
      ...registerfields,
      [name]: value,
    });
  };

  const CreateUser = async () => {
    const formData = new URLSearchParams();

    formData.append("firstName", registerfields.firstName);
    formData.append("lastName", registerfields.lastName);
    formData.append("email", registerfields.email);
    formData.append("password", registerfields.password);
    formData.append("mobile", registerfields.mobile);
    if (editId !== undefined) {
      await DataService.put(`${API.Users.Edit_User}/${editId}`, formData)
        .then((res) => {
          console.log("response", res);

          toast("User updated ");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          console.log("error", error);

          toast.error("Error");
        });
    } else {
      await DataService.post(API.Users.RegisterUsers, formData)
        .then((response) => {
          // console.log("sign up response", response.data);
          toast.success(response.data.message);
          //  localStorage.setItem("list",JSON.stringify(registeruserfields))
          if (response.data.message !== "User Not exist") {
            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        })
        .catch((error) => {
          console.log("error->", error);
        });
    }
  };

  return (
    <div>
      <Index.Box>
        <Index.AppBar>
          <Index.Typography>
            {editId === undefined ? "Add" : "Edit"} User
          </Index.Typography>
        </Index.AppBar>
        <ToastContainer />
        <Index.Box>
          <Index.FormHelperText>User Name</Index.FormHelperText>
        </Index.Box>
        <Index.Box>
          <Index.Box>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="firstName"
              label="FirstName"
              variant="outlined"
              value={registerfields.firstName}
              onChange={RagisterHandleChange}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="lastName"
              name="lastName"
              variant="outlined"
              value={registerfields.lastName}
              onChange={RagisterHandleChange}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Email"
              name="email"
              variant="outlined"
              value={registerfields.email}
              onChange={RagisterHandleChange}
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Password"
              name="password"
              variant="outlined"
              value={registerfields.password}
              onChange={RagisterHandleChange}
            />
            <br />

            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="Mobile"
              variant="outlined"
              name="mobile"
              value={registerfields.mobile}
              onChange={RagisterHandleChange}
            />
            <br />

            <br />
            <Index.Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={CreateUser}
            >
              Submit
            </Index.Button>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </div>
  );
};
export default AddUser;
