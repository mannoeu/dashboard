import React from "react";
import { useDispatch } from "react-redux";

import { Creators as ModalActions } from "store/ducks/modal";

import * as S from "./styles";

function RemoveUser({ name = "Fulano", onConfirm = () => {} }) {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <p>
        Are you sure you want to remove <strong>{name}</strong> from your
        database? This action cannot be undone.
      </p>
      <S.ActionsContainer>
        <S.Button onClick={() => dispatch(ModalActions.close())}>No</S.Button>
        <S.Button danger onClick={onConfirm}>
          Yes
        </S.Button>
      </S.ActionsContainer>
    </S.Container>
  );
}

export default RemoveUser;
