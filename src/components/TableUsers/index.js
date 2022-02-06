import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

import { Creators as UsersActions } from "store/ducks/users";
import { Creators as ModalActions } from "store/ducks/modal";

import ModalRemoveUser from "components/Modals/RemoveUser";

import * as S from "./styles";

const HEADINGS = [
  { name: "Id" },
  { name: "Name" },
  { name: "Username", canSort: true },
  { name: "Email" },
  { name: "City" },
  { name: "Actions" },
];

function TableUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, sort_by_username } = useSelector(
    (state) => state?.users
  );

  const handleRemove = (id, name = "") => {
    dispatch(
      ModalActions.open(
        "Remove User",
        <ModalRemoveUser
          name={name}
          onConfirm={() => {
            dispatch(UsersActions.remove(id));
            dispatch(ModalActions.close());
            setTimeout(() => {
              alert("User has been removed!");
            }, 500);
          }}
        />,
        "sm"
      )
    );
  };

  const onChangeOrder = () => {
    if (!loading && !data?.length) {
      return;
    }

    dispatch(UsersActions.sort("username"));
  };

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <S.TableContainer>
      <S.Headings>
        {React.Children.toArray(
          HEADINGS.map((heading) => (
            <S.Heading canSort={heading?.canSort} onClick={onChangeOrder}>
              {heading?.name}
              {!!heading?.canSort && (
                <span>
                  {sort_by_username === "desc" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </span>
              )}
            </S.Heading>
          ))
        )}
      </S.Headings>

      {loading &&
        React.Children.toArray(
          [1, 2, 3, 4, 5, 6].map((_row) => (
            <S.Row loading>
              {React.Children.toArray(
                [1, 2, 3, 4, 5, 6].map((_info) => <li></li>)
              )}
            </S.Row>
          ))
        )}
      {!loading &&
        React.Children.toArray(
          data?.map((row) => (
            <S.Row>
              <li>
                <b>{HEADINGS[0].name}:</b>
                {row?.id}
              </li>
              <li>
                <b>{HEADINGS[1].name}:</b>
                {row?.name}
              </li>
              <li>
                <b>{HEADINGS[2].name}:</b>
                {row?.username ?? "-"}
              </li>
              <li>
                <b>{HEADINGS[3].name}:</b>
                {row?.email ?? "-"}
              </li>
              <li>
                <b>{HEADINGS[4].name}:</b>
                {row?.address?.city ?? "-"}
              </li>
              <li>
                <S.ButtonsContainer>
                  <S.IconButton
                    tooltip="Edit"
                    onClick={() => handleEdit(row?.id)}
                  >
                    <FiEdit2 size="0.875rem" />
                  </S.IconButton>
                  <S.IconButton
                    danger
                    tooltip="Remove"
                    onClick={() => handleRemove(row?.id, row?.name)}
                  >
                    <FiTrash2 size="0.875rem" />
                  </S.IconButton>
                </S.ButtonsContainer>
              </li>
            </S.Row>
          ))
        )}

      {!loading && !data?.length && (
        <S.Empty>
          <p>No results to show</p>
        </S.Empty>
      )}
    </S.TableContainer>
  );
}

export default TableUsers;
