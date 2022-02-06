import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Field from "components/Forms/Field";
import Button from "components/Button";

import { validateField } from "utils";

import { Creators as UsersActions } from "store/ducks/users";

import * as S from "./styles";

function Form() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userToUpdate = useSelector((state) =>
    state?.users?.data?.find((user) => Number(user.id) === Number(id))
  );

  useEffect(() => {
    if (!!id) {
      if (!!userToUpdate) {
        setForm({
          name: userToUpdate?.name ?? "",
          email: userToUpdate?.email ?? "",
        });
        setFormValidator({
          name: { ...validateField(userToUpdate?.name, "name") },
          email: { ...validateField(userToUpdate?.email, "email") },
        });
      }
    }
  }, [id, userToUpdate]);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [formValidator, setFormValidator] = useState({
    name: { valid: false, error: "" },
    email: { valid: false, error: "" },
  });

  const isInvalidForm = Object.keys(formValidator).some(
    (key) => !formValidator[key].valid || formValidator[key].error
  );

  const onChange = ({ value, key }) => {
    setFormValidator((prev) => ({
      ...prev,
      [key]: validateField(value, key),
    }));

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onBlur = ({ value, key }) => {
    setFormValidator((prev) => ({
      ...prev,
      [key]: { ...validateField(value, key) },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = "User created successfully!";
    let body = {
      name: form?.name?.trim() ?? "",
      email: form?.email?.trim() ?? "",
    };

    if (id) {
      message = "User updated successfully!";
      body.id = Number(id);

      dispatch(UsersActions.update(body));
    } else {
      dispatch(UsersActions.create(body));
    }

    setTimeout(() => {
      alert(message);
    }, 500);

    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <h4>
        {!!id && !userToUpdate ? "User not found" : "Add new user"}
        <span>
          {!!id && !userToUpdate
            ? "The user you tried to access does not exist or may have already been removed."
            : "To create a new user, please fill in the fields below."}
        </span>
      </h4>
      {!!id && !userToUpdate ? (
        <S.Submit flex justify="center">
          <Button
            secondary
            onClick={handleGoBack}
            text="Go back"
            type="button"
          />
        </S.Submit>
      ) : (
        <S.Form onSubmit={handleSubmit}>
          <Field
            value={form.name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Enter the name"
            required
            name="name"
            label="Name"
            valid={formValidator.name.valid}
            error={formValidator.name.error}
          />
          <Field
            value={form.email}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Enter the email"
            required
            name="email"
            label="Email"
            valid={formValidator.email.valid}
            error={formValidator.email.error}
          />
          <S.Submit>
            <Button
              disabled={isInvalidForm}
              text={!!id && !!userToUpdate ? "Update" : "Register"}
              type="submit"
            />
            <Button
              secondary
              onClick={handleGoBack}
              text="Go back"
              type="button"
            />
          </S.Submit>
        </S.Form>
      )}
    </S.Container>
  );
}

export default Form;
