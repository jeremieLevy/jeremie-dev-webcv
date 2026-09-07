import ContainerTemplate from '../common/ui/ContainerTemplate';
import './OtherSkills.css';
import MarquisBackground from '@/assets/graphic-elements/marquis-background.png';
import LightRectangle from '@/assets/graphic-elements/Rectangle 12.png';
import ReactLogo from '@/assets/images/logos/logo-react.svg';
import TanstackLogo from '@/assets/images/logos/logo-color-600.png';
import PiniaLogo from '@/assets/images/logos/logo.svg';
import DockerLogo from '@/assets/images/logos/docker.svg';
import ViteJSLogo from '@/assets/images/logos/vite.svg';
import NestJsLogo from '@/assets/images/logos/NestJS.svg';
import MarqueeCarousel from '../common/ui/carousels/MarqueeCarousel';
import Rectangle from '@/assets/graphic-elements/Rectangle 17.png';
import GraphicElement from '@/assets/graphic-elements/graphic-element.png';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import PrismaLogo from '@/assets/images/logos/Prisma.svg';
import CursorLogo from '@/assets/images/logos/cursor.svg';
import Claude from '@/assets/images/logos/claude-ai.svg';

const marqueeImages: string[] = [
  ReactLogo,
  TanstackLogo,
  ViteJSLogo,
  PiniaLogo,
  DockerLogo,
  NestJsLogo,
  PrismaLogo,
  CursorLogo,
  Claude,
];

export default function OtherSkills() {
  return (
    <section id="other-skills">
      <ContainerTemplate size="large">
        <div className="py-20">
          <div className="other-skills">
            <div className="order-2 md:order-1 w-full">
              <h3>Et d'autres...</h3>
              <p className="lg:text-base! text-sm/6!">
                J'ai également un scope de compétences plus élargi grâce à
                l'utilisation de technologies Backend (environnement serveur
                NodeJS en Typescript), avec une bonne pratique du framework
                NestJS (ORM Prisma, base de donnée PostgreSQL). Ce scope couvre
                aussi l'intégration et le déploiement continu, dans une démarche
                Devops et qualité (Docker, CI/CD : Github Actions, tests :
                Vitest, Jest, Playwright, gestion de projet : Notion, Trello..).
                Enfin, j'ai eu l'occasion de pratiquer en entreprise des outils
                intégrant l'IA dans les process et workflows de travail, afin
                d'améliorer la productivité (LLMs, Claude Code, Cowork,
                connecteurs..)
              </p>
            </div>
            <div className="order-1 relative w-full flex items-center justify-center">
              <img src={LightRectangle} className="light-rectangle" />
              <div className="absolute overflow-x-auto w-80 z-20 flex items-center">
                <MarqueeCarousel type="img" items={marqueeImages} />
              </div>
              <img
                src={MarquisBackground}
                className="absolute z-10 max-w-72 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] right-0"
              />
            </div>
            <div className="w-full md:order-3 hidden xl:block h-full relative">
              <img src={Rectangle} className="animated-rectangle" />
              <img src={GraphicElement} className="animated-graphic-element" />
              <img src={Chevrons} alt="" className="animated-chevrons" />
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
