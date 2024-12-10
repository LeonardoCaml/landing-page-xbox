import Image, { StaticImageData } from "next/image";
import xbox from "../../public/xbox.png";
import xbox_logo from "../../public/logo-xbox.png";
import contoleXbox from "../../public/controle-xbox.png";
import Navbar from "@/components/navbar";
import Head from "next/head";

import farcry from "../../public/Group 1.png";
import forza from "../../public/Group 2.png";
import fifa from "../../public/Group 3.png";
import minecraft from "../../public/Group 4.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";

const data = new Date().getFullYear();

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

const questions = [
  {
    id: 1,
    question: "Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?",
    answer: "lorem impsu tárara tarara",
  },
  {
    id: 2,
    question: "O que está incluído no Xbox Series X?",
    answer: "lorem impsu tárara tarara",
  },
  {
    id: 3,
    question: "Como sei se minha TV é compatível com 4K?",
    answer: "lorem impsu tárara tarara",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>xbox</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center gap-10 mt-20">
        <h1 className="text-7xl z-10 font-semibold">Xbox series X</h1>
        <div className="w-96 h-96 rounded-full blur-[200px] bg-green absolute mt-10  opacity-20 z-0" />
        <p className="uppercase text-2xl text-green font-semibold z-10">
          pedido antecipado
        </p>
        <Image
          src={xbox}
          alt="xbox"
          width={900}
          className="mt-10 z-10 opacity-60"
        />
      </div>
      <Container
        maxWidth="lg"
        className="flex items-center justify-evenly my-52"
      >
        <div className="w-[480px] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-semibold text-green">Desempenho</h1>
            <h1 className="text-6xl font-semibold">aperfeiçoado</h1>
          </div>
          <p className="text-2xl text-grayScale-clean">
            O controle sem fio Xbox traz um design elegante, conforto refinado e
            compartilhamento instantâneo para um favorito comum.
          </p>
        </div>
        <Image src={contoleXbox} alt="control" width={400} />
      </Container>
      <div>
        <div className="flex">
          {games.map((props) => (
            <Image
              key={props.id}
              src={props.src}
              alt="game"
              className="w-1/4"
            />
          ))}
        </div>
      </div>
      <Container maxWidth="md" className="flex flex-col gap-8 my-20">
        <div className="flex gap-2">
          <h1 className="text-5xl font-semibold text-green">Perguntas</h1>
          <h1 className="text-5xl font-semibold">frequentes</h1>
        </div>
        <div>
          {questions.map((props) => (
            <div key={props.id}>
              <Accordion
                sx={{
                  bgcolor: "transparent",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                  <p className="text-white text-2xl py-4">{props.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-grayScale-clean text-lg">{props.answer}</p>
                </AccordionDetails>
              </Accordion>
              <div className="w-full h-px opacity-10 bg-grayScale-clean" />
            </div>
          ))}
        </div>
      </Container>
      <Container maxWidth="md" className="flex justify-between my-10">
        <div>
          <Image src={xbox_logo} alt="xbox" width={90} />
        </div>
        <div className="flex gap-10">
          <p className="text-grayScale-primary">@ Microsoft {data}</p>
          <p className="text-grayScale-primary">Todos os direitos reservados</p>
        </div>
      </Container>
    </div>
  );
}
