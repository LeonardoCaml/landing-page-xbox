import Image from "next/image";
import xbox_logo from "../../../public/logo-xbox.png";
import { Container } from "@mui/material";
import Button from "../Atoms/button";

const navbar = [
  { id: 1, title: "visão geral" },
  { id: 2, title: "jogos" },
  { id: 3, title: "galeria" },
  { id: 4, title: "unbox" },
];

export default function Navbar() {
  return (
    <Container
      maxWidth="md"
      className="h-24 flex gap-10 p-5 items-center justify-between"
    >
      <div className="flex gap-10 items-center">
        <Image src={xbox_logo} width={90} alt="xbox-logo" />
        {navbar.map((props) => (
          <Button
            key={props.id}
            contentText={props.title}
            style="h-7 px-3 bg-grayScale-secondary uppercase rounded-2xl text-xs lg:text-sm font-medium"
          />
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
