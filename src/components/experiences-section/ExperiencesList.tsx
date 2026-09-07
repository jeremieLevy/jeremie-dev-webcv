import { useCallback, useEffect, useRef, useState } from 'react';
import ContainerTemplate from '../common/ui/ContainerTemplate';
import './ExperiencesList.css';
import SmallRectangle from '@/assets/graphic-elements/Rectangle 18.png';

type Experience = {
  id: number;
  year: string;
  title: string;
  description: string;
  company: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    year: '2024 .. 26',
    title: 'Développeur Frontend',
    description: '',
    company: 'Frenchfounders (Plateforme SaaS - 30k membres)',
  },
  {
    id: 2,
    year: '2024',
    title: 'Formation',
    description: "Concepteur développeur d'application",
    company: 'Simplon',
  },
  {
    id: 3,
    year: '2021 .. 23',
    title: 'Graphiste 3D archviz',
    description: '',
    company: 'Views 3D',
  },
  {
    id: 4,
    year: '2018 .. 26',
    title: 'Graphiste / Motion designer 3D',
    description: '',
    company: 'Freelance',
  },
];

export default function ExperiencesList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScrollItem = useCallback((index: number) => {
    const container = scrollRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const targetScrollTop =
      container.scrollTop + (itemRect.top - containerRect.top) - 50;

    container.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth',
    });

    setActiveIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;

    let closestIndex = 0;
    let closestDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemRect = item.getBoundingClientRect();
      const distance = Math.abs(itemRect.top - containerTop);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section id="experiences">
      <ContainerTemplate size="mid">
        <div className="py-20">
          <div className="experiences-container">
            <div ref={scrollRef} className="experience-list">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="experience-item"
                >
                  <div className="font-mono italic lg:text-5xl text-4xl font-bold">
                    {experience.year}
                  </div>
                  <img src={SmallRectangle} className="w-6 h-6 mx-auto my-8" />
                  <p className="font-mono! lg:text-xl! text-lg!">
                    {experience.title}
                  </p>
                  <p className="font-mono! lg:text-lg! text-sm!">
                    {experience.description}
                  </p>
                  <p className="font-mono! font-bold! lg:text-lg! text-base!">
                    {experience.company}
                  </p>
                </div>
              ))}
            </div>
            <div className="experience-pagination">
              {experiences.map((experience, index) => (
                <div
                  onClick={() => handleScrollItem(index)}
                  key={experience.id}
                  className={
                    index === activeIndex ? 'bullet--accent' : 'bullet'
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
