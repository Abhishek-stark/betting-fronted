import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Loading from "./Components/Loading";
import Login from "./Components/Login";
import Test from "./Components/Test";
import Navbar from "./Components/Navbar";
import ProtectedPage from "./Components/ProtectedPage";
import "../src/Styles/Style.scss";
import Form from "./Components/Form";
import FgtPwd from "./Components/FgtPwd";
import Dashsetting from "./Components/Dashsetting";

const MainPage = React.lazy(() => import("./Components/MainPage"));

const Registerpage = React.lazy(() => import("./Components/Register"));

const Dashboard = React.lazy(() => import("./Components/Dashboard"));

const Joining = React.lazy(() => import("./Components/Joining"));

const MainCard = React.lazy(() => import("./Components/MainCard"));
const BackCard = React.lazy(() => import("./Components/BackCard"));
const RotatingCard = React.lazy(() => import("./Components/RotatingCard"));

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<ProtectedPage Component={Login} />} />
        <Route
          path="/dashboard"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ProtectedPage Component={RotatingCard} />
            </Suspense>
          }
        />{" "}
        <Route
          path="/dash"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <Dashboard />{" "}
            </Suspense>
          }
        />{" "}
        <Route
          path="/signup"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <Form />{" "}
            </Suspense>
          }
        />{" "}
        <Route path="/loading" exact element={<Loading />} />{" "}
        <Route
          path="/timer"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <MainPage />
            </Suspense>
          }
        />{" "}
        <Route
          path="/test"
          exact
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <BackCard />{" "}
            </Suspense>
          }
        />{" "}
        <Route
          path="/results"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <MainCard />
            </Suspense>
          }
        />{" "}
        <Route
          path="/setting"
          element={
            <Suspense fallback={<Loading />}>
              <Dashsetting />
            </Suspense>
          }
        />
      </Routes>{" "}
    </Router>
  );
}

export default App;
