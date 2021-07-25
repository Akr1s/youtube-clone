import React from "react";
import { camelCase } from "../../utils";
import { BoilerplateContainer, BoilerplateText, ComponentName } from "./Styles";

function Boilerplate({ title }) {
  return (
    <BoilerplateContainer>
      <BoilerplateText>
        Component <ComponentName>{camelCase(title)}</ComponentName> will be
        added soon{" "}
      </BoilerplateText>
    </BoilerplateContainer>
  );
}

export default Boilerplate;
