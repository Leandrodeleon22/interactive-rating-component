import React from "react";
import Wrapper from "../assets/Wrappers/ThankYou";
import ty from "../assets/images/illustration-thank-you.svg";
import { useAppContext } from "../context/appContext";

const ThankYou = () => {
  const { page } = useAppContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="ty-icon">
          <img src={ty} alt="ty icon" />
        </div>
        <div className="ratings">
          <p className="ratings-text">{`You selected ${page} out of 5`}</p>
        </div>

        <h1 className="title">Thank you!</h1>

        <p className="paragraph">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch
        </p>
      </div>
    </Wrapper>
  );
};

export default ThankYou;
