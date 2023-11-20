import { MouseEvent, SetStateAction, useEffect, useState } from 'react';
import { comandsData, topics } from './content';
import { Comands, Container, Content, Texts, Topics } from './styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styleGuide } from '@/styles';

interface comandProps {
  id: number;
  comand: string;
  secondary: string;
  description: string;
  category: string;
}

export function ComandsPage() {
  const [item, setItem] = useState({ name: 'Todos' });
  const [comands, setComands] = useState<comandProps[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'Todos') {
      setComands(comandsData);
    } else {
      const newComands = comandsData.filter(comand => {
        return comand.category === item.name;
      });

      setComands(newComands);
    }
  }, [item]);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleClick = (
    e:
      | React.MouseEvent<HTMLSpanElement, MouseEvent<HTMLSpanElement>>
      | React.MouseEvent<HTMLSpanElement>,
    index: SetStateAction<number>
  ) => {
    const evento = e.target as HTMLElement;
    setItem({ name: evento.textContent || '' });
    setActive(index);
  };

  return (
    <Container>
      <Texts>
        <h1>Comandos</h1>
        <p>Lista de comandos do bot</p>
      </Texts>

      <Content>
        <Topics>
          <div>
            {topics.map((topic, index) => (
              <span
                onClick={(
                  e:
                    | React.MouseEvent<
                        HTMLSpanElement,
                        MouseEvent<HTMLSpanElement>
                      >
                    | React.MouseEvent<HTMLSpanElement>
                ) => {
                  handleClick(e, index);
                }}
                key={index}
                className={`${active === index ? 'active' : ''}`}
              >
                {topic.name}
              </span>
            ))}
          </div>
        </Topics>
        <Comands>
          {comands.length === 0 ? (
            <p>Sem comandos para essa categoria</p>
          ) : (
            comands.map(comand => (
              <Accordion
                key={comand.id}
                expanded={expanded === `panel${comand.id}`}
                onChange={handleChange(`panel${comand.id}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${comand.id}bh-content`}
                  id={`panel${comand.id}-header`}
                >
                  <Typography
                    sx={{
                      width: '50%',
                      flexShrink: 0,
                      color: `${styleGuide.colors.yellow.yelloPrincipal}`,
                      fontSize: `${styleGuide.fontSize.default}`,
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}
                  >
                    {comand.comand}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {comand.secondary}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{comand.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </Comands>
      </Content>
    </Container>
  );
}
