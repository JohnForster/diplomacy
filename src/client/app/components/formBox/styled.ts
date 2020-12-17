import styled from "styled-components";
import Colours from "../../variables/colors";

export const FormBox = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Notable|Arvo&display=swap");

  font-family: "Notable", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  text-align: center;
  font-size: 16px;
  border-radius: 20px;
  padding: 24px;
  background-color: ${Colours.highlight};
  color: ${Colours.offwhite};
  letter-spacing: 2px;
  box-shadow: 5px 5px 0px ${Colours.shadow};
  margin: auto;

  input[type="submit"] {
    width: 50%;
    font-size: 12px;
    font-family: "Notable", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    letter-spacing: 1px;
  }

  a {
    color: ${Colours.offwhite};
  }
`;
