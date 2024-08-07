import { Container, LinksContainer } from "./styles";
import FacebookLogo from "../../assets/facebook-logo.svg";
import InstagramLogo from "../../assets/instagram-logo.svg";
import TiktokLogo from "../../assets/tiktok-logo.svg";
import TwitterLogo from "../../assets/twitter-logo.svg";
import LikedinLogo from "../../assets/linkedin-logo.svg";

export const Footer = () => {
  return (
    <Container>
      <p>Siga-nos nas redes sociais!</p>
      <LinksContainer>
        <FacebookLogo></FacebookLogo>
        <InstagramLogo></InstagramLogo>
        <TiktokLogo></TiktokLogo>
        <TwitterLogo></TwitterLogo>
        <LikedinLogo></LikedinLogo>
      </LinksContainer>
    </Container>
  );
};
