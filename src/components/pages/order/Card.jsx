import PrimaryButton from "../../reusableUi/PrimaryButton.jsx"
import { fakeMenu1 } from "../../../fakeData/fakeMenu.js"
import styled from "styled-components"

export default function Card() {
  return fakeMenu1.map((el, index) => (
    <CardStyled key={index}>
      <div className="card-image">
        <img src={el.imageSource} alt={el.title} />
      </div>

      <div className="card-infos">
        <div className="title">{el.title}</div>
        <div className="CTA">
          <div className="price">{Math.round(el.price)} €</div>
          <PrimaryButton label={"Ajouter"} className={"size"} />
        </div>
      </div>
    </CardStyled>
  ))

  // <CardStyled>
  //   <img src="/images/burger1.png" alt="burger1" />
  //   <div className="card-infos">
  //     <div className="title">Burger Smoke BBQ</div>
  //     <div className="CTA">
  //       <div className="price">5,60 €</div>
  //       <PrimaryButton label={"Ajouter"} className={"size"} />
  //     </div>
  //   </div>
  // </CardStyled>
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */

  background-color: #0004ff;
  border-radius: 15px;
  background: #fff;
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  width: 240px;
  height: 330px;
  padding: 50px 20px 30px 20px;
  /* gap: 35px; */

  .card-image {
    /* width: 100%; */
    /* height: 145px; */
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 145px;
      /* max-width: 200px;
      max-height: 145px; */
      margin: 0 auto;

      /* margin: 0 auto; */
    }
  }

  .card-infos {
    width: 100%;

    .title {
      color: #17161a;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;

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
`
