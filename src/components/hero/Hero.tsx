import './Hero.css';
import BigLightElement from '@/assets/graphic-elements/Rectangle 12.png';
import ProfilePic from '@/assets/images/profile-pic.png';
import Button from '@/components/common/button/Button';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import SingleChevron from '@/assets/graphic-elements/single-chevron.svg';

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative pb-20 md:flex gap-8 md:px-8 px-4 items-center justify-center mb-24 mt-24">
        <div className="relative flex justify-center md:mb-0 mb-8">
          <img src={BigLightElement} alt="" className="relative z-20" />
          <img src={ProfilePic} alt="" className="profile-pic" />
        </div>
        <div className="text-start sm:px-16 md:px-0">
          <h2 className="hero-title font-mono! italic">Hello !</h2>
          <p className="font-mono-alt! mb-6! max-w-120">
            Je suis un développeur web fullstack Typescript - NodeJS
          </p>
          <div className="flex items-center gap-4 relative z-20">
            <Button cta="Commencer" href="#vue-skills" />
            <Button cta="Contacter" href="#contact" />
          </div>
        </div>
        <img src={Chevrons} className="chevrons" />
        <img src={SingleChevron} className="chevron" />
      </div>
    </section>
  );
}
