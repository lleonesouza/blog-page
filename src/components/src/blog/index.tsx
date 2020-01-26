import * as React from "react";
import { Top, Li } from "../../../styled-tags";

const makeWorks = () => {
  return () => {
    return (
      <div>
        <Top>
          <Li> Welcome to overscript</Li>
          <Li> a blog write by leone souza</Li>
          <Li> my notes and thoughts about technologies</Li>

          <div>Articles Names</div>
        </Top>
      </div>
    );
  };
};

export default makeWorks;
