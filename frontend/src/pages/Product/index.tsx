import { useParams } from "react-router-dom";
import Products from "../../products.json";
import { HeaderWhite } from "../../components/HeaderWhite";
import {
  BuyButton,
  Container,
  InfoContainer,
  ProductStatusContainer,
  ProductContainer,
  ProductImage,
  ProfilePic,
  TitlePriceContainer,
  UserContainer,
  ImageContainer,
} from "./styles";
import { Footer } from "../../components/Footer";
import { BottomMenu } from "../../components/BottomMenu";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import HeartIcon from "../../assets/heart-icon2.svg";
import CartIcon from "../../assets/cart-icon.svg";

export const Product = () => {
  const { id } = useParams();
  const prod = Products.find((product) => product.id == Number(id));

  return (
    <>
      <HeaderWhite title="Produto" />
      <Container>
        <ProductContainer>
          <ImageContainer>
            <ProductImage src={prod?.src} />
            <HeartIcon />
            <CartIcon />
          </ImageContainer>
          <ProductStatusContainer>
            <TitlePriceContainer>
              <h3>{prod?.title}</h3>
              <p>{prod?.price}</p>
            </TitlePriceContainer>
            <UserContainer>
              <ProfilePic src={prod?.profilePic} alt="profile-pic" />
              <p>{prod?.profileName}</p>
              <Rating
                name="read-only"
                icon={
                  <StarIcon style={{ stroke: "#FFAE50", strokeWidth: 2 }} />
                }
                emptyIcon={
                  <StarIcon style={{ stroke: "#FFAE50", strokeWidth: 2 }} />
                }
                value={prod?.rating}
                precision={0.1}
                style={{ display: "flex", gap: "5px" }}
                readOnly
              />
            </UserContainer>
          </ProductStatusContainer>
        </ProductContainer>
        <InfoContainer>
          <h4>Características do produto</h4>
          <p>
            {prod?.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequuntur neque voluptatibus odit tempora culpa veniam quasi, perspiciatis numquam eligendi autem ducimus eius repudiandae! Adipisci minima exercitationem magni animi est!"}
          </p>
        </InfoContainer>
        <BuyButton>Comprar</BuyButton>
      </Container>
      <Footer />
      <BottomMenu />
    </>
  );
};
