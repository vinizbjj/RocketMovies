import { Container, Text } from "./styles";

export function Tag({ title, children, ...rest }) {
  return <Container>{title}</Container>;
}

export function TextLorem({ title, children }) {
  return (
    <Text>     
      {children}
    </Text>
  );
}
