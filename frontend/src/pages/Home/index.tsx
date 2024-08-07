import {
  Container,
  PageTitle,
  TitleContainer,
  ContentContainer,
  ContentTitle,
  CategoryGrid,
  CategoryItem,
  CategoryImage,
  ProductGrid,
  Divider,
} from "./styles";
import { BottomMenu } from "../../components/BottomMenu";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import ElektroLogo from "../../assets/elektro-logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./swipper.css";

//tudo abaixo seria substituído pela busca no banco! --
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";

import Category1 from "../../assets/category1.png";
import Category2 from "../../assets/category2.png";
import Category3 from "../../assets/category3.png";
import Category4 from "../../assets/category4.png";
import Category5 from "../../assets/category5.png";
import Category6 from "../../assets/category6.png";
import Category7 from "../../assets/category7.png";
import Category8 from "../../assets/category8.png";

import Products from "../../products.json";
// --

export const Home = () => {
  let categoryList = [
    {
      link: "./",
      image: Category1,
      text: "Celulares",
    },
    {
      link: "./",
      image: Category2,
      text: "Notebooks",
    },
    {
      link: "./",
      image: Category3,
      text: "Tablets",
    },
    {
      link: "./",
      image: Category4,
      text: "Periféricos",
    },
    {
      link: "./",
      image: Category5,
      text: "TVs",
    },
    {
      link: "./",
      image: Category6,
      text: "Acessórios",
    },
    {
      link: "./",
      image: Category7,
      text: "PCs",
    },
    {
      link: "./",
      image: Category8,
      text: "Smatwatches",
    },
  ];

  const redirect =
    (/*event: React.MouseEvent<HTMLDivElement, MouseEvent>*/) => {
      console.log("teste");
    };

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <ElektroLogo></ElektroLogo>
          <PageTitle>Bem-vindo à Elektro!</PageTitle>
        </TitleContainer>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={Banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner3} alt="" />
          </SwiperSlide>
        </Swiper>
        <ContentContainer>
          <Divider />
          <ContentTitle>Categorias Elektro</ContentTitle>
          <CategoryGrid>
            {categoryList.map((data) => {
              return (
                <CategoryItem onClick={redirect}>
                  <CategoryImage src={data.image} />
                  <p>{data.text}</p>
                </CategoryItem>
              );
            })}
          </CategoryGrid>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>Para Você</ContentTitle>
          <Divider />
          <ProductGrid>
            <ProductCard
              id={Products[0].id}
              img={Products[0].src}
              title={Products[0].title}
              price={Products[0].price}
            />
            <ProductCard
              id={Products[1].id}
              img={Products[1].src}
              title={Products[1].title}
              price={Products[1].price}
            />
          </ProductGrid>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>Produtos em destaque</ContentTitle>
          <Divider />
          <ProductGrid>
            <ProductCard
              id={Products[2].id}
              img={Products[2].src}
              title={Products[2].title}
              price={Products[2].price}
            />
            <ProductCard
              id={Products[3].id}
              img={Products[3].src}
              title={Products[3].title}
              price={Products[3].price}
            />
          </ProductGrid>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>Mais Vendidos</ContentTitle>
          <Divider />
          <ProductGrid>
            <ProductCard
              id={Products[4].id}
              img={Products[4].src}
              title={Products[4].title}
              price={Products[4].price}
            />
            <ProductCard
              id={Products[5].id}
              img={Products[5].src}
              title={Products[5].title}
              price={Products[5].price}
            />
          </ProductGrid>
        </ContentContainer>
      </Container>
      <Footer></Footer>
      <BottomMenu></BottomMenu>
    </>
  );
};
