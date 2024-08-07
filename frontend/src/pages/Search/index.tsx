import { useNavigate, useParams } from "react-router-dom";
import { HeaderWhite } from "../../components/HeaderWhite";
import { ProductCard } from "../../components/ProductCard";
import Products from "../../products.json";
import {
  Container,
  FilterContainer,
  ProductGrid,
  SearchContainer,
  SearchText,
} from "./styles";
import { Footer } from "../../components/Footer";
import { BottomMenu } from "../../components/BottomMenu";
import SearchIcon from "../../assets/search-icon2.svg";
import FilterIcon from "../../assets/filter-icon.svg";
import { useEffect, useState } from "react";

export const Search = () => {
  const { search } = useParams();
  const formattedContent = search?.replace(/-/g, " ").toLowerCase();
  const navigate = useNavigate();

  const [text, setText] = useState(formattedContent);
  const [filteredProducts, setFilteredProducts] = useState(Products);

  useEffect(() => {
    if (text) {
      setFilteredProducts(
        Products.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(Products);
    }
  }, [text]);

  return (
    <>
      <HeaderWhite title="Pesquisa" />
      <Container>
        <SearchContainer>
          <SearchIcon />
          <input
            type="text"
            placeholder="Encontar na Elektro"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = e.target as HTMLInputElement;
                const formattedValue = target.value.replace(/\s+/g, "-");
                setText(formattedValue);
                navigate("/pesquisa/" + formattedValue);
              }
            }}
          />
        </SearchContainer>
        <FilterContainer>
          <FilterIcon />
          <p>Filtro</p>
        </FilterContainer>
      </Container>
      <SearchText>Resultado da pesquisa: {text}</SearchText>
      <ProductGrid>
        {filteredProducts.map((data) => {
          return (
            <ProductCard
              id={data.id}
              img={data.src}
              title={data.title}
              price={data.price}
            />
          );
        })}
      </ProductGrid>
      <Footer />
      <BottomMenu />
    </>
  );
};
