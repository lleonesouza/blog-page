import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { FirstDiv } from "../../styled-tags";

const makeSwitcher = ({ routes }: any) => {
  return () => {
    return (
      <Switch>
        <FirstDiv>
          {routes.map((route: any) => (
            <Route path={route.url} exact component={route.component} />
          ))}
        </FirstDiv>
      </Switch>
    );
  };
};

export default makeSwitcher;
