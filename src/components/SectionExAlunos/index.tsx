import {
  Container,
  Content,
  SliderButtonNext,
  SliderButtonPrev,
  SliderItem,
  StyledSlider,
  SuccessStoriesSliderContainer
} from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import Slider, { Settings } from 'react-slick';
import { useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import perfil from '@/assets/img/Ellipse 13.svg';
interface Cases {
  descricao: string;
  nome: string;
  funcao: string;
  image: StaticImageData['src'];
}

const cases: Cases[] = [
  {
    funcao: 'Mark Elliot Zuckerberg',
    nome: 'Diretor executivo do Facebook',
    image: perfil.src,
    descricao:
      '“Uma empresa organizada, dinâmica que interage diretamente com o cliente possibilitando trazer sempre os melhores resultados para o negócio.”'
  },
  {
    funcao: 'Mark Elliot Zuckerberg 11',
    nome: 'Diretor executivo do Facebook',
    image: perfil.src,
    descricao:
      '“Uma empresa organizada, dinâmica que interage diretamente com o cliente possibilitando trazer sempre os melhores resultados para o negócio.”'
  },
  {
    funcao: 'Mark Elliot Zuckerberg 22',
    nome: 'Diretor executivo do Facebook',
    image: perfil.src,
    descricao:
      '“Uma empresa organizada, dinâmica que interage diretamente com o cliente possibilitando trazer sempre os melhores resultados para o negócio.”'
  }
];

export function SectionExAlunos() {
  const sliderRef = useRef<Slider>(null);

  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: currentSlide => {
      setSlideIndex(currentSlide);
    }
  };

  const isNextDisabled = slideIndex === cases.length - 1;
  const isPrevDisabled = slideIndex === 0;

  return (
    <Container>
      <h1>Experiências de Ex-alunos</h1>
      <p>
        A satisfação do cliente é nosso objetivo final, e trabalhamos
        incansavelmente para alcançá-la. Afinal, a opinião dos nossos clientes é
        o que realmente importa. Aqui está o que nossos clientes pensam de nós,
        suas experiências e feedbacks, que moldam constantemente a nossa busca
        pela excelência.
      </p>

      <Content>
        <SuccessStoriesSliderContainer>
          <SliderButtonPrev disabled={isPrevDisabled} onClick={handlePrev}>
            <BiSolidLeftArrow />
          </SliderButtonPrev>

          <StyledSlider {...settings} ref={sliderRef}>
            {cases.map((slide, index) => (
              <SliderItem key={index}>
                <div>
                  descricao={slide.descricao}
                  funcao={slide.funcao}
                  image={slide.image}
                  nome={slide.nome}
                </div>
              </SliderItem>
            ))}
          </StyledSlider>

          <SliderButtonNext disabled={isNextDisabled} onClick={handleNext}>
            <BiSolidRightArrow />
          </SliderButtonNext>
        </SuccessStoriesSliderContainer>
      </Content>
    </Container>
  );
}
