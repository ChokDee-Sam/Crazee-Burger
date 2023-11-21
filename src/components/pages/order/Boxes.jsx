import PrimaryButton from "../../reusableUi/PrimaryButton.jsx"

export default function Boxes() {
  return (
    <BoxesStyled>
      <div className="card">
        <img src="/images/burger1.png" alt="burger1" />
        <div className="title">Burger Smoke BBQ</div>

        <div className="CTA">
          <div className="price">5,60 €</div>
          <PrimaryButton label={"Ajouter"} />
        </div>
      </div>
    </BoxesStyled>
  )
}

import styled from "styled-components"
const BoxesStyled = styled.div`
  display: grid;

  /* grid-template-columns: repeat(auto-fit, minmax(140px, 20%)); */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-rows: auto; */
  width: 100%;
  row-gap: 60px;
  column-gap: 90px;
  place-items: center;

  /* padding: 50px 90px; */
  .card {
    display: flex;
    flex-direction: column;
    background-color: #0004ff;
    width: 240px;
    height: 330px;
    padding: 50px 20px;

    img {
      width: 200px;
      height: 145px;
      margin: 0 auto;
    }

    .CTA {
      display: flex;
      align-items: center;
      justify-content: space-around;

      :first-child {
        width: 50%;
      }
      :last-child {
        width: 50%;
      }
    }
  }
`
