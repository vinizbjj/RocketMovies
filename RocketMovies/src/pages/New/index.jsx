import { ArrowIcon } from "../../components/ArrowIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, TextArea } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ArrowIcon />
            <h1>Novo Filme</h1>
          </header>

          <div>
            <Input placeholder="Titulo" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </div>

          <TextArea placeholder="Observações" />

        <span>Marcadores</span>
        </Form>
      </main>
    </Container>
  );
}
