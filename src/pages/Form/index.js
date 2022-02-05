import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Creators as ModalActions } from "store/ducks/modal";

import * as S from "./styles";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () =>
    dispatch(
      ModalActions.open(
        "Um título do modal",
        <div>Um conteúdo do modal</div>,
        "md"
      )
    );

  return (
    <S.Container>
      <h4>
        Add new user
        <span>To create a new user, please fill in the fields below.</span>
      </h4>
      <button onClick={openModal}>add</button>
    </S.Container>
  );
}

export default Form;
