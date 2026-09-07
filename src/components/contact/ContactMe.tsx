import ContainerTemplate from '../common/ui/ContainerTemplate';
// import { useOsDetection } from '@/hooks/useOsDetection';
import './ContactMe.css';
// import { useRef, useState } from 'react';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import MailLogo from '@/assets/images/logos/mail.svg';
import LinkedinLogo from '@/assets/images/logos/linkedin-logo.svg';
import GithubLogo from '@/assets/images/logos/github-logo.svg';
import Rectangle from '@/assets/graphic-elements/Rectangle 17.png';

type ContactLink = {
  id: number;
  label: string;
  icon: string;
  href: string;
};

const contactLinks: ContactLink[] = [
  {
    id: 1,
    label: 'Mail',
    icon: MailLogo,
    href: 'mailto:jeremylevy.131290@gmail.com',
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: LinkedinLogo,
    href: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-levy/',
  },
  {
    id: 3,
    label: 'Github',
    icon: GithubLogo,
    href: 'https://github.com/jeremieLevy',
  },
];

export default function ContactMe() {
  // const userOs = useOsDetection(window.navigator.userAgent.toLowerCase());
  // const [copied, setCopied] = useState<boolean>(false);
  // const inputRef = useRef<HTMLInputElement>(null);

  // const copy = async () => {
  //   const value = inputRef.current?.value;
  //   if (!value) return;

  //   try {
  //     await navigator.clipboard.writeText(value);
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000);
  //   } catch (err) {
  //     console.error('Impossible de copier :', err);
  //   }
  // };

  // const handleSetBashCommand = (os: string) => {
  //   if (os === 'Windows') {
  //     return 'start "mailto:email@exemple.com?subject=Contact"';
  //   } else if (os === 'MacOS') {
  //     return 'open "mailto:email@exemple.com?subject=Contact"';
  //   } else if (os === 'Linux') {
  //     return 'xdg-open "mailto:email@exemple.com?subject=Contact"';
  //   } else {
  //     return undefined;
  //   }
  // };
  return (
    <section id="contact">
      <ContainerTemplate size="large">
        <div className="py-48 relative">
          <div className="flex items-center w-full justify-between">
            <h3 className="lg:text-4xl! text-2xl! font-mono-alt! font-bold! tracking-wider!">
              On se parle ?
            </h3>
            <img src={Chevrons} className="lg:max-w-24 max-w-18" />
          </div>
          {/* handleSetBashCommand(userOs ?? '') !== undefined ? (
            <div className="bash-contact-cmd" onClick={copy}>
              <input
                id="bash-contact-input"
                type="text"
                ref={inputRef}
                value={userOs ? handleSetBashCommand(userOs) : ''}
                readOnly
              />
              <div className="flex items-center gap-4">
                {copied ? (
                  <p className="text-light tracking-wider font-mono! italic!">
                    Copié
                  </p>
                ) : (
                  ''
                )}
                <button onClick={copy}>
                  <span className="material-symbols-rounded dropdown-icon text-extralight! hover:text-light!">
                    content_copy
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div />
          )*/}
          <div className="contact-links">
            {contactLinks.map((link) => (
              <div className="tag">
                <a href={link.href} target="_blank">
                  <div className="font-mono-alt w-full font-bold flex justify-center">
                    <div className="relative w-fit">
                      <div className="w-fit min-w-36 transition-all duration-300 ease-out">
                        {link.label}
                      </div>
                      <img
                        src={link.icon}
                        alt={`${link.label}-icon`}
                        className="max-w-6 absolute top-0 -left-12"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}

            <img
              src={Rectangle}
              className="absolute scale-x-[-1] left-0 top-12 hidden lg:block"
            />
            <div className="w-3 rounded-full h-3 bg-light left-20 -bottom-1 absolute hidden lg:block" />
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
