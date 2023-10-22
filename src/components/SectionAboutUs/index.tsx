import { useEffect, useState } from 'react';
import { AboutUs, Container, Content, Tabs } from './styles';
import { BiSolidGroup, BiSolidHelpCircle, BiSolidDetail } from 'react-icons/bi';
import { images } from '@/assets/img/aboutus';
import Image from 'next/image';

export function SectionAboutUs() {
  const titles = [
    {
      title: 'Quem somos',
      icon: BiSolidGroup,
      subtitle: 'Quem somos e o que fazemos',
      description:
        'Somos a turma do 3°ano de informática e estamos desenvolvendo um chatbot que será destinado aos futuros estagiários, sanando dúvidas futuras. Ao longo dos nossos 3 anos de cursos desenvolvemos diversos projetos nos quais tiveram diversos objetivos e focos pessoais, mas dessa vez o nosso projeto é para você estagiário. Queremos facilitar a jornada dos estudantes, fornecendo-lhes um assistente digital capaz de disponibilizar orientações e esclarecer dúvidas de maneira eficiente.',
      image: images.tabone
    },
    {
      title: 'Por quê',
      icon: BiSolidHelpCircle,
      subtitle: 'Por quê Orienta Bot?',
      description:
        'O nome surgiu da ideia de integrar a tecnologia de um ChatBot com a necessidade de facilitar a orientação de estudantes de ensino médio e profissional. Desse modo, nasceu a expressão "OrientaBot". Assim, podemos melhorar as relações para com a sociedade, aprimorar nosso elo com a tecnologia e fortalecer a disseminação de informação.',
      image: images.tabtwo
    },
    {
      title: 'Objetivos',
      icon: BiSolidDetail,
      subtitle: 'Nossos objetivos',
      description: `Nosso objetivo é simplificar a integração de você, estagiário, nessa nova etapa do curso técnico.
        Com o chatbot, podemos: te orienta, fazer com que você fique a par de todo processo de estágio, sanar dúvidas a respeito dos seus deveres e direitos, listar as suas oportunidades.
        Nada melhor do que transformar a tecnologia em uma aliada da educação e do desenvolvimento profissional, não
        é!?
        `,
      image: images.tabthree
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(titles[0]);
  const [activeAnimation, setActiveAnimation] = useState('');
  const [activeAnimationText, setActiveAnimationText] = useState('');

  useEffect(() => {
    setActiveAnimation('activeAnimation');
    setActiveAnimationText('opacityText');

    setTimeout(() => {
      setActiveAnimation('');
      setActiveAnimationText('');
    }, 1000);
  }, [currentSlide]);

  return (
    <Container>
      <AboutUs>
        <h2>Um pouco sobre nós</h2>

        <Tabs>
          {titles.map((title, index) => (
            <button
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => {
                setActiveIndex(index);
                setCurrentSlide(titles[index]);
              }}
            >
              <title.icon /> <p>{title.title}</p>
            </button>
          ))}
        </Tabs>

        <Content>
          <div className={activeAnimationText}>
            <h3>{currentSlide.subtitle}</h3>
            <p>{currentSlide.description}</p>
          </div>

          <div>
            <Image
              className={activeAnimation}
              src={currentSlide.image.src}
              alt={`Image ${currentSlide.title}`}
              width={400}
              height={400}
            />
          </div>
        </Content>
      </AboutUs>
    </Container>
  );
}
