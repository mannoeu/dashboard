import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";

import Illustration from "assets/not_found.svg";

import * as S from "./styles";

function Form() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <img src={Illustration} alt="404" />
      <section>
        <h4>
          Oops!
          <span>
            The page you tried to access does not exist or is temporarily
            inaccessible.
          </span>
        </h4>
        <Button onClick={() => navigate("/")} text="Go to home" />
      </section>
    </S.Container>
  );
}

export default Form;
