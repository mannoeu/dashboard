import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiRefreshCcw, FiUserPlus } from "react-icons/fi";

import Table from "components/TableUsers";

import { Creators as UsersActions } from "store/ducks/users";

import * as S from "./styles";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sort_by_username, data, loading } = useSelector(
    (state) => state?.users
  );

  const onChangeOrder = () => {
    if (!loading && !data?.length) {
      return;
    }

    dispatch(UsersActions.sort("username"));
  };

  return (
    <S.Container>
      <h4>
        Manage your system users
        <span>
          View user information, add new users and remove old users. You can
          also sort the results by clicking on the "username" column.
        </span>
      </h4>
      <S.ButtonAction onClick={() => navigate("/new")}>
        <span>
          <FiUserPlus size="1rem" />
        </span>
        <b>Add new user</b>
      </S.ButtonAction>
      <div className="order-mobile">
        <p>
          Sorted by last name
          <i>
            {sort_by_username === "asc"
              ? "Alphabetical order"
              : "Reverse alphabetical order"}
          </i>
        </p>

        <button className={sort_by_username} onClick={onChangeOrder}>
          <FiRefreshCcw size="0.8rem" />
        </button>
      </div>
      <Table />
    </S.Container>
  );
}

export default Home;
