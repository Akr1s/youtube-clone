import React from "react";
import pseudoTabs from "../../../data/pseudoTabs";
import ShowMore from "../ShowMore";
import { StyledNavLink, Tabs, TabsLi } from "./Styles";

function PseudoTabs() {
  return (
    <Tabs>
      {pseudoTabs.map(({ to, exact, text, icon }) => (
        <TabsLi key={text}>
          <StyledNavLink to={to} exact={exact} activeClassName="activeLink">
            {" "}
            {icon} {text}
          </StyledNavLink>
        </TabsLi>
      ))}
      <ShowMore />
    </Tabs>
  );
}

export default PseudoTabs;
