import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataService } from "../../../../config/DataService";
import { API } from "../../../../config/Api";
import {
  Button,
  DialogActions,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Modal,
} from "@mui/material";
import Index from "../../../../componts/Index";
import { toast, ToastContainer } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
// import CustomModal from "../../../../componts/modal/CustomModel";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, GetUser } from "../../../../redux/action/Index";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// import { json } from "react-router-dom";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
const UserList = () => {
  const myuserlist = useSelector((state) => state.UserReducer.UserData);
  // console.log("state",state)
  console.log("myUserlist", myuserlist);
  const dispatch = useDispatch();
  // const { editId } = useParams();
  const navigate = useNavigate();
  // console.log(editId);
  // const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const [openmodel, setOpenModel] = React.useState(false);
  const handleOpen = (val) => setOpenModel(true);
  const [deleteId, setDeleteId] = useState();
  const handleCloseModel = () => setOpenModel(false);
  const [editId, setEditId] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = myuserlist.map((item) => {
    return {
      id: item._id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      password: item.password,
      mobile: item.mobile,
    };
  });
  // setData(rows);

  console.log("Userdata", userdata);
  console.log("Userrows", rows);

  // useEffect(() => {
  //   if (myuserlist) {
  //     setUserData(myuserlist);
  //   }
  // }, [myuserlist]);

  useEffect(() => {
    dispatch(GetUser());
    if (rows) {
      setData(rows);
    }
  }, []);
  console.log(data, "dataaaaa");
  const options = [
    <Button
      variant="contained"
      onClick={() => {
        navigate(`/add-users/${editId}`);
      }}
    >
      Edit
    </Button>,
    <Button
      variant="contained"
      onClick={() => {
        handleOpen();
        setDeleteId(`${editId}`);
      }}
    >
      Delete
    </Button>,
  ];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 90,
    },

    {
      field: "password",
      headerName: "password",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      // type: "number",
      width: 90,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={(event) => {
                handleClick(event);
                setEditId(params?.id);
                // setEditDetails(params?.row);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                  className="menu-option-li"
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </>
        );
      },
    },
  ];
  const DeleteUserData = (id) => {
    console.log("delid", id);
    dispatch(DeleteData(id));
    dispatch(GetUser())
    handleClose();
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        open={openmodel}
        onClose={handleCloseModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Index.Box sx={style}>
          <DialogTitle style={{ fontFamily: "Poppins-Medium", fontSize: 17 }}>
            Are you sure want to delete the user?
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                handleCloseModel();
                DeleteUserData(`${deleteId}`);
              }}
              style={{
                color: "white",
                backgroundColor: "#00235f",
                fontFamily: "system-ui",
                fontSize: 13,
                padding: 5,
              }}
            >
              Confirm
            </Button>
            <Button
              onClick={handleCloseModel}
              style={{
                color: "white",
                backgroundColor: "red",
                fontSize: 12,
                fontFamily: "system-ui",
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Index.Box>
      </Modal>
      <Index.Link
        to="/add-users"
        className="add-user-btn"
        style={{
          textDecoration: "none",
          fontSize: 15,
          fontFamily: "Poppins-SemiBold",
          width: "8%",
        }}
      >
        <AddIcon /> Add
      </Index.Link>
      <Index.Box className="add-user-data-main">
        <Index.Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            className="user-data-head"
            rows={data}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row?.id}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Index.Box>
      </Index.Box>
    </div>
  );
};
export default UserList;
