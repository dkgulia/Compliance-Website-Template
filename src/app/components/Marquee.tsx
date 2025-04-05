import React from 'react';
import LogoMarquee from '@/app/components/LogoMarquee';


const logos = [
  { src: "/images/boost-capital.png", alt: ''},
  { src: "/images/sanas-logo.png", alt: ''},
  { src: "/images/gyde-logo.png", alt: ''},
  { src: "/images/ccs-global-logo.png", alt: ''},
  { src: "/images/itpa-logo.png", alt: ''},
  { src: "/images/intain-logo.png", alt: ''},
  { src: "/images/indivillage-logo.png", alt: ''},
  { src: "/images/pazcare-logo.png", alt: ''},
  { src: "/images/finstackk-logo.png", alt: ''},
  { src: "/images/dartle-logo.png", alt: ''},
];

const Marquee: React.FC = () => {
  return (
    <section id="destination" className="mx-14">
      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          className="grayscale marquee-content flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          x-ref="logos"
        >
          <LogoMarquee logos={logos} />
        </ul>
        <ul
          className="grayscale marquee-content flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          x-ref="logos"
        >
          <LogoMarquee logos={logos} />
        </ul>
      </div>
    </section>
  );
};

export default Marquee;
