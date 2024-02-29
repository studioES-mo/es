import {
  activeIcon,
  activity1,
  comic1,
  comic2,
  comic3,
  comicIcon,
  film1,
  film2,
  filmIcon,
  game1,
  gameIcon,
} from "../../public/cp2/index";
import Image from "next/image";
import TitleWithDynamicBG from "./TitleWithDynamicBG";
import { useTranslations } from "next-intl";
import GameBoy from "./GameBoy";
import Carousel from "./carousel/Carousel";
import { TSlide } from "./type";
import Link from "next/link";
import { ImageWithOverlay } from "./carousel/image-with-overlay";

type ChapterTwoItemsType = {
  activity: {
    slides: TSlide[];
  };
  film: {
    slides: TSlide[];
  };
  game: {
    slides: TSlide[];
  };
  comic: {
    slides: TSlide[];
  };
};

const ChapterTwoItems: ChapterTwoItemsType = {
  activity: {
    slides: [
      {
        imgSrc: activity1,
        alt: "activity1",
        id: crypto.randomUUID(),
        title: "activity-slide0-title",
        description: "activity-slide0-description",
      },
    ],
  },
  film: {
    slides: [
      {
        imgSrc: film1,
        alt: "film1",
        id: crypto.randomUUID(),
        title: "film-slide0-title",
        description: "film-slide0-description",
      },
      {
        imgSrc: film2,
        alt: "film2",
        id: crypto.randomUUID(),
        title: "film-slide1-title",
        description: "film-slide1-description",
      },
    ],
  },
  game: {
    slides: [
      {
        imgSrc: game1,
        alt: "game1",
        id: crypto.randomUUID(),
        title: "game-slide0-title",
        description: "game-slide0-description",
      },
    ],
  },
  comic: {
    slides: [
      {
        imgSrc: comic1,
        alt: "comic1",
        id: crypto.randomUUID(),
        title: "comic-slide0-title",
        description: "comic-slide0-description",
      },
      {
        imgSrc: comic2,
        alt: "comic2",
        id: crypto.randomUUID(),
        title: "comic-slide1-title",
        description: "comic-slide1-description",
      },
      {
        imgSrc: comic3,
        alt: "comic3",
        id: crypto.randomUUID(),
        title: "comic-slide2-title",
        description: "comic-slide2-description",
      },
    ],
  },
};

function ChapterTwo() {
  const t = useTranslations("ChapterTwo");

  return (
    <div
      id="Product"
      className="flex flex-col items-center max-w-2xl mx-auto space-y-7"
    >
      <TitleWithDynamicBG title={t("title")} subTitle={t("sub-title")} />
      {/* Activity */}
      <div className="flex w-full gap-3 px-3 md:px-0">
        <Image
          src={activeIcon}
          alt="activeIcon"
          className=""
          width={32}
          height={38}
        />
        <p className="self-end font-semibold">{t("recent-activities")}</p>
      </div>
      <div className="w-full h-full">
        <Carousel
          chapter="ChapterTwo"
          slides={ChapterTwoItems.activity.slides as TSlide[]}
          clickable={true}
        />
      </div>

      {/* Game */}
      {/* <div className="relative flex flex-col w-full space-y-5 md:pb-16"> */}
      <div className="flex w-full gap-3 px-3 md:px-0">
        <Image src={gameIcon} alt="gameIcon" width={32} height={38} />
        <p className="self-end font-semibold">{t("game-development")}</p>
      </div>
      <div className="w-full h-full">
        <Carousel
          chapter="ChapterTwo"
          slides={ChapterTwoItems.game.slides as TSlide[]}
          clickable={true}
        />
      </div>
      {/* <div className="hidden md:block absolute -top-[470px] right-3">
          <GameBoy />
        </div> */}
      {/* </div> */}

      {/* Film */}
      <div className="relative flex flex-col w-full space-y-5">
        <div className="flex w-full gap-3 px-3 md:px-0">
          <Image src={filmIcon} alt="filmIcon" width={20} height={26} />
          <p className="self-end font-semibold">{t("film-product")}</p>
        </div>
        <div className="w-full h-full pt-2">
          <Carousel
            chapter="ChapterTwo"
            slides={ChapterTwoItems.film.slides as TSlide[]}
            clickable={true}
          />
        </div>
      </div>

      {/* Comic */}
      <div className="w-full space-y-5">
        <div className="flex w-full gap-3 px-3 md:px-0">
          <Image src={comicIcon} alt="comicIcon" width={28} height={26} />
          <p className="self-end font-semibold ">{t("comic-art")}</p>
        </div>

        <ul className="relative flex flex-col h-[300px] sm:h-[600px] justify-center gap-y-3 px-3 md:px-0 transition-all duration-300">
          {ChapterTwoItems.comic.slides.map(
            ({ imgSrc, id, alt, title, description }) => {
              return (
                <li key={id} className="w-full h-full">
                  <ImageWithOverlay
                    imgSrc={imgSrc}
                    imgAlt={alt}
                    clickable={true}
                    title={t(title)}
                    description={t(description)}
                  />
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
}
export default ChapterTwo;
