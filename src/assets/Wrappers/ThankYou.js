import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .container {
    display: grid;
    width: 40.1rem;
    height: 40.1rem;
    background-color: #202731;
    padding: 3rem;
    border-radius: 2.5rem;
    justify-items: center;
  }
  .ty-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 3rem 0;
    padding: 0;
  }
  .title {
    text-align: center;
    font-weight: 500;
    color: hsl(0, 0%, 100%);
  }
  .paragraph {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.9pt;
    line-height: 2rem;
    color: hsl(217, 12%, 63%);
    margin-top: 0;
  }
  .ratings {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(213, 19%, 18%);
    height: 3rem;
    font-size: 1.45rem;
    border-radius: 1.75rem;
    margin: 0 0 3rem 0;
  }

  .ratings-text {
    margin: 0 2rem;
    color: hsl(25, 97%, 53%);
    letter-spacing: 1pt;
  }
`;

export default Wrapper;
