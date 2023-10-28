/* eslint-disable react/prop-types */
import styled from "styled-components"
import { theme } from "../../../theme"

export default function Input({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
  }

  &::placeholder {
    background-color: white;
    color: lightgrey;
  }
`
