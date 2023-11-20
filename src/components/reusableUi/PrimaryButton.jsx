/* eslint-disable react/prop-types */
import styled from "styled-components"
import { theme } from "../../theme"

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  padding: 18px;

  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;

  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.heavy};

  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;
  border-radius: ${theme.borderRadius.round};
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 0.3s ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :nth-child(2) {
    color: white;
    margin-left: 5px;
    transition: all 0.3s;
  }
  &:hover :nth-child(2) {
    color: #ff9f1b;
    margin-left: 15px;
    transition: all 0.3s;
  }
`
