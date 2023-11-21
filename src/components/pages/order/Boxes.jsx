import PrimaryButton from "../../reusableUi/PrimaryButton.jsx"

export default function Boxes() {
  return (
    <BoxesStyled>
      <div className="card">
        <img src="/images/burger1.png" alt="burger1" />

        <div className="card-infos">
          <div className="title">Burger Smoke BBQ</div>
          <div className="CTA">
            <div className="price">5,60 €</div>
            <PrimaryButton label={"Ajouter"} className={"size"} />
          </div>
        </div>
      </div>
    </BoxesStyled>
  )
}

import styled from "styled-components"
const BoxesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(140px, 20%)); */
  /* grid-template-rows: auto; */
  width: 100%;
  row-gap: 60px;
  column-gap: 90px;
  place-items: center;
  /* padding: 50px 90px; */

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #0004ff;
    border-radius: 15px;
    background: #fff;
    box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
    /* width: 240px;
    height: 330px; */
    padding: 50px 20px 30px 20px;
    gap: 35px;

    img {
      width: 200px;
      height: 145px;
      margin: 0 auto;
    }

    .card-infos {
      .title {
        color: #17161a;
        font-family: Amatic SC;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-bottom: 10px;
      }

      .CTA {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* height: 30px; */

        .price {
          color: #ffa01b;
          font-family: Open Sans;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 137.5% */
        }
        /* :first-child {
          width: 50%;
        } */

        .size {
          width: 50%;
          height: 40px;
          font-size: 12px;
        }
      }
    }
  }
`
