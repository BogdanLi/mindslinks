import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

const [snowflake, greenLeaf, sun, orangeLeaf] = [
  document.createElement("img"),
  document.createElement("img"),
  document.createElement("img"),
  document.createElement("img"),
];

snowflake.src = "/flakes/snowflake.svg";
greenLeaf.src = "/flakes/greenLeaf.svg";
sun.src = "/flakes/sun.svg";
orangeLeaf.src = "/flakes/orangeLeaf.svg";

const icons = {
  winter: [snowflake, snowflake],
  spring: [greenLeaf, greenLeaf],
  summer: [sun, sun],
  fall: [orangeLeaf, orangeLeaf],
};

export default function Fall() {
  const [images, setImages] = useState<HTMLImageElement[]>(icons.winter);

  useEffect(() => {
    const dt = new Date().getUTCMonth() + 1;

    switch (dt) {
      case 1:
      case 2:
      case 12:
        setImages(icons.winter);
        break;
      case 3:
      case 4:
      case 5:
        setImages(icons.spring);
        break;
      case 6:
      case 7:
      case 8:
        setImages(icons.summer);
        break;
      case 9:
      case 10:
      case 11:
        setImages(icons.fall);
        break;
    }
  }, []);

  return (
    <Snowfall
      style={{ zIndex: 999 }}
      speed={[0.2, 0.2]}
      snowflakeCount={100}
      images={images}
      radius={[16, 16]}
    />
  );
}
