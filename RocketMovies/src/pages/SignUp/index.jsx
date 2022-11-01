import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ArrowIcon } from "../../components/ArrowIcon";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação par acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#">
          <ArrowIcon title={"Voltar para o login"}/>
        </a>
      </Form>

      <Background />
    </Container>
  );
}
