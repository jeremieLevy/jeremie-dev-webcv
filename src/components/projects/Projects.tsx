import ContainerTemplate from '../common/ui/ContainerTemplate';
import './Projects.css';
import ProjectCard from './partials/ProjectCard';
import Wireframe from '@/assets/graphic-elements/wireframe-cube.svg';
import Rectangle from '@/assets/graphic-elements/Rectangle 17.png';
import RecrutementSPA from '@/assets/images/projects/recrutement-SPA-ff.jpg';
import JeremieDev from '@/assets/images/projects/jeremie-dev.jpg';
import NextfeatLanding from '@/assets/images/projects/nextfeat-landing.jpg';
import { type Project } from './partials/ProjectCard';
import SingleChevron from '@/assets/graphic-elements/single-chevron.svg';
import { useLayoutEffect, useRef, useState } from 'react';

const projects: Project[] = [
  {
    id: 1,
    title: 'Nextfeat',
    subtitle: 'Application Fullstack 360 - Api REST - SaaS',
    description:
      "Conception d'une plateforme web destinée à mettre en relation des musiciens amateurs afin qu'ils puissent réaliser des collaborations musicales (feats). Gestion de database pour les utilisateurs inscrits, sécurité applicative, démarche qualité, CI et CD, infrastructure de mise en production, création de plusieurs environnements (prod, staging)",
    image: NextfeatLanding,
    href: 'https://yournextfeat.com',
  },
  {
    id: 2,
    title: 'Web cv : Jeremie-dev',
    subtitle: 'Single page en ReactJS',
    description:
      "Conception graphique et intégration en React + css pur d'une single page de contenu statique",
    image: JeremieDev,
  },
  {
    id: 3,
    title: 'Recrutement Frenchfounders',
    subtitle: "Intégration d'une SPA",
    description:
      "Intégration ui avec le framework VueJS à partir de la maquette produit (Figma), consommation de l'API. Utilisation de GSAP pour certains effets de scroll.",
    image: RecrutementSPA,
    href: 'https://recrutement.frenchfounders.com',
  },
];

const SCROLL_OFFSET = 20;

export default function Projects() {
  const stackerRef = useRef<HTMLDivElement>(null);
  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardPositions = useRef<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useLayoutEffect(() => {
    const container = stackerRef.current;
    if (!container) return;

    container.scrollTop = 0;

    cardPositions.current = projectCardRefs.current.map(
      (card) => card?.offsetTop ?? 0
    );

    const lastPosition = cardPositions.current.at(-1) ?? 0;
    container.scrollTop = Math.max(lastPosition - SCROLL_OFFSET, 0);

    const handleScroll = () => {
      const anchor = container.scrollTop + SCROLL_OFFSET;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardPositions.current.forEach((position, index) => {
        const distance = Math.abs(position - anchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const goToProject = (index: number) => {
    const container = stackerRef.current;
    const position = cardPositions.current[index];
    if (!container || position === undefined) return;

    container.scrollTo({
      top: Math.max(position - SCROLL_OFFSET, 0),
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects">
      <ContainerTemplate size="large">
        <div className="md:py-32 pt-32 pb-16">
          <div className="relative mb-20">
            <div className="flex items-center justify-center gap-8">
              <img src={Rectangle} className="max-w-4" />
              <div className="font-mono-alt font-bold md:text-6xl text-4xl">
                Projets
              </div>
              <img src={Rectangle} className="max-w-4" />
            </div>
            <img
              src={Wireframe}
              className="-z-10 absolute inset-0 -top-20 left-[50%] translate-x-[-50%] max-w-80"
            />
          </div>
          <div className="stacker-frame">
            <div className="stacker" ref={stackerRef}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  ref={(el) => {
                    projectCardRefs.current[index] = el;
                  }}
                />
              ))}
              <div className="h-72"></div>
            </div>
            <div className="absolute -top-12 lg:right-8 right-[50%] translate-x-[50%] lg:translate-x-0 z-30 flex gap-2 items-center max-h-16">
              <button
                type="button"
                className="scroll-btn"
                disabled={activeIndex === 0}
                onClick={() => goToProject(activeIndex - 1)}
                aria-label="Projet précédent"
              >
                <img src={SingleChevron} alt="" />
              </button>
              <button
                type="button"
                className="scroll-btn"
                disabled={activeIndex === projects.length - 1}
                onClick={() => goToProject(activeIndex + 1)}
                aria-label="Projet suivant"
              >
                <img src={SingleChevron} alt="" className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
