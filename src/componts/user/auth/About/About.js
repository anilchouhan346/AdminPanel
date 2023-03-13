import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../config/Api";
import { DataService } from "../../../../config/DataService";

const About = () => {
  const { _id } = useParams();
  console.log(_id);
  //   const gettoken = localStorage.getItem("token");
  //   console.log("yjtiuouiolh", gettoken);
  const GetAboutPage = async () => {
    await DataService.get(`${API.Users.GET_Users_Id}/${_id}`, {
      // headers: {
      //   auth: gettoken,
      // },
    })
      .then((response) => {
        console.log("response ->", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAboutPage();
  }, []);
  return <div>About page </div>;
  // };
};
export default About;
