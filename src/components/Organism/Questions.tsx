import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

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

export default function Questions() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  const Arrow = ({ isActive }: { isActive: boolean }) => {
    return (
      <KeyboardArrowDownIcon sx={{ color: isActive ? "#9BF00B" : "#C0C0C0" }} />
    );
  };

  return (
    <Container maxWidth="md" className="flex flex-col gap-8 my-20">
      <div className="flex justify-center lg:justify-start gap-2">
        <h1 className="text-2xl lg:text-5xl font-semibold text-green">
          Perguntas
        </h1>
        <h1 className="text-2xl lg:text-5xl font-semibold">frequentes</h1>
      </div>
      <div>
        {questions.map((props) => (
          <div key={props.id}>
            <Accordion
              sx={{
                bgcolor: "transparent",
                boxShadow: "none",
              }}
              expanded={activeId === props.id}
            >
              <AccordionSummary
                expandIcon={<Arrow isActive={activeId === props.id} />}
                onClick={() => handleClick(props.id)}
              >
                <p className="text-white text-xs lg:text-2xl py-4">
                  {props.question}
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-grayScale-clean text-xs lg:text-lg">
                  {props.answer}
                </p>
              </AccordionDetails>
            </Accordion>
            <div className="w-full h-px opacity-10 bg-grayScale-clean" />
          </div>
        ))}
      </div>
    </Container>
  );
}
