/* eslint-disable react/prop-types */
import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;

  /* padding: 18px 24px; */
  padding: 0px 0px 0px 34px;
  margin: 18px 0;

  /* color: #acacac; */
  color: ${theme.colors.greySemiDark};
  background: white;
  border-radius: ${theme.borderRadius.round};

  :nth-child(1) {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.spacing.xs};
    /* color: ${theme.colors.greySemiDark}; */
  }

  input {
    width: 100%;
    padding: 16px 24px 16px 10px;

    font-size: ${theme.fonts.size.P0};
    /* color: ${theme.colors.greyMedium}; */
    color: ${theme.colors.greySemiDark};

    border: none;
    outline: none;
    border-radius: ${theme.borderRadius.round};

    &::placeholder {
      color: ${theme.colors.greySemiDark};

      /* background-color: ${theme.colors.white}; */
    }
  }
`
