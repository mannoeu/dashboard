import React from "react";
import { useDispatch } from "react-redux";

import Button from "components/Button";

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
        <Button onClick={() => dispatch(ModalActions.close())} text="No" />
        <Button danger onClick={onConfirm} text="Yes" />
      </S.ActionsContainer>
    </S.Container>
  );
}

export default RemoveUser;
