import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media only screen and (max-width: 450px) {
    padding: 2.5rem;
  }

  .container {
    width: 42rem;
    /* height: 42rem; */
    height: 42rem;
    background-color: #202731;
    padding: 3.5rem;

    border-radius: 2.5rem;
    /* margin: auto; */
    @media only screen and (max-width: 450px) {
      width: 32.5rem;
      /* height: 42rem; */
      height: 43rem;
      padding: 2.5rem;
    }
  }
  .circle-icon {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    display: flex;
    width: 5rem;
    height: 5rem;
    border-radius: 50% 50%;
    background-color: #262f38;
  }
  .star {
    margin: auto;
  }
  .circle-number {
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(217, 12%, 63%);
    width: 5rem;
    height: 5rem;
    font-size: 3rem;
    border-radius: 50% 50%;
    background-color: #262f38;
    /* margin-right: 2rem; */
    @media only screen and (max-width: 450px) {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2rem;
    }
  }

  /* .circle-number:hover {
    background-color: ${(props) =>
    props.className === "circle-number active" ? "white" : "red"};
    color: hsl(0, 0%, 100%);
  } */

  .circle-number:focus,
  .circle-number:hover {
    background-color: hsl(217, 12%, 63%);
    color: hsl(0, 0%, 100%);
  }
  .circle-number:active,
  .circle-number.active {
    background-color: hsl(25, 97%, 53%);
    color: hsl(0, 0%, 100%);
  }

  /* .circle-number:last-child {
    margin-right: 0;
  } */
  .title {
    text-align: left;
    font-weight: 700;
    color: hsl(0, 0%, 100%);
    margin: 3.5rem 0 1.75rem 0;
  }
  .paragraph {
    color: hsl(217, 12%, 63%);
    font-size: 1.5rem;
    margin: 0rem 0 0rem 0;
    height: 6.2rem;
  }
  .btn-submit {
    width: 100%;
    background-color: hsl(25, 97%, 53%);
    height: 4.5rem;
    border-radius: 2rem;
    margin: 0;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: hsl(0, 0%, 100%);
    letter-spacing: 0.25rem;
    border: none;
    cursor: pointer;
    @media (max-width: 450px) {
      height: 4rem;
    }
  }

  .btn-submit:active {
    background-color: hsl(217, 12%, 63%);
  }

  .circle-group {
    margin: 3.5rem 0 2.5rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

    @media only screen and (max-width: 450px) {
      margin: 4.5rem 0 3.5rem 0;
    }
  }
`;

export default Wrapper;
