import ContainerTemplate from '../common/ui/ContainerTemplate';
import { useOsDetection } from '@/hooks/useOsDetection';
import './ContactMe.css';
import { useRef, useState } from 'react';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import MailLogo from '@/assets/images/logos/mail.svg';
import LinkedinLogo from '@/assets/images/logos/linkedin-logo.svg';
import GithubLogo from '@/assets/images/logos/github-logo.svg';

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
    href: "mailto:'",
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: LinkedinLogo,
    href: "mailto:'",
  },
  {
    id: 3,
    label: 'Github',
    icon: GithubLogo,
    href: "mailto:'",
  },
];

export default function ContactMe() {
  const userOs = useOsDetection(window.navigator.userAgent.toLowerCase());
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const copy = async () => {
    const value = inputRef.current?.value;
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Impossible de copier :', err);
    }
  };

  const handleSetBashCommand = (os: string) => {
    if (os === 'Windows') {
      return 'start "mailto:email@exemple.com?subject=Contact"';
    } else if (os === 'MacOs') {
      return 'open "mailto:email@exemple.com?subject=Contact"';
    } else if (os === 'Linux') {
      return 'xdg-open "mailto:email@exemple.com?subject=Contact"';
    } else {
      return undefined;
    }
  };
  return (
    <section id="contact">
      <ContainerTemplate size="large">
        <div className="pb-20 relative">
          <div className="flex items-center w-full justify-between mb-10!">
            <h3 className="text-4xl! font-mono-alt! font-bold! tracking-wider!">
              On se parle ?
            </h3>
            <img src={Chevrons} className="max-w-24" />
          </div>
          {handleSetBashCommand(userOs ?? '') !== undefined ? (
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
          )}
          <div className="contact-links">
            {contactLinks.map((link) => (
              <div className="tag"></div>
            ))}
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
