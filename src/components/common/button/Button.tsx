import clsx from 'clsx';
import './Button.css';

type Props = {
  cta?: string;
  theme?: 'base' | 'outline' | 'discret' | 'liquid';
  href?: string;
  target?: '_blank';
};

export default function Button({ cta, theme, href, target }: Props) {
  return (
    <div
      className={clsx('base-button', { 'outline-button': theme === 'outline' })}
    >
      {href ? (
        <a href={href} target={target}>
          {' '}
          {cta}
        </a>
      ) : (
        <div>{cta}</div>
      )}
    </div>
  );
}
