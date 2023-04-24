import React from "react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Looks5Icon from "@mui/icons-material/Looks5";

const BackCard = ({
  item,
  choosen,
  declaration,
  submitfuncR,
  submitfuncG,
  submitfuncY,
  submitfuncP,
  submitfuncB,
  joined,
  Colorbtn,
  appearence,
  price,
}) => {
  return (
    <div className="backCard" style={{ opacity: appearence ? "1" : "0.2" }}>
      <p>
        <CurrencyRupeeIcon fontSize="large" color="success" />
        <span style={{ color: "white", fontSize: "32px" }}>{price}</span>
      </p>
      <span
        style={{
          marginLeft: "28%",
          textTransform: "Uppercase",
          color: "white",
          wordSpacing: "6px",
          letterSpacing: "2px",
        }}
      >
        Select A Number
      </span>
      <div className="backCard__selectbtn">
        <button onClick={submitfuncR} disabled={Colorbtn}>
          <LooksOneIcon
            fontSize="large"
            color={Colorbtn === false ? "info" : "disabled"}
          />
        </button>
        <button onClick={submitfuncG} disabled={Colorbtn}>
          <LooksTwoIcon
            fontSize="large"
            color={Colorbtn === false ? "info" : "disabled"}
          />
        </button>
        <button onClick={submitfuncY} disabled={Colorbtn}>
          <span>
            <Looks3Icon
              fontSize="large"
              color={Colorbtn === false ? "info" : "disabled"}
            />
          </span>
        </button>
        <button onClick={submitfuncP} disabled={Colorbtn}>
          <span>
            <Looks4Icon
              fontSize="large"
              color={Colorbtn === false ? "info" : "disabled"}
            />
          </span>
        </button>
        <button onClick={submitfuncB} disabled={Colorbtn}>
          <span>
            <Looks5Icon
              fontSize="large"
              color={Colorbtn === false ? "info" : "disabled"}
            />
          </span>
        </button>
      </div>
      <div className="backCard__userdetail">
        <div className="backCard__userdetail--left">
          <p style={{ letterSpacing: "10px" }}>
            Joined :
            {joined === "yes" ? (
              <CheckIcon fontSize="large" color="success" />
            ) : (
              <CloseIcon fontSize="large" color="error" />
            )}
          </p>

          <span>
            Selected Number :{" "}
            {choosen === "0" ? (
              <CloseIcon fontSize="large" color="error" />
            ) : choosen === "1" ? (
              <LooksOneIcon fontSize="large" color="error" />
            ) : choosen === "2" ? (
              <LooksTwoIcon fontSize="large" color="error" />
            ) : choosen === "3" ? (
              <Looks3Icon fontSize="large" color="error" />
            ) : choosen === "4" ? (
              <Looks4Icon fontSize="large" color="error" />
            ) : (
              <Looks5Icon fontSize="large" color="error" />
            )}
          </span>

          <p>Output :{item}</p>

          {declaration === "Win" ? (
            <p style={{ color: "white" }}> You Win</p>
          ) : declaration === "Loose" ? (
            <p style={{ color: "white" }}> You Loose</p>
          ) : (
            <p style={{ opacity: "0" }}>Undeclared</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackCard;
