import React from "react";

import * as S from "./styles";

function Button({ text = "", onClick = () => {}, disabled = false, ...rest }) {
  return (
    <S.Button disabled={disabled} onClick={onClick} {...rest}>
      {text}
    </S.Button>
  );
}

export default Button;
