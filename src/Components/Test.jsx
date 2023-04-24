import { React } from "react";
import { Button } from "@mui/material";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Test = ({
  price,
  join,
  btn,
  joined,
  totaljoin,
  seeResults,
  classes,
  getjoinedpeople,
}) => {
  return (
    <div className="price_Card" id={classes}>
      <p className="joinedPeople">
        <button onClick={getjoinedpeople}>JoinedUser</button>
        <span className="joinedPeopleimage">: {totaljoin}</span>
        <span>
          <Person2SharpIcon fontSize="small" color="error" />
        </span>
      </p>
      <h2 className="price_Card--h2">
        <CurrencyRupeeIcon fontSize="large" color="info" />
        <br />

        {price}
      </h2>

      {joined === "yes" ? (
        <button className="price_Card--btn" onClick={seeResults}>
          Wait
        </button>
      ) : (
        <button className="price_Card--btn" onClick={join} disabled={btn}>
          Join
        </button>
      )}
    </div>
  );
};
export default Test;
