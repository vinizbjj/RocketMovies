import { Input } from '../Input';
import { Container, Profile } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <h1>RocketMovies</h1>
                <Input />

                <div>
                    <strong>Vinicius Oliveira</strong>
                    <span>sair</span>
                </div>
                <img src="https://github.com/vinizbjj.png" alt="Foto so usuario" />
            </Profile>
        </Container>
    );
}