import React, { useState, useEffect, Fragment } from "react";
import Menu from "../../components/Menu/Menu";

import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import BannerMain from "../../components/BannerMain/VideoIframeResponsive";

// import dadosIniciais from "../../data/dados_iniciais.json";

import categoriesRepository from "../../repositories/categories";

import { HomeContainer } from "./styles";

const Home = () => {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        // console.log(categoriesWithVideos);
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <HomeContainer>
      <Menu />

      {initialData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        initialData.map((category, index) => {
          if (index === 0) {
            return (
              <Fragment key={category.id}>
                <BannerMain
                  videoTitle={category.videos[0].name}
                  url={category.videos[0].url}
                  videoDescription={category.videos[0].description}
                />
                <Carousel ignoreFirstVideo category={category} />
              </Fragment>
            );
          }

          return <Carousel key={category.id} category={category} />;
        })
      )}

      {/* 
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].videoTitle}
        url={dadosIniciais.categorias[0].videos[0].url}
        uvideoDescriptionrl={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} /> */}

      <Footer />
    </HomeContainer>
  );
};

export default Home;
