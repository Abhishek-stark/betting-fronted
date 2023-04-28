import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updatePassword, reset } from "../Reducers/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { CurrencyRupee } from "@mui/icons-material";

const Dashsetting = () => {
  const [passwordData, setpasswordData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [showone, setshowone] = useState("show");
  const [showtwo, setshowtwo] = useState("hidden");
  const [showthree, setshowthree] = useState("hidden");
  const [showfour, setshowfour] = useState("hidden");
  const [showfive, setshowfive] = useState("hidden");
  const navigate = useNavigate();

  //password Section
  const dispatch = useDispatch();

  const { currentPassword, password, confirmPassword } = passwordData;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!user) navigate("/");
    if (isError) console.log(message);
    if (isLoading) console.log("loading");
    if (user?.message === "Your password changed successfully")
      toast.success(user?.message);
    if (isSuccess) console.log("success", message);
    dispatch(reset());
  }, [isError, message, isLoading, isSuccess, dispatch]);

  const Onchange = (e) => {
    setpasswordData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const Onsubmit = async (e) => {
    e.preventDefault();
    const passwordData = {
      currentPassword,
      password,
      confirmPassword,
    };

    dispatch(updatePassword(passwordData));
  };

  const btnoneClick = () => {
    setshowone("show");
    setshowtwo("hidden");
    setshowthree("hidden");
    setshowfive("hidden");
    setshowfour("hidden");
  };
  const btntwoClick = () => {
    setshowtwo("show");
    setshowone("hidden");

    setshowthree("hidden");
    setshowfive("hidden");
    setshowfour("hidden");
  };
  const btnthreeClick = () => {
    setshowthree("show");
    setshowone("hidden");
    setshowtwo("hidden");

    setshowfive("hidden");
    setshowfour("hidden");
  };
  const btnfourClick = () => {
    setshowfour("show");
    setshowone("hidden");
    setshowtwo("hidden");
    setshowthree("hidden");
    setshowfive("hidden");
  };
  const btnfiveClick = () => {
    setshowfive("show");
    setshowone("hidden");
    setshowtwo("hidden");
    setshowthree("hidden");

    setshowfour("hidden");
  };
  const logoutbtn = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="setting">
        <ToastContainer />
        <div className="setting_left">
          <div onClick={btnoneClick} className="setting_left--div">
            Amount
          </div>
          <div onClick={btntwoClick} className="setting_left--div">
            Password
          </div>
          <div onClick={btnthreeClick} className="setting_left--div">
            Number
          </div>

          <div onClick={btnfourClick} className="setting_left--div">
            ReferelId
          </div>

          <div onClick={logoutbtn} className="setting_left--div">
            Logout
          </div>
        </div>
        <div className="setting_right ">
          <div className="setting_right--div" id={showone}>
            <p>
              <CurrencyRupee />
              {user?.data?.balance}
            </p>
            <Button variant="contained" color="error">
              Widdraw
            </Button>
            <span style={{ marginLeft: "32px" }}>
              <Button variant="contained" color="warning">
                Add Money
              </Button>
            </span>
          </div>
          <div className="setting_right--div" id={showtwo}>
            <form onSubmit={Onsubmit}>
              <input
                type="password"
                placeholder="Enter Current Pasword"
                required
                minLength={10}
                id="currentPassword"
                name="currentPassword"
                onChange={Onchange}
                value={currentPassword}
              />

              <input
                type="password"
                placeholder="Enter New Pasword"
                required
                id="password"
                name="password"
                onChange={Onchange}
                value={password}
                minLength={10}
                autoComplete="off"
              />

              <input
                type="password"
                placeholder="Confirm password"
                required
                id="confrimPassword"
                name="confirmPassword"
                onChange={Onchange}
                value={confirmPassword}
                minLength={10}
                autoComplete="off"
              />
              <Button variant="contained" type="submit">
                Change Password
              </Button>
            </form>
          </div>
          <div id={showthree} className="setting_right--div">
            Current Number : {user?.data?.mobileNumber}
            <hr />
            <p>Change Mobile Number</p>
            <form className="numberform">
              <input
                type="password"
                required
                placeholder="Enter current Password"
                minLength={10}
                maxLength={15}
              />
              <input
                type="text"
                placeholder="Enter New Number"
                required
                minLength={10}
                maxLength={10}
              />
              <input type="text" placeholder="Enter OTP" />
              <Button variant="contained">send OTP</Button>
              <Button variant="contained" color="error">
                Update
              </Button>
            </form>
          </div>
          <div
            style={{ color: "gray" }}
            className="setting_right--div"
            id={showfour}
          >
            Your ReferId is : {user?.data?.referId}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashsetting;
