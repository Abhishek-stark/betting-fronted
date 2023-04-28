import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  reset,
  tenjoin,
  hundredjoin,
  tweentyjoin,
  fourtyjoin,
  sixtyjoin,
  seventyjoin,
  onefiftyjoin,
  selecttenthColor,
  selectoneFiftyColor,
  selectfourtyColor,
  selecthundredColor,
  selecttweentyColor,
  selectseventyColor,
  selectsixtyColor,
  getJoinedUsers,
} from "../Reducers/userSlice";

import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import FrontandBack from "./FrontandBack";
const RotatingCard = () => {
  const [flipbtnten, setflipbtnten] = useState(false);
  const [flipbtntweenty, setflipbtntweenty] = useState(false);
  const [flipbtnfourty, setflipbtnfourty] = useState(false);
  const [flipbtnsixty, setflipbtnsixty] = useState(false);
  const [flipbtnseventy, setflipbtnseventy] = useState(false);
  const [flipbtnhundred, setflipbtnhundred] = useState(false);
  const [flipbtnoneFifty, setflipbtnoneFifty] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message, joinedUsers } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (isError) console.log(message);
    if (isSuccess) console.log("success in fetching api");

    if (!user) navigate("/");
    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, navigate, message, dispatch]);

  useEffect(() => {
    if (user?.message) toast.success(user?.message);
  }, [user?.message]);
  // useEffect(() => {
  //   if (user) dispatch(getJoinedUsers());
  // }, [user, dispatch]);

  if (isLoading) <Loading />;
  // if (user?.message) toast.success(user?.message);

  const redtenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_RED }));
  };
  const greententh = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_GREEN }));
  };
  const yellowtenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_YELLOW }));
  };

  const pinktenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_PINK }));
  };

  const bluetenth = (e) => {
    dispatch(selecttenthColor({ tenthColor: import.meta.env.VITE_BLUE }));
  };

  const redoneFifty = (e) => {
    dispatch(selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_RED }));
  };
  const greenoneFifty = (e) => {
    dispatch(
      selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_GREEN })
    );
  };
  const yellowoneFifty = (e) => {
    dispatch(
      selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_YELLOW })
    );
  };

  const pinkoneFifty = (e) => {
    dispatch(selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_PINK }));
  };

  const blueoneFifty = (e) => {
    dispatch(selectoneFiftyColor({ oneFiftyColor: import.meta.env.VITE_BLUE }));
  };
  const redhundred = (e) => {
    dispatch(selecthundredColor({ hundredColor: import.meta.env.VITE_RED }));
  };
  const greenhundred = (e) => {
    dispatch(selecthundredColor({ hundredColor: import.meta.env.VITE_GREEN }));
  };
  const yellowhundred = (e) => {
    dispatch(selecthundredColor({ hundredColor: import.meta.env.VITE_YELLOW }));
  };

  const pinkhundred = (e) => {
    dispatch(selecthundredColor({ hundredColor: import.meta.env.VITE_PINK }));
  };

  const bluehundred = (e) => {
    dispatch(selecthundredColor({ hundredColor: import.meta.env.VITE_BLUE }));
  };

  const redfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_RED }));
  };

  const greenfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_GREEN }));
  };
  const yellowfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_YELLOW }));
  };

  const pinkfourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_PINK }));
  };

  const bluefourty = (e) => {
    dispatch(selectfourtyColor({ fourtyColor: import.meta.env.VITE_BLUE }));
  };

  const redtweenty = () => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_RED }));
  };

  const greentweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_GREEN }));
  };

  const yellowtweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_YELLOW }));
  };

  const pinktweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_PINK }));
  };

  const bluetweenty = (e) => {
    dispatch(selecttweentyColor({ tweentyColor: import.meta.env.VITE_BLUE }));
  };

  const redseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_RED }));
  };
  const greenseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_GREEN }));
  };

  const yellowseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_YELLOW }));
  };

  const pinkseventy = () => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_PINK }));
  };

  const blueseventy = (e) => {
    dispatch(selectseventyColor({ seventyColor: import.meta.env.VITE_BLUE }));
  };

  const greensixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_GREEN }));
  };
  const yellowsixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_YELLOW }));
  };
  const pinksixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_PINK }));
  };
  const redsixty = () => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_RED }));
  };

  const bluesixty = (e) => {
    dispatch(selectsixtyColor({ sixtyColor: import.meta.env.VITE_BLUE }));
  };

  const joinetenth = () => {
    setflipbtnten(!flipbtnten);
    dispatch(tenjoin());

    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 10 contest."
    // )
    //   toast.success(user?.message);
  };

  const joinetweenty = (e) => {
    setflipbtntweenty(!flipbtntweenty);
    dispatch(tweentyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 20 contest."
    // )
    //   toast.success(user?.message);
  };

  const joinefourty = (e) => {
    setflipbtnfourty(!flipbtnfourty);
    dispatch(fourtyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 40 contest."
    // )
    //   toast.success(user?.message);
  };

  const joinesixty = (e) => {
    setflipbtnsixty(!flipbtnsixty);
    dispatch(sixtyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 60 contest."
    // )
    //   toast.success(user?.message);
  };

  const joineseventy = () => {
    setflipbtnseventy(!flipbtnseventy);
    dispatch(seventyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join Rs 70 contest."
    // )
    //   toast.success(user?.message);
  };

  const joineoneFifty = (e) => {
    setflipbtnoneFifty(!flipbtnoneFifty);
    dispatch(onefiftyjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join this Rs 150 contest."
    // )
    //   toast.success(user?.message);
  };

  const joinehundred = (e) => {
    setflipbtnhundred(!flipbtnhundred);
    dispatch(hundredjoin());
    // if (
    //   user?.message ===
    //   "You doesn't have enough balance  to join this Rs 100 contest."
    // )
    //   toast.success(user?.message);
  };

  const getjoinedpeoples = () => {
    dispatch(getJoinedUsers());
  };

  const result = () => {
    navigate("/results");
  };
  return (
    <section className="Cardsboxes">
      <ToastContainer />
      <div className="threecards">
        <FrontandBack
          price={10}
          joined={user?.data?.tenthjoin}
          join={joinetenth}
          btn={user?.data?.tenthjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.tenthJoined}
          seeResults={result}
          classes="tenCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnten}
          flipnumber={"tenflip"}
          item={user?.data?.tenth === "0" ? "Not Declared" : user?.item}
          choosen={user?.data?.tenth}
          declaration={
            user?.data?.tenth === user?.item
              ? "Win"
              : user?.data?.tenth === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.tenthjoin === "yes" ? false : true}
          submitfuncR={redtenth}
          submitfuncG={greententh}
          submitfuncY={yellowtenth}
          submitfuncP={pinktenth}
          submitfuncB={bluetenth}
          appearence={
            user?.data?.tenthjoin === "yes" || user?.data?.tenth !== "0"
              ? true
              : false
          }
        />
        <FrontandBack
          price={20}
          joined={user?.data?.tweentyjoin}
          join={joinetweenty}
          btn={user?.data?.tweentyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.tweentyJoined}
          seeResults={result}
          classes="tweentyCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtntweenty}
          flipnumber={"tweentyflip"}
          item={user?.data?.tweenty === "0" ? "Not Declared" : user?.item}
          declaration={
            user?.data?.tweenty === user?.item
              ? "Win"
              : user?.data?.tweenty === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.tweentyjoin === "yes" ? false : true}
          choosen={user?.data?.tweenty}
          submitfuncR={redtweenty}
          submitfuncG={greentweenty}
          submitfuncY={yellowtweenty}
          submitfuncP={pinktweenty}
          submitfuncB={bluetweenty}
          appearence={
            user?.data?.tweentyjoin === "yes" || user?.data?.tweenty !== "0"
              ? true
              : false
          }
        />
        <FrontandBack
          price={40}
          joined={user?.data?.fourtyjoin}
          join={joinefourty}
          btn={user?.data?.fourtyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.fourtyJoined}
          seeResults={result}
          classes="fourtyCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnfourty}
          flipnumber={"fourtyflip"}
          item={user?.data?.fourty === "0" ? "Not Declared" : user?.item}
          choosen={user?.data?.fourty}
          declaration={
            user?.data?.fourty === user?.item
              ? "Win"
              : user?.data?.fourty === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.fourtyjoin === "yes" ? false : true}
          submitfuncR={redfourty}
          submitfuncG={greenfourty}
          submitfuncY={yellowfourty}
          submitfuncP={pinkfourty}
          submitfuncB={bluefourty}
          appearence={
            user?.data?.fourtyjoin === "yes" || user?.data?.fourty !== "0"
              ? true
              : false
          }
        />
        <FrontandBack
          price={60}
          joined={user?.data?.sixtyjoin}
          join={joinesixty}
          btn={user?.data?.sixtyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.sixtyJoined}
          seeResults={result}
          classes="sixtyCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnsixty}
          flipnumber={"sixtyflip"}
          item={user?.data?.sixty === "0" ? "Not Declared" : user?.item}
          declaration={
            user?.data?.sixty === user?.item
              ? "Win"
              : user?.data?.sixty === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.sixtyjoin === "yes" ? false : true}
          choosen={user?.data?.sixty}
          submitfuncR={redsixty}
          submitfuncG={greensixty}
          submitfuncY={yellowsixty}
          submitfuncP={pinksixty}
          submitfuncB={bluesixty}
          appearence={
            user?.data?.sixtyjoin === "yes" || user?.data?.sixty !== "0"
              ? true
              : false
          }
        />
        <FrontandBack
          price={70}
          joined={user?.data?.seventyjoin}
          join={joineseventy}
          btn={user?.data?.seventyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.seventyJoined}
          seeResults={result}
          classes="seventyCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnseventy}
          flipnumber={"seventyflip"}
          item={user?.data?.seventy === "0" ? "Not Declared" : user?.item}
          declaration={
            user?.data?.seventy === user?.item
              ? "Win"
              : user?.data?.seventy === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.seventyjoin === "yes" ? false : true}
          choosen={user?.data?.seventy}
          submitfuncR={redseventy}
          submitfuncG={greenseventy}
          submitfuncY={yellowseventy}
          submitfuncP={pinkseventy}
          submitfuncB={blueseventy}
          appearence={
            user?.data?.seventyjoin === "yes" || user?.data?.seventy !== "0"
              ? true
              : false
          }
        />
        <FrontandBack
          price={100}
          joined={user?.data?.hundredjoin}
          join={joinehundred}
          btn={user?.data?.hundredjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.hundredJoined}
          seeResults={result}
          classes="hundredCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnhundred}
          flipnumber={"hundredflip"}
          item={user?.data?.hundred === "0" ? "Not Declared" : user?.item}
          declaration={
            user?.data?.hundred === user?.item
              ? "Win"
              : user?.data?.hundred === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.hundredjoin === "yes" ? false : true}
          choosen={user?.data?.hundred}
          submitfuncR={redhundred}
          submitfuncG={greenhundred}
          submitfuncY={yellowhundred}
          submitfuncP={pinkhundred}
          submitfuncB={bluehundred}
          appearence={
            user?.data?.hundredjoin === "yes" || user?.data?.hundred !== "0"
              ? true
              : false
          }
        />
        <FrontandBack
          price={150}
          joined={user?.data?.oneFiftyjoin}
          join={joineoneFifty}
          btn={user?.data?.oneFiftyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.oneFiftyJoined}
          seeResults={result}
          classes="oneFiftyCard"
          getjoinedpeople={getjoinedpeoples}
          flipbtns={flipbtnoneFifty}
          flipnumber={"oneFiftyflip"}
          item={user?.data?.oneFifty === "0" ? "Not Declared" : user?.item}
          declaration={
            user?.data?.oneFifty === user?.item
              ? "Win"
              : user?.data?.oneFifty === "0" || user?.item === "Not Declared"
              ? "Not Declared"
              : "Loose"
          }
          Colorbtn={user?.data?.oneFiftyjoin === "yes" ? false : true}
          choosen={user?.data?.oneFifty}
          submitfuncR={redoneFifty}
          submitfuncG={greenoneFifty}
          submitfuncY={yellowoneFifty}
          submitfuncP={pinkoneFifty}
          submitfuncB={blueoneFifty}
          appearence={
            user?.data?.oneFiftyjoin === "yes" || user?.data?.oneFifty !== "0"
              ? true
              : false
          }
        />
      </div>
    </section>
  );
};

export default RotatingCard;
