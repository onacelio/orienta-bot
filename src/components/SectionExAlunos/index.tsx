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
interface Cases {
  descricao: string;
  nome: string;
  funcao: string;
}

const cases: Cases[] = [
  {
    nome: 'Levi Pessoa',
    funcao: 'Curso Técnico Em Redes de Computadores',
    descricao:
      'Meu nome é Levi Pessoa, fui aluno da Maria Célia do curso Tec. em Redes de computadores no ano de 2020 a 2022. Minha experiência de estágio foi na secretaria de Saúde de Pereiro Ceará, onde tive uma ótima experiência, pois, o local é os profissionais que lá estão são maravilhosos. Lá na secretaria fiquei na parte de atualização vacinas no sistema e atualização de cadastros do SUS (Sistema Único de Saúde). Com isso teve várias vezes que fiz limpeza e ajudei os profissionais da minha área a concertar os Computadores e as redes do local. o estagio foi de total importância para meu curso como o crescimento pessoal e profissional no estágio, vi como seria uma jornada de trabalho e assim peguei experiência e conhecimento.'
  },
  {
    nome: 'Luan dos Santos',
    funcao: 'Curso Técnico Em  Redes de Computadores',
    descricao:
      'Meu nome é Luan dos Santos, sou da escola Poeta Sinó Pinheiro em Jaguaribe, e estou cursando o curso de redes de computadores. Iniciei o período de estágio apreensivo com tudo aquilo que eu estava prestes a vivenciar, mas logo no início, ao ser introduzido ao mercado de trabalho me senti acolhido e preenchido com toda a gama de profissionais experientes prontos para me proporcionar uma vasta construção de conhecimento. Enfim, a experiência de estágio está sendo única e excepcional para a minha construção enquanto profissional adentrando com a primeira experiência no mercado de trabalho.'
  },
  {
    nome: 'Mateus Henrique Bessa',
    funcao: 'Curso Técnico Em  Fruticultura',
    descricao:
      'Mateus Henrique Bessa Silva. EEEP Professora Maria Célia Pinheiro Falcão. Curso Técnico em Fruticultura. Minha experiência no estágio tem sido um divisor de águas. Pois trabalhar estudar ao mesmo tempo tem me ajudado na minha área social como estudante. De maneira que em cada oportunidade eu tenho procurado me posicionar para dar o meu máximo. Aprendi que é possível chegar onde se quer e fazer aquilo que muitos dizem que não tem capacidade. Dica para futuros estagiários: se doar para lá na frente perceber que valeu a pena.'
  },
  {
    nome: 'Pablo Kaue',
    funcao: 'Curso Técnico Em Informática',
    descricao:
      'Minha experiência como estagiário foi uma das melhores possíveis, pois foi o meu primeiro contato com o mundo do trabalho. Pelas empresas que passei pude conhecer pessoas incríveis e mostrar um pouco do que aprendi na escola. Da montagem e desmontagem de PC até a criação de códigos, sempre procurei dar meu máximo, e esse é o conselho que dou, procure dar seu máximo independente de onde você esteja e o que esteja fazendo, e não ser melhor que ninguém, e se que o seu "eu" de ontem.'
  },

  {
    nome: 'Brunieli Feitosa',
    funcao: 'Curso Técnico Em Administração',
    descricao:
      'Meu estágio supervisionado foi executado na empresa brisanet telecomunicações, na qual pude ter minha primeira experiência com o mercado de trabalho, podendo assim, observar como ocorriam na prática tudo o que estudei durante o curso, pude aprender novas habilidades, e tive também a oportunidade de aprimorar minhas competências para que pudesse me tornar uma boa profissional. Bom, meu principal conselho para os estagiários é que eles deem o seu melhor nessa oportunidade, mas que acima de tudo, se lembre que eles são estagiários, terão que ter bastante responsabilidade enquanto estiverem na empresa, mas não se sobrecarreguem com as atividades e estresses de lá.'
  },
  {
    nome: 'Francisco Armando Silva',
    funcao: 'Curso Técnico Em Informática',
    descricao:
      'Meu estágio no Sindicato dos Trabalhadores Rurais de Pereiro, proporcionado pelo curso de agronegócio, foi uma experiência enriquecedora que contribuiu significativamente para o meu desenvolvimento profissional e pessoal. A preparação em sala de aula foi fundamental para meu progresso durante o estágio, que incluiu observação dos processos, sistemas, atendimento, trabalho em equipe e organização. Aprendi que esses aspectos são essenciais para a produtividade e resolução de problemas. Adquiri conhecimento prático na área, facilitando a realização das atividades. Sinto-me mais capacitado para atuar em ambientes de trabalho após esse período de estágio.'
  },
  {
    nome: 'Henrique Diógenes Rocha',
    funcao: 'Curso Técnico Em Informática',
    descricao:
      'Na minha primeira semana de estágio era tudo novo, pois fui escalado e entrei na seleção dos que iriam para a empresa concorrida: a Brisanet. Então foi quando comecei a estagiar no setor de suporte ativo, e de cara vi que era muita coisa para aprender em pouco tempo. De início fiz amizade com o setor quase por inteiro, e precisou passar apenas um mês de estágio que eu fiquei conhecido como o mascote do setor, não porque era zombado, mas pelo vínculo afetivo que ali foi desenvolvido. Passados mais alguns dias comecei a ganhar destaque no que estava fazendo, e assim que o meu estágio foi encerrado, eu terminei com a sensação de dever cumprido.'
  },
  {
    nome: 'Otávio Augusto',
    funcao: 'Curso Técnico Em  Administração',
    descricao:
      'Após concluir o curso de administração em 2022, Otávio destaca a importância do estágio na sua formação. Ele ressalta a necessidade de equilibrar estudos, estágio, provas e lazer, enfatizando a importância da gestão do tempo. Durante o estágio, enfrentou desafios relacionados ao monitoramento e preenchimento de dados, o que o levou a adquirir habilidades em planilhas e aprimorar o trabalho em equipe. Posteriormente, obteve uma vaga como operador de suporte técnico, onde aplicou as experiências adquiridas. Otávio encoraja outros estudantes a valorizarem o estágio, mesmo nos momentos difíceis, e expressa votos de sucesso a todos. Ele reconhece a perseverança necessária para alcançar os objetivos e parabeniza os estudantes pela coragem e determinação.'
  },
  {
    nome: 'Ryan Albuquerque Silva',
    funcao: 'Curso Técnico Em Redes de Computadores',
    descricao:
      'Ryan Albuquerque, de 18 anos, ex-aluno da Escola Maria Célia, fez o curso técnico em Redes de Computadores e estagiou na Brisanet, onde enfrentou desafios iniciais, mas encontrou oportunidades de aprendizado. Durante o estágio, ele se envolveu no agendamento de instalações e na resolução de problemas técnicos, além de fazer amizades e reconhecer a importância do networking. Essa experiência marcou seu primeiro contato com o mercado de trabalho e o incentivou a continuar buscando aprimoramento profissional e pessoal. Após concluir o ensino médio e o curso técnico, Ryan está determinado a evoluir em todas as áreas de sua vida. Ele reconhece a importância de se manter atualizado e está comprometido em buscar crescimento contínuo, tanto no âmbito profissional quanto pessoal.'
  },
  {
    nome: 'Sabrina Lisboa',
    funcao: 'Curso Técnico Em Administração',
    descricao:
      'Sabrina, 18 anos e técnica em administração, compartilha sua experiência como estagiária na Brisanet Telecomunicações. Enfrentou desafios no setor de instalação e assistência técnica, mas buscou aprendizado e apoio dos colegas. Destaca a importância de acreditar em si mesma, buscar ajuda para aprender e lidar com situações desafiadoras. Reforça que, embora nada seja fácil no início, a persistência e a busca por aprendizado tornam tudo mais fácil com o tempo. Encoraja a manter a calma, coragem e disposição para aprender com os erros. A mensagem que Sabrina deixa é a importância de acreditar em si mesmo, buscar aprendizado contínuo e enfrentar desafios com confiança e dedicação para crescer e se desenvolver.'
  },
  {
    nome: 'Sofia Bento Desidério',
    funcao: 'Curso Técnico Em Informática',
    descricao:
      'Meu nome é Sofia Bento Desidério e cursei informática na EP Maria Célia Pinheiro Falcão. Durante quatro meses, estagiei na Brisanet no setor de produtos, onde participei do desenvolvimento do Conecta Mais, um novo serviço. Essa experiência foi enriquecedora, pois me permitiu aprender sobre processos e gestão, além de interagir com clientes e colaboradores. A liberdade criativa e a supervisão me proporcionaram um ambiente de aprendizado dinâmico. Aprendi a compreender as limitações da empresa e das pessoas, além de valorizar o processo e a qualidade. Recebi feedbacks positivos e áreas a melhorar, como a impaciência. A lição que destaco é a importância de buscar conhecimento e desenvolvimento por conta própria. Mesmo após quatro meses, a experiência na Brisanet continua a influenciar minha atuação. Encorajo a não desanimar em situações desafiadoras e a buscar oportunidades alinhadas aos interesses pessoais.'
  }
];

export function SectionExAlunos() {
  const sliderRef = useRef<Slider>(null);

  const slideNextDisable = () => {
    if (slideIndex === cases.length - 1) {
      return true;
    }
    return false;
  };

  const slidePrevDisable = () => {
    if (slideIndex === 0) {
      return true;
    }
    return false;
  };

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

  const settingsSlide: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    afterChange: currentSlide => {
      setSlideIndex(currentSlide);
    },
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
        <h1>Experiências no estágio</h1>
        <Content>
          <SuccessStoriesSliderContainer>
            <SliderButtonPrev
              onClick={handlePrev}
              disabled={slidePrevDisable()}
            >
              <BiSolidLeftArrow />
            </SliderButtonPrev>

            <StyledSlider {...settingsSlide} ref={sliderRef}>
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
                    nome={slide.nome}
                  />
                </SliderItem>
              ))}
            </StyledSlider>

            <SliderButtonNext
              onClick={handleNext}
              disabled={slideNextDisable()}
            >
              <BiSolidRightArrow />
            </SliderButtonNext>
          </SuccessStoriesSliderContainer>
        </Content>
      </ExAlunos>
    </Container>
  );
}
