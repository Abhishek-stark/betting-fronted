import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  selecttenthColor,
  selectoneFiftyColor,
  selectfourtyColor,
  selecthundredColor,
  selecttweentyColor,
  selectseventyColor,
  selectsixtyColor,
  // checkColors,
  getJoinedUsers,
} from "../Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import BackCard from "./BackCard";

const MainCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (isError) console.log(message);
    if (isSuccess) console.log("api hit successfully");
    if (!user) navigate("/");
    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, navigate, message, dispatch]);

  // useEffect(() => {
  //   dispatch(getJoinedUsers());
  // }, [user, dispatch]);

  if (isLoading) <Loading />;

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

  console.log(import.meta.env.VITE_BLUE, import.meta.env.VITE_GREEN);

  return (
    <div className="mainCardContainer">
      <BackCard
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
        joined={user?.data?.tenthjoin}
        appearence={
          user?.data?.tenthjoin === "yes" || user?.data?.tenth !== "0"
            ? true
            : false
        }
        price={10}
      />
      <BackCard
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
        joined={user?.data?.tweentyjoin}
        appearence={
          user?.data?.tweentyjoin === "yes" || user?.data?.tweenty !== "0"
            ? true
            : false
        }
        price={20}
      />
      <BackCard
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
        joined={user?.data?.fourtyjoin}
        price={40}
        appearence={
          user?.data?.fourtyjoin === "yes" || user?.data?.fourty !== "0"
            ? true
            : false
        }
      />
      <BackCard
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
        joined={user?.data?.fourtyjoin}
        appearence={
          user?.data?.sixtyjoin === "yes" || user?.data?.sixty !== "0"
            ? true
            : false
        }
        price={60}
      />
      <BackCard
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
        joined={user?.data?.seventyjoin}
        appearence={
          user?.data?.seventyjoin === "yes" || user?.data?.seventy !== "0"
            ? true
            : false
        }
        price={70}
      />
      <BackCard
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
        joined={user?.data?.hundredjoin}
        appearence={
          user?.data?.hundredjoin === "yes" || user?.data?.hundred !== "0"
            ? true
            : false
        }
        price={100}
      />
      <BackCard
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
        joined={user?.data?.oneFiftyjoin}
        appearence={
          user?.data?.oneFiftyjoin === "yes" || user?.data?.oneFifty !== "0"
            ? true
            : false
        }
        price={150}
      />
    </div>
  );
};

export default MainCard;
