import React from "react";
import Header from "components/Header";
import * as S from "./styles";

function Container({ children }) {
  return (
    <S.Wrapper>
      <Header />
      <section className="page-container">{children}</section>
    </S.Wrapper>
  );
}

export default Container;
