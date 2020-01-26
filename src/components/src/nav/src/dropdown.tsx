import * as React from "react";
import {
  ProjectDiv,
  A,
  IconImg,
  DropLi,
  DropUl,
  DropDiv
} from "../../../../styled-tags";

const makeDropdown = ({ Arrows, Transition }: any) => {
  return () => {
    let [drop, setDrop] = React.useState(false);
    const projects: any[] = [];
    return (
      <div>
        <DropUl>
          <DropLi onMouseOver={() => setDrop(true)}>
            {/* Recent Projects <Arrows /> */}
          </DropLi>
        </DropUl>
        <Transition
          items={drop}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(drop: any) =>
            drop &&
            ((props: any) => (
              <DropDiv style={props} onMouseLeave={() => setDrop(false)}>
                {projects.map((project: any) =>
                  project.recently ? (
                    <ProjectDiv>
                      <A href={project.url}>
                        <IconImg src={project.img} alt="icon" />
                        <h3>{project.title}</h3>
                      </A>
                    </ProjectDiv>
                  ) : null
                )}
              </DropDiv>
            ))
          }
        </Transition>
      </div>
    );
  };
};

export default makeDropdown;
