import {
  Container,
  ExAlunos,
  Content,
  SliderButtonNext,
  SliderButtonPrev,
  SliderItem,
  StyledSlider,
  SuccessStoriesSliderContainer
} from './style';
import { BannerImageSlider } from './BannerImageSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import Slider, { Settings } from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import image from '@/assets/img/avatar-card.svg';
interface Cases {
  descricao: string;
  nome: string;
  funcao: string;
  image: StaticImageData['src'];
}

const cases: Cases[] = [
  {
    nome: 'Mark Elliot Zuckerberg',
    funcao: 'Diretor executivo do Facebook',
    image: image.src,
    descricao:
      '“Uma empresa organizada, dinâmica que interage diretamente com o cliente possibilitando trazer sempre os melhores resultados para o negócio.”'
  },
  {
    nome: 'Mark Elliot Zuckerberg 11',
    funcao: 'Diretor executivo do Facebook',
    image: image.src,
    descricao:
      '“Uma empresa organizada, dinâmica que interage diretamente com o cliente possibilitando trazer sempre os melhores resultados para o negócio.”'
  },
  {
    nome: 'Mark Elliot Zuckerberg 22',
    funcao: 'Diretor executivo do Facebook',
    image: image.src,
    descricao:
      '“Uma empresa organizada, dinâmica que interage diretamente com o cliente possibilitando trazer sempre os melhores resultados para o negócio.”'
  }
];

export function SectionExAlunos() {
  const sliderRef = useRef<Slider>(null);

  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    if (slideIndex === 0) {
      return sliderRef.current?.slickGoTo(cases.length - 1);
    }
    return sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    if (slideIndex === cases.length - 1) {
      return sliderRef.current?.slickGoTo(0);
    }
    return sliderRef.current?.slickNext();
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

  useEffect(() => {
    const time = setTimeout(() => {
      handleNext();
    }, 15000);
    return () => {
      clearTimeout(time);
    };
  });

  return (
    <Container>
      <ExAlunos>
        <h1>Experiências de Ex-alunos</h1>
        <p>
          A satisfação do cliente é nosso objetivo final, e trabalhamos
          incansavelmente para alcançá-la. Afinal, a opinião dos nossos clientes
          é o que realmente importa. Aqui está o que nossos clientes pensam de
          nós, suas experiências e feedbacks, que moldam constantemente a nossa
          busca pela excelência.
        </p>

        <Content>
          <SuccessStoriesSliderContainer>
            <SliderButtonPrev onClick={handlePrev}>
              <BiSolidLeftArrow />
            </SliderButtonPrev>

            <StyledSlider {...settings} ref={sliderRef}>
              {cases.map((slide, index) => (
                <SliderItem
                  style={{
                    transform: `translateX(-${cases.length * 100}%)`
                  }}
                  key={index}
                >
                  <BannerImageSlider
                    descricao={slide.descricao}
                    funcao={slide.funcao}
                    image={slide.image}
                    nome={slide.nome}
                  />
                </SliderItem>
              ))}
            </StyledSlider>

            <SliderButtonNext onClick={handleNext}>
              <BiSolidRightArrow />
            </SliderButtonNext>
          </SuccessStoriesSliderContainer>
        </Content>
      </ExAlunos>
    </Container>
  );
}
