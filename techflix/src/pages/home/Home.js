import React from "react";
import Menu from "../../components/Menu/Menu";

import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import BannerMain from "../../components/BannerMain/VideoIframeResponsive";

import dadosIniciais from "../../data/dados_iniciais.json";

import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].videoTitle}
        url={dadosIniciais.categorias[0].videos[0].url}
        uvideoDescriptionrl={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />

      <Footer />
    </HomeContainer>
  );
};

export default Home;
