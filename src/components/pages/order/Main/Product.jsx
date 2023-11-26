import PrimaryButton from "../../../reusableUi/PrimaryButton.jsx"
import styled from "styled-components"
import { formatPrice } from "../../../../utils/maths"

export default function Product({
  imageSource,
  title,
  price,
  isAvailable,
  discount,
  discountPercent,
}) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
        {discount && (
          <div className="rond">
            <h3>{discountPercent}%</h3>
          </div>
        )}
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
  background-color: #2e2e2e;
  /* box-shadow: -8px 8px 20px 0px rgb(255, 255, 255); */
  box-shadow: -8px 8px 20px 0px #000000;
  /* border: 3px solid white; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 330px;
  padding: 50px 20px 30px 20px;

  border-radius: 15px;
  /* box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2); */
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    /* box-shadow: 0px 0px 20px 10px #ff9f1b; */
    box-shadow: -8px 8px 20px 0px #000000;

    transition: all 0.2s ease;
    box-shadow: -6px 4px 30px 0px #000000b5;

    transform: rotate(2deg) scale(1.15);
  }
  &:hover .rond {
    background-color: #bb280b;
    transform: scale(1) translate(30%, -30%);
    transition: transform 0.3s 0.15s;
    /* transition-delay: transform 2s; */
  }

  .image {
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

  .rond {
    background-color: #ff9f1b;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    /* transform: translate(30%, -30%); */
    transform: scale(0) translate(30%, -30%);
    transition: all 0.3s;
    display: grid;
    place-items: center;
    border: 3px solid white;

    h3 {
      color: white;
      text-align: center;
      transform: translateY(-15%);
    }
  }
  .infos {
    width: 100%;

    .title {
      /* color: #17161a; */
      color: white;
      font-family: Amatic SC;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;

      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: space-between;

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
