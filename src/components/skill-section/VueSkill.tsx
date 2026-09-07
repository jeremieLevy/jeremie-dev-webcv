import './VueSkill.css';
import ContainerTemplate from '@/components/common/ui/ContainerTemplate';
import FocusElement from '@/assets/graphic-elements/focus-element.png';
import Vue3DLogo from '@/assets/images/vue_3D_logo.png';

export default function VueSkill() {
  return (
    <section id="vue-skills">
      <ContainerTemplate size="large">
        <div className="vue-skill">
          <div className="md:flex items-center w-full gap-20">
            <div className="relative lg:w-[56rem] flex items-center justify-center w-full h-fit mb-12 md:mb-0">
              <img src={Vue3DLogo} alt="vuejs-3D-logo" className="vue-logo" />
              <img src={FocusElement} className="vue-focus" />
            </div>
            <div className="w-full">
              <h2 className="mb-8!">Solide connaissance du framework VueJS</h2>
              <p className="text-start lg:text-base! text-sm/6!">
                Au cours de ces deux années passées en tant que développeur
                Frontend au sein de l'équipe tech de{' '}
                <strong>Frenchfounders</strong> à Marseille, j'ai eu
                l'opportunité de contribuer à des{' '}
                <strong>
                  features à fort impact sur la plateforme de l'entreprise
                </strong>{' '}
                : un moteur de recherche intégrant des performances IA, tunnel
                d'onboarding, ainsi que l'intégration complète de plusieurs
                SPAs. J'ai également pris part aux{' '}
                <strong>
                  phases de support et de maintenance technique du projet
                </strong>{' '}
                lors de différents cooldown, développant ainsi une vision plus
                globale du cycle de vie d'un produit. J'ai principalement
                travaillé avec le <strong>framework VueJS en Typescript</strong>
                , dont j'ai acquis une maîtrise solide au terme de ces deux ans,
                ainsi que de l'ensemble de <strong>l'écosystème Vue</strong> :
                Tanstack Vue Query pour les requêtes, Pinia, i18n...
              </p>
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
