import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação par aacompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />


        <Button title="Entrar" />

        <a href="#">
          Criar Conta
        </a>
      </Form>
    </Container>
  );
}
