import xbox_logo from "../../../public/logo-xbox.png";
import Image from "next/image";
import { Container } from "@mui/material";

const data = new Date().getFullYear();

export default function Footer() {
  return (
    <Container maxWidth="md" className="flex justify-between my-10">
      <div>
        <Image src={xbox_logo} alt="xbox" width={90} />
      </div>
      <div className="flex gap-10">
        <p className="text-grayScale-primary">@ Microsoft {data}</p>
        <p className="text-grayScale-primary">Todos os direitos reservados</p>
      </div>
    </Container>
  );
}
