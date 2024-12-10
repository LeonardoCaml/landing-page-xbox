import xbox_logo from "../../../public/logo-xbox.png";
import Image from "next/image";
import { Container } from "@mui/material";

const data = new Date().getFullYear();

export default function Footer() {
  return (
    <Container maxWidth="md" className="flex justify-between my-10">
      <div>
        <Image src={xbox_logo} alt="xbox" className="w-20 lg:w-28" />
      </div>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-10">
        <p className="text-grayScale-primary text-xs lg:text-base">
          @ Microsoft {data}
        </p>
        <p className="text-grayScale-primary text-xs lg:text-base">
          Todos os direitos reservados
        </p>
      </div>
    </Container>
  );
}
