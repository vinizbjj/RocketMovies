import { Container, Brand, NewNote, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { GrAdd } from "react-icons/gr";
import { Tag } from "../../components/Tag";
import { Star } from "../Details/styles";
import { RiStarSFill, RiStarLine } from "react-icons/ri";

export function Home() {
  return (
    <Container>
      <Header />
      <Section title="Meus Filmes">
        <NewNote>
          <GrAdd />
          <h3>Adicionar Filme</h3>
        </NewNote>
      </Section>

      <main>
        <Content>
          <h4>Interstellar</h4>
          <Star>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarLine />
          </Star>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            consequatur, itaque natus voluptas necessitatibus, perferendis minus
            ratione, accusamus reprehenderit rerum praesentium? Rerum iste enim
            suscipit eius consequatur tempore tenetur nulla!
          </p>
          <Tag title="Ficção Científica" />
          <Tag title="Drama" />
          <Tag title="Familia" />
        </Content>
      </main>
    </Container>
  );
}
