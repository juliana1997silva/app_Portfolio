import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="socialMedia">
        <div>
          <a href="https://github.com/juliana1997silva" target={"_blank"}>
            <GitHubIcon />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/juliana-jesus1997/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </a>
        </div>

        <div>
          <a
            href="https://instagram.com/juuhsilva0814?igshid=Yzg5MTU1MDY="
            target={"_blank"}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <h1>
        © Copyright 2024 - Juliana Jesus. <br />
        Todos os direitos reservados.
      </h1>
    </Container>
  );
}
