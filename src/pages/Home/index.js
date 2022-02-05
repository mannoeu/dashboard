import React from "react";
import { useNavigate } from "react-router-dom";

import Table from "components/TableUsers";

import { FiUserPlus } from "react-icons/fi";

import * as S from "./styles";

function Home() {
  const navigate = useNavigate();

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
      <Table />
    </S.Container>
  );
}

export default Home;
