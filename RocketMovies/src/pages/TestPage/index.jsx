import { Container } from "./styles";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function TestPage() {
  return (
    <Container>
      <Section title="minhas notas">
        <Note
          data={{
            title: "REACT",
            description: "testando texto",
            tags: [
          { id: '1', name:'react'},
          { id: '2', name:'node'},
          { id: '3', name:'javascript'},

          ],
          }}
        ></Note>
      </Section>
    </Container>
  );
}
