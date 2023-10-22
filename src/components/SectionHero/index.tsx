import Image from 'next/image';
import { Container, Hero } from './styles';
import bot from '@/assets/img/home/bot.svg';

export function SectionHero() {
  return (
    <Container>
      <Hero>
        <div>
          <Image src={bot} width={500} height={500} alt="icon home" />
        </div>
        <div>
          <h1>
            Obtenha orientação inteligente para estágio e último ano acadêmico
            com{' '}
            <span>
              Orienta<span>Bot</span>
            </span>
          </h1>

          <p>
            Em sua jornada acadêmica, nossa bot de respostas está pronto para
            oferecer orientação inteligente.
          </p>

          <button
            onClick={() => {
              window.open('https://google.com');
            }}
          >
            Acessar o bot no telegram
          </button>
        </div>
      </Hero>
    </Container>
  );
}
