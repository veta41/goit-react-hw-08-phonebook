import ParticlesLines from 'components/ParticlesLines/ParticlesLines';

import { Container, Title } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <ParticlesLines />

      <Title> Hello, this is your PhoneBook.</Title>
    </Container>
  );
}
