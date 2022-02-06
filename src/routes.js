import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { Creators as UsersActions } from "store/ducks/users";

import Container from "templates/Container";
import Home from "pages/Home";
import Form from "pages/Form";
import NotFound from "pages/NotFound";

export default function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersActions.getUsersRequest());
  }, []);

  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route exact path="/new" element={<Form />} />
          <Route exact path="/update/:id" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}
