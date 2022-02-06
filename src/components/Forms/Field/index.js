import React from "react";
import * as S from "./styles";

function Field({
  value = "",
  onChange = () => {},
  onBlur = () => {},
  type = "text",
  error = "",
  valid = true,
  label = "",
  name = "",
  placeholder = "",
  required = false,
  ...rest
}) {
  return (
    <S.Field>
      <label>
        {label}
        <input
          value={value}
          onChange={(e) => onChange({ value: e.target.value, key: name })}
          onBlur={(e) => onBlur({ value: e.target.value, key: name })}
          type={type}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </label>
      {!valid && !!error && <span>{error}</span>}
    </S.Field>
  );
}

export default Field;
