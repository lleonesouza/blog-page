import * as React from "react";
import { Top, Li } from "../../../styled-tags";

const makeHome = () => {
  return () => {
    return (
      <div>
        <Top>
          <Li> Welcome to overscript</Li>
          <Li> a blog write by leone souza</Li>
          <Li>just my notes and thoughts about technologies</Li>

          <div>
            Welcome Here you can navigate into my open and non open source
            projects. I'm fullstack web and cross-plataform developer Writer of
            good and creative code, specialist in javascript. If you are a
            company, check out the technology that i have been using. Use or
            like some of my projects? Make me a donation Do you want talk with
            me? go to contact
          </div>
        </Top>
      </div>
    );
  };
};

export default makeHome;
