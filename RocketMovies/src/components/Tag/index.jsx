import { Container, Text } from "./styles";

export function Tag({ title, children, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}

export function TextLorem({ title, children }) {
  return <Text>{children}</Text>;
}
