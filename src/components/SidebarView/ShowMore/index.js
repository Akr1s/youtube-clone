import React, { useState } from "react";
import {
  AiOutlineDownStyled,
  AiOutlineMehStyled,
  AiOutlineUpStyled,
  Button,
  ListItem,
} from "./Styles";

function ShowMore() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {showMore && (
        <ListItem>
          {" "}
          <AiOutlineMehStyled />
          Nothing more
        </ListItem>
      )}
      <Button onClick={() => setShowMore(!showMore)}>
        {showMore ? <AiOutlineUpStyled /> : <AiOutlineDownStyled />} Show{" "}
        {showMore ? "less" : "more"}
      </Button>
    </>
  );
}

export default ShowMore;
