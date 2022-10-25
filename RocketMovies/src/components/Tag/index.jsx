import { Container, Text } from "./styles";

export function Tag({ title }) {
  return <Container>{title}</Container>;
}

export function TextLorem({ title, children }) {
  return (
    <Text>     
      {children}
    </Text>
  );
}
