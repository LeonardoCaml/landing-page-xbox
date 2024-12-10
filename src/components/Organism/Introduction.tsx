import Image from "next/image";
import { Container } from "@mui/material";
import xbox from "../../../public/xbox.png";
import contoleXbox from "../../../public/controle-xbox.png";

export default function Introduction() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 lg:gap-10 mt-40 sm:mt-20">
        <h1 className="text-5xl lg:text-7xl z-10 font-semibold">
          Xbox series X
        </h1>
        <div className="w-96 h-96 rounded-full blur-[200px] bg-green absolute mt-10  opacity-20 z-0" />
        <p className="uppercase text-base lg:text-2xl text-green font-semibold z-10">
          pedido antecipado
        </p>
        <Image
          src={xbox}
          alt="xbox"
          className="w-full sm:w-3/4 mt-10 z-10 opacity-60"
        />
      </div>
      <Container
        maxWidth="lg"
        className="flex flex-col sm:flex-row items-center justify-between lg:justify-evenly my-32 sm:my-52"
      >
        <div className="w-[300px] sm:w-[250px] lg:w-[480px] flex flex-col gap-6 sm:gap-4 lg:gap-6">
          <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
            <h1 className="text-4xl lg:text-6xl text-center sm:text-start font-semibold text-green">
              Desempenho
            </h1>
            <h1 className="text-4xl lg:text-6xl text-center sm:text-start font-semibold">
              aperfeiçoado
            </h1>
          </div>
          <p className="text-base lg:text-2xl text-center sm:text-start text-grayScale-clean">
            O controle sem fio Xbox traz um design elegante, conforto refinado e
            compartilhamento instantâneo para um favorito comum.
          </p>
        </div>
        <Image
          src={contoleXbox}
          alt="control"
          className="w-2/5 lg:w-2/6 mt-10 sm:mt-0"
        />
      </Container>
    </>
  );
}
