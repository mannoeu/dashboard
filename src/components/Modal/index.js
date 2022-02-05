import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as ModalActions } from "store/ducks/modal";

import { FiX } from "react-icons/fi";

import * as S from "./styles";

function Modal() {
  const { show, title, content, size } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [show]);

  return (
    <S.Container size={size} show={show}>
      <S.Content show={show}>
        {title && (
          <header>
            <h4>{title}</h4>
            <button onClick={() => dispatch(ModalActions.close())}>
              <FiX />
            </button>
          </header>
        )}
        {content}
      </S.Content>
    </S.Container>
  );
}

export default Modal;
