import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação par aacompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">
          Criar Conta
        </a>
      </Form>
    </Container>
  );
}
