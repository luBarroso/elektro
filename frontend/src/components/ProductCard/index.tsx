import {
  ImageContainer,
  ProductInfo,
  ProductItem,
  ProductPrice,
  ProductTitle,
} from "./styles";
import HeartIcon from "../../assets/heart-icon.svg";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  id: number;
  img: string;
  title: string;
  price: string;
}

export const ProductCard = ({ id, img, title, price }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <ProductItem
      onClick={() => {
        navigate("/produto/" + id);
      }}
    >
      <ImageContainer>
        <img src={img} />
      </ImageContainer>
      <ProductInfo>
        <div>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
        </div>
        <HeartIcon />
      </ProductInfo>
    </ProductItem>
  );
};
