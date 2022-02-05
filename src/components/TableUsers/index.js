import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  { name: "Edit" },
  { name: "Remove" },
];

function TableUsers() {
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

  return (
    <S.TableContainer>
      <S.Headings>
        {React.Children.toArray(
          HEADINGS.map((heading) => (
            <S.Heading
              canSort={heading?.canSort}
              onClick={() => dispatch(UsersActions.sort("username"))}
            >
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
          [1, 2, 3, 4, 5, 6, 7].map((_row) => (
            <S.Row loading>
              {React.Children.toArray(
                [1, 2, 3, 4, 5, 6, 7].map((_info) => <li></li>)
              )}
            </S.Row>
          ))
        )}
      {!loading &&
        React.Children.toArray(
          data?.map((row) => (
            <S.Row>
              <li>{row?.id}</li>
              <li>{row?.name}</li>
              <li>{row?.username ?? "-"}</li>
              <li>{row?.email ?? "-"}</li>
              <li>{row?.address?.city ?? "-"}</li>
              <li>
                <S.IconButton tooltip="Edit record">
                  <FiEdit2 size="0.875rem" />
                </S.IconButton>
              </li>
              <li>
                <S.IconButton
                  danger
                  tooltip="Remove from database"
                  onClick={() => handleRemove(row?.id, row?.name)}
                >
                  <FiTrash2 size="0.875rem" />
                </S.IconButton>
              </li>
            </S.Row>
          ))
        )}
    </S.TableContainer>
  );
}

export default TableUsers;
