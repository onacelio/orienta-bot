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
    nome: 'Levi Pessoa',
    funcao: 'Curso Técnico Em Redes de Computadores',
    image: image.src,
    descricao:
      'Meu nome é Levi Pessoa, fui aluno da Maria Célia do curso Tec. em Redes de computadores no ano de 2020 a 2022. Minha experiência de estágio foi na secretaria de Saúde de Pereiro Ceará, onde tive uma ótima experiência, pois, o local é os profissionais que lá estão são maravilhosos. Lá na secretaria fiquei na parte de atualização vacinas no sistema e atualização de cadastros do SUS (Sistema Único de Saúde). Com isso teve várias vezes que fiz limpeza e ajudei os profissionais da minha área a concertar os Computadores e as redes do local. o estagio foi de total importância para meu curso como o crescimento pessoal e profissional no estágio, vi como seria uma jornada de trabalho e assim peguei experiência e conhecimento.'
  },
  {
    nome: 'Luan dos Santos',
    funcao: 'Curso Técnico Em  Redes de Computadores',
    image: image.src,
    descricao:
      'Meu nome é Luan dos Santos, sou da escola Poeta Sinó Pinheiro em Jaguaribe, e estou cursando o curso de redes de computadores. Iniciei o período de estágio apreensivo com tudo aquilo que eu estava prestes a vivenciar, mas logo no início, ao ser introduzido ao mercado de trabalho me senti acolhido e preenchido com toda a gama de profissionais experientes prontos para me proporcionar uma vasta construção de conhecimento. Enfim, a experiência de estágio está sendo única e excepcional para a minha construção enquanto profissional adentrando com a primeira experiência no mercado de trabalho.'
  },
  {
    nome: 'Mateus Henrique Bessa',
    funcao: 'Curso Técnico Em  Fruticultura',
    image: image.src,
    descricao:
      'Mateus Henrique Bessa Silva. EEEP Professora Maria Célia Pinheiro Falcão. Curso Técnico em Fruticultura. Minha experiência no estágio tem sido um divisor de águas. Pois trabalhar estudar ao mesmo tempo tem me ajudado na minha área social como estudante. De maneira que em cada oportunidade eu tenho procurado me posicionar para dar o meu máximo. Aprendi que é possível chegar onde se quer e fazer aquilo que muitos dizem que não tem capacidade. Dica para futuros estagiários: se doar para lá na frente perceber que valeu a pena.'
  },
  {
    nome: 'Pablo Kaue',
    funcao: 'Curso Técnico Em Informática',
    image: image.src,
    descricao:
      'Minha experiência como estagiário foi uma das melhores possíveis, pois foi o meu primeiro contato com o mundo do trabalho. Pelas empresas que passei pude conhecer pessoas incríveis e mostrar um pouco do que aprendi na escola. Da montagem e desmontagem de PC até a criação de códigos, sempre procurei dar meu máximo, e esse é o conselho que dou, procure dar seu máximo independente de onde você esteja e o que esteja fazendo, e não ser melhor que ninguém, e se que o seu "eu" de ontem.'
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
