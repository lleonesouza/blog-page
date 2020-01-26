import * as React from "react";
import { NavLink } from "react-router-dom";
import { FieldLi, FieldUl } from "../../../../styled-tags";

const makeMenu = ({ routes }: any) => {
  return () => {
    return (
      <FieldUl>
        {routes.map((route: any) => (
          <NavLink style={{ textDecoration: "none" }} to={route.url}>
            <FieldLi> {route.title} </FieldLi>
          </NavLink>
        ))}
      </FieldUl>
    );
  };
};

export default makeMenu;
