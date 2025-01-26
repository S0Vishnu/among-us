// Base color textures
import baseBlack from "../assets/images/textures/base-black.png";
import baseBlue from "../assets/images/textures/base-blue.png";
import baseBrown from "../assets/images/textures/base-brown.png";
import baseCyan from "../assets/images/textures/base-cyan.png";
import baseGray from "../assets/images/textures/base-gray.png";
import baseGreen from "../assets/images/textures/base-green.png";
import baseLime from "../assets/images/textures/base-lime.png";
import baseMaroon from "../assets/images/textures/base-maroon.png";
import baseOrange from "../assets/images/textures/base-orange.png";
import basePink from "../assets/images/textures/base-pink.png";
import basePurple from "../assets/images/textures/base-purple.png";
import baseRed from "../assets/images/textures/base-red.jpeg";
import baseWhite from "../assets/images/textures/base-white.png";
import baseYellow from "../assets/images/textures/base-yellow.png";

// Backpack color textured
import backpackBlack from "../assets/images/textures/back-pack-black.png";
import backpackBlue from "../assets/images/textures/back-pack-blue.png";
import backpackBrown from "../assets/images/textures/back-pack-brown.png";
import backpackCyan from "../assets/images/textures/back-pack-cyan.png";
import backpackGray from "../assets/images/textures/back-pack-gray.png";
import backpackGreen from "../assets/images/textures/back-pack-green.png";
import backpackLime from "../assets/images/textures/back-pack-lime.png";
import backpackMaroon from "../assets/images/textures/back-pack-maroon.png";
import backpackOrange from "../assets/images/textures/back-pack-orange.png";
import backpackPink from "../assets/images/textures/back-pack-pink.png";
import backpackPurple from "../assets/images/textures/back-pack-purple.png";
import backpackRed from "../assets/images/textures/back-pack-red.jpeg";
import backpackWhite from "../assets/images/textures/back-pack-white.png";
import backpackYellow from "../assets/images/textures/back-pack-yellow.png";
import { SRGBColorSpace, TextureLoader } from "three";

interface GetColorsProps {
  index: number;
}

export function GetColors({ index }: GetColorsProps) {
  const baseColors = [
    baseBlack,
    baseBlue,
    baseBrown,
    baseCyan,
    baseGray,
    baseGreen,
    baseLime,
    baseMaroon,
    baseOrange,
    basePink,
    basePurple,
    baseRed,
    baseWhite,
    baseYellow,
  ];

  const backpackColors = [
    backpackBlack,
    backpackBlue,
    backpackBrown,
    backpackCyan,
    backpackGray,
    backpackGreen,
    backpackLime,
    backpackMaroon,
    backpackOrange,
    backpackPink,
    backpackPurple,
    backpackRed,
    backpackWhite,
    backpackYellow,
  ];

  const Colors = [
    "black",
    "blue",
    "brown",
    "cyan",
    "gray",
    "green",
    "lime",
    "maroon",
    "orange",
    "pink",
    "purple",
    "red",
    "white",
    "yellow",
  ];

  const loader = new TextureLoader();
  //base
  const baseTexture = loader.load(baseColors[index]);
  baseTexture.flipY = false;
  baseTexture.colorSpace = SRGBColorSpace;
  //backback
  const backpackTexture = loader.load(backpackColors[index]);
  backpackTexture.flipY = false;
  backpackTexture.colorSpace = SRGBColorSpace;
  // color
  const colorTexture = loader.load(Colors[index]);

  const textures = {
    baseColor: baseTexture,
    backpackColor: backpackTexture,
    colorTexture: colorTexture,
  };

  return textures;
}
