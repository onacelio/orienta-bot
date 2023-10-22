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
        'Nosso objetivo é simplificar a integração dos estagiários, fornecendo informações úteis e orientações sobre procedimentos, recursos e oportunidades disponíveis na escola. Com o apoio de nossos professores e colegas, estamos empenhados em criar um chatbot inteligente e amigável que beneficiará toda a comunidade escolar, transformando a tecnologia em uma aliada na educação e no desenvolvimento profissional.',
      image: images.tabone
    },
    {
      title: 'Por quê',
      icon: BiSolidHelpCircle,
      subtitle: 'Por quê Orienta Bot?',
      description:
        'Nosso objetivo é simplificar a integração dos estagiários, fornecendo informações úteis e orientações sobre procedimentos, recursos e oportunidades disponíveis na escola. Com o apoio de nossos professores e colegas, estamos empenhados em criar um chatbot inteligente e amigável que beneficiará toda a comunidade escolar, transformando a tecnologia em uma aliada na educação e no desenvolvimento profissional.',
      image: images.tabtwo
    },
    {
      title: 'Objetivos',
      icon: BiSolidDetail,
      subtitle: 'Nossos objetivos',
      description:
        'Nosso objetivo é simplificar a integração dos estagiários, fornecendo informações úteis e orientações sobre procedimentos, recursos e oportunidades disponíveis na escola. Com o apoio de nossos professores e colegas, estamos empenhados em criar um chatbot inteligente e amigável que beneficiará toda a comunidade escolar, transformando a tecnologia em uma aliada na educação e no desenvolvimento profissional.',
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
