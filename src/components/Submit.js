import React from "react";
import Wrappers from "../assets/Wrappers/Submit";
import star from "../assets/images/icon-star.svg";
import { useAppContext } from "../context/appContext";

const Submit = () => {
  const { numOfPages, page, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  return (
    <Wrappers>
      <div className="container">
        <div className="circle-icon">
          <img className="star" src={star} alt="star" />
        </div>
        <h1 className="title"> How did we do?</h1>
        <p className="paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering
        </p>
        <div className="circle-group">
          {pages.map((pageNumber) => {
            return (
              <div
                className={
                  pageNumber === page ? "circle-number active" : "circle-number"
                }
                key={pageNumber}
                onClick={() => {
                  return changePage(pageNumber);
                }}
              >
                <span>{pageNumber}</span>
              </div>
            );
          })}
          {/* <div className="circle-number active">
            <span>{}</span>
          </div> */}
        </div>
        <button className="btn-submit"> Submit</button>
      </div>
    </Wrappers>
  );
};

export default Submit;
