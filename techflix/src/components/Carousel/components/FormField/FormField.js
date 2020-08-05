import React from "react";
import PropTypes from "prop-types";

import styled, { css } from "styled-components";

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 156px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #535850;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 1rem;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #535850;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(0.8) translateY(-12px);
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      &::not([type="color"]) + span {
        transform: scale(0.8) translateY(-12px);
      }
    `}
`;

const FormField = ({ label, type, name, value, onChange }) => {
  const as = type === "textarea" ? "textarea" : "input";
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={name}>
        <Input
          as={as}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={(e) => onChange(e)}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: "text",
  value: "",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
