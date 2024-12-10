import Image from "next/image";
import xbox_logo from "../../../public/logo-xbox.png";
import { Container } from "@mui/material";
import Button from "../Atoms/button";

const navbar = [
  { id: 1, title: "jogos" },
  { id: 2, title: "galeria" },
  { id: 3, title: "unbox" },
];

export default function Navbar() {
  return (
    <Container
      maxWidth="md"
      className="h-24 flex gap-10 p-5 items-center justify-between"
    >
      <div className="flex gap-10 items-center">
        <Image src={xbox_logo} width={90} alt="xbox-logo" />
        <Button
          contentText="visão geral"
          style="w-28 h-7 bg-grayScale-secondary uppercase rounded-2xl text-sm font-medium"
        />
        {navbar.map((props) => (
          <p key={props.id} className="uppercase text-sm font-medium">
            {props.title}
          </p>
        ))}
      </div>
      <div>
        <Button
          contentText="ver disponivel"
          style="w-48 h-10 bg-green text-black uppercase text-xs font-bold"
        />
      </div>
    </Container>
  );
}
