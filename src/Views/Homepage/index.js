import { useState } from "react";
import Card from "../../Components/Card/card";
import Carousel, { CarouselItem } from "../../Components/Carousel/carousel";

import { carouselImageData } from "../../Assets/data/data";
import { ReactComponent as ArrowIcon } from "../../Assets/icons/arrow-forward-outline.svg";
import albumArt from "../../Assets/images/artist.png";
import { artists, newsevents } from "../../Assets/data/data";

import "./homepage.scss";

const Homepage = ({ props }) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div className="Homepage">
      <section>
        <Carousel>
          {carouselImageData.map((image, index) => {
            return (
              <CarouselItem>
                <img src={image.img} />
              </CarouselItem>
            );
          })}
        </Carousel>
      </section>
      <hr />

      <section>
        <SectionHeader title={"News & Events"} />
        <div className="News-newsGrid">
          {newsevents.map((newsEvent) => (
            <Card data={newsEvent} />
          ))}
        </div>
      </section>
      <hr />

      <section>
        <SectionHeader title={"Channel"} />
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/ZnuwB35GYMY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="Channel-videoDetails">
          <h4>
            <a href="">
              Anselm Kiefer in conversation with Tim Marlow in the Auditorium
            </a>
          </h4>
          <p>
            In this film Anselm Kiefer discusses his work and his exhibition
            ‘Walhalla’ at White Cube Bermondsey with Tim Marlow.
          </p>
        </div>
      </section>
      <hr />

      <section>
        <SectionHeader title={"Artists"} />
        <div className="Artists">
          <ul className="Artists-listGrid">
            {artists.map((artist) => (
              <li
                onMouseEnter={(e) => {
                  setStyle({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setStyle({ display: "none" });
                }}
              >
                <a href="">{artist}</a>
              </li>
            ))}
          </ul>
          <div className="Artists-albumArt">
            <img src={albumArt} style={style} />
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionHeader = (props) => {
  const { title } = props;
  return (
    <div className="Section-header">
      <h4>{title}</h4>
      <a href="" className="Section--goToLink">
        View all
        <ArrowIcon className="icon" />
      </a>
    </div>
  );
};

export default Homepage;
