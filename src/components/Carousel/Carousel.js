import React from "react";
import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import VideoCard from "./components/VideoCard/VideoCard";
import Slider, { SliderItem } from "./components/Slider/Slider";

const Carousel = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.name}>
              <VideoCard
                videoTitle={video.name}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
