import Image, { StaticImageData } from "next/image";
import farcry from "../../../public/Group 1.png";
import forza from "../../../public/Group 2.png";
import fifa from "../../../public/Group 3.png";
import minecraft from "../../../public/Group 4.png";

type gameProps = {
  id: number;
  src: StaticImageData;
};

const games: gameProps[] = [
  { id: 1, src: farcry },
  { id: 2, src: forza },
  { id: 3, src: fifa },
  { id: 4, src: minecraft },
];

export default function GameTopics() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 lg:gap-0">
        {games.map((props) => (
          <Image
            key={props.id}
            src={props.src}
            alt="game"
            className="w-11/12 sm:w-2/5 lg:w-1/4"
          />
        ))}
      </div>
    </div>
  );
}
