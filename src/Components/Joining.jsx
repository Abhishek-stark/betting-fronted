import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import {
  reset,
  tenjoin,
  hundredjoin,
  tweentyjoin,
  fourtyjoin,
  sixtyjoin,
  seventyjoin,
  onefiftyjoin,
  getJoinedUsers,
} from "../Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Test from "./Test";
import BackCard from "./BackCard";

const Joining = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message, joinedUsers } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (isError) console.log(message);

    if (!user) navigate("/");
    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, navigate, message, dispatch]);

  // useEffect(() => {
  //   if (user) dispatch(getJoinedUsers());
  // }, [user, dispatch]);

  if (isLoading) <Loading />;

  const joinetenth = () => {
    dispatch(tenjoin());
    navigate("/results");
  };

  const joinetweenty = (e) => {
    dispatch(tweentyjoin());
    navigate("/results");
  };
  const joinefourty = (e) => {
    dispatch(fourtyjoin());
  };

  const joinesixty = (e) => {
    dispatch(sixtyjoin());
  };
  const joineseventy = () => {
    dispatch(seventyjoin());
  };

  const joineoneFifty = (e) => {
    dispatch(onefiftyjoin());
  };
  const joinehundred = (e) => {
    dispatch(hundredjoin());
  };

  const getjoinedpeoples = () => {
    dispatch(getJoinedUsers());
  };

  const result = () => {
    navigate("/results");
  };

  return (
    <div className="joinedModel ">
      <div className="Card" id="cardsContainer">
        <Test
          price={10}
          joined={user?.data?.tenthjoin}
          join={joinetenth}
          btn={user?.data?.tenthjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.tenthJoined}
          seeResults={result}
          classes="tentCard"
          getjoinedpeople={getjoinedpeoples}
        />
        <Test
          price={20}
          joined={user?.data?.tweentyjoin}
          join={joinetweenty}
          btn={user?.data?.tweentyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.tweentyJoined}
          seeResults={result}
          classes="tweentyCard"
          getjoinedpeople={getjoinedpeoples}
        />
        <Test
          price={40}
          joined={user?.data?.fourtyjoin}
          join={joinefourty}
          btn={user?.data?.fourtyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.fourtyJoined}
          seeResults={result}
          classes="fourtyCard"
          getjoinedpeople={getjoinedpeoples}
        />
        <Test
          price={60}
          joined={user?.data?.sixtyjoin}
          join={joinesixty}
          btn={user?.data?.sixtyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.sixtyJoined}
          seeResults={result}
          classes="sixtyCard"
          getjoinedpeople={getjoinedpeoples}
        />

        <Test
          price={150}
          joined={user?.data?.oneFiftyjoin}
          join={joineoneFifty}
          btn={user?.data?.oneFiftyjoin === "yes" ? true : false}
          totaljoin={joinedUsers?.oneFiftyJoined}
          seeResults={result}
          classes="oneFiftyCard"
          getjoinedpeople={getjoinedpeoples}
        />
      </div>
    </div>
  );
};

export default Joining;
