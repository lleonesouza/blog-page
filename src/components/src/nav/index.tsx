import * as React from "react";
import { NavDiv } from "../../../styled-tags";

const makeNav = ({ Dropdown, Bio, Menu, Transition }: any) => {
  return () => {
    let [show, setMove] = React.useState(true);
    return (
      <div>
        <button onClick={() => setMove(!show)}> Show/Hide </button>
        <Transition
          items={show}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(show:any) =>
            show &&
            ((props:any) => (
              <NavDiv style={props}>
                <Dropdown />
                <Bio />
                <Menu />
              </NavDiv>
            ))
          }
        </Transition>
      </div>
    );
  };
};

export default makeNav;