import PrimaryButton from "../../../reusableUi/PrimaryButton.jsx"
import styled from "styled-components"
import { formatPrice } from "../../../../utils/maths"

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>

      <div className="infos">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{formatPrice(price)}</div>
          <PrimaryButton label={"Ajouter"} className={"size"} />
        </div>
      </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
  /* background-color: pink; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 330px;
  padding: 50px 20px 30px 20px;

  /* background: #fff; */
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);

  .image {
    background: #fff;

    /* border: 2px solid blue; */
    height: 145px;
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      /* border: 2px dotted red; */
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .infos {
    width: 100%;
    height: calc(220px - 145px);

    /* border: 2px solid blue; */

    .title {
      /* border: 1px solid fuchsia; */

      color: #17161a;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      /* text-align: center; */
      height: 100%;

      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      border: 1px solid fuchsia;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        border: 1px solid fuchsia;

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

// <ProductStyled>
//   <img src="/images/burger1.png" alt="burger1" />
//   <div className="infos">
//     <div className="title">Burger Smoke BBQ</div>
//     <div className="description">
//       <div className="price">5,60 €</div>
//       <PrimaryButton label={"Ajouter"} className={"size"} />
//     </div>
//   </div>
// </ProductStyled>
