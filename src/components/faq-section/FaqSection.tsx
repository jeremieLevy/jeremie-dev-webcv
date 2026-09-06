import ContainerTemplate from '../common/ui/ContainerTemplate';
import './FaqSection.css';
import Rectangle from '@/assets/graphic-elements/Rectangle 15.png';
import SingleChevron from '@/assets/graphic-elements/single-chevron.svg';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import Ellipse from '@/assets/graphic-elements/ellipse.svg';
import { useState } from 'react';
import clsx from 'clsx';

type Question = {
  id: number;
  quest: string;
  answer: string;
};

const faqQuestions: Question[] = [
  {
    id: 1,
    quest:
      'Quelles sont les principales technologies maitrisées par jeremie-dev ? ',
    answer:
      "VueJS, Typescript, React, NestJS. Pour l'instant, principalement des stacks gravitant autour de NodeJS. Mais jeremie-dev est toujours motivé à l'idée d'apprendre de nouvelles technologies. Il à également de l'expérience avec l'intégration d'outils IA : LLMS : Claude, utilisation d'IDE comme Cursor, Antigravity avec notamment Claude Code pour améliorer la productivité. ",
  },
  {
    id: 2,
    quest:
      'Est ce que jeremie-dev maitrise les concepts devops ? (CI/CD, démarche qualité...)',
    answer:
      "Oui, ainsi que les concepts des différents environnements d'une application (dev, staging, prod). Il utilise principalement Docker, en local comme en production. Il maîtrise également l'élaboration et l'exécution d'un plan de test applicatif/métier : tests unitaires, d'intégration et end-to-end côté client. Il travaille aussi avec Github Actions pour l'automatisation des tâches liées à l'intégration et au déploiement continu.",
  },
  {
    id: 3,
    quest: 'Est-ce que jeremie-dev peut travailler avec des bases de données ?',
    answer:
      "Oui, essentiellement avec PostgreSQL et l'ORM Prisma pour les requêtes préparées, en Typescript. Il peut aussi optimiser et travailler directement sur un schéma grace au SQL. Il pourrait aussi aisément s'adapter sur d'autres SGBD (MySQL par exemple) ou sur du NoSQL.",
  },
  {
    id: 4,
    quest: 'Est ce que jeremie-dev s’intègre facilement dans une équipe tech ?',
    answer:
      "Bien sur ! Il a une expérience de 2 ans dans un environnement produit/tech en méthode Agile/Scrum, sous la responsabilité d'un CPO, de plusieurs product owner/managers, et en collaboration avec une UI/UX designer.  Il est d'ailleurs possible de consulter les recommandations de ses anciens collègues sur Linkedin.",
  },
  {
    id: 5,
    quest: 'Est ce que jeremie-dev peut générer des blagues ?',
    answer:
      "Il en connait quelques unes, surtout celle du canif... C'est un petit fien...",
  },
  {
    id: 6,
    quest: "Est ce qu'elles sont drôles ?",
    answer: 'Pas toujours.',
  },
];

export default function FaqSection() {
  const [openAnswerId, setOpenAnswerId] = useState<number | null>(null);

  const handleShowAnswer = (questionId: number) => {
    setOpenAnswerId((current) => (current === questionId ? null : questionId));
  };

  return (
    <section id="faq">
      <ContainerTemplate size="large">
        <div className="py-20">
          <div className="graphic-element">
            <div className="flex items-center gap-8 w-fit">
              <img src={SingleChevron} className="rotate-270" />
              <img src={Rectangle} className="mx-auto max-w-48" />
              <img src={SingleChevron} className="rotate-90" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center top-0 gap-72">
              <img src={Ellipse} className="rotate-180 max-w-10 opacity-30" />
              <img src={Chevrons} className="max-w-28 opacity-30" />
            </div>
          </div>
          <div className="faq">
            <ul>
              {faqQuestions.map((question) => (
                <li key={question.id}>
                  <div
                    onClick={() => handleShowAnswer(question.id)}
                    className={clsx('question-content', {
                      'question-content--open': question.id === openAnswerId,
                    })}
                  >
                    <img
                      src={SingleChevron}
                      className={clsx('arrow-open-answer', {
                        'rotate-0!': question.id === openAnswerId,
                      })}
                    />
                    <div className="question">{question.quest}</div>
                    <p
                      className={clsx(
                        'md:text-lg text-sm max-h-0 transition-all duration-300 ease-in-out',
                        {
                          'max-h-42!': question.id === openAnswerId,
                        }
                      )}
                    >
                      {question.answer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
