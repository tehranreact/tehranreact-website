import React, { useEffect } from 'react';
import { TimelineMax, TimelineLite } from 'gsap/all';

import { Icon } from '../../../components';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

const Header = () => {
  useEffect(() => {
    const [glitch1, glitch2] = document.querySelectorAll('.Header__titleGlitchWrapper');
    const timeline = new TimelineMax({ repeat: -1, repeatDelay: 0.05 });
    const timeline2 = new TimelineMax({ repeat: -1, repeatDelay: 0.1 });
    timeline
      .to(glitch1, 0.18, { height: '20%', y: -3 })
      .to(glitch1, 0.18, { height: '0%', y: -5 })
      .to(glitch1, 0.18, { height: '10%', y: 2 })
      .to(glitch1, 0.25, { height: '60%', y: 1})
      .to(glitch1, 0.18, { height: '20%', y: -3 })
      .to(glitch1, 0.18, { height: '0%', y: -5 })
      .to(glitch1, 0.18, { height: '10%', y: 2 })
      .to(glitch1, 0.25, { height: '60%', y: 1 });

    timeline2
      .to(glitch2, 0.06, { height: '20%', y: 3 })
      .to(glitch2, 0.1, { height: '0%', y: 5 })
      .to(glitch2, 0.3, { height: '10%', y: -2 })
      .to(glitch2, 0.12, { height: '30%', y: -1 })
      .to(glitch2, 0.06, { height: '20%', y: 3 })
      .to(glitch2, 0.1, { height: '0%', y: 5 })
      .to(glitch2, 0.3, { height: '10%', y: -2 })
      .to(glitch2, 0.12, { height: '30%', y: -1 });

      const toggleElementsOpacity = value => {
        glitch1.style.opacity = value;
        glitch2.style.opacity = value;
      }

      setInterval(() => {
        timeline.pause();
        timeline2.pause();
        toggleElementsOpacity('0')
        setTimeout(() => {
          toggleElementsOpacity('1')
          timeline.resume();
          timeline2.resume();
        }, 700);
      }, 2500);
  }, []);

  useEffect(() => {
    const buttons = [...document.querySelectorAll('.Header__action')];
    buttons.forEach(button => {
      const turb = document.querySelectorAll('#filter-shake feTurbulence')[0];
      const turbValue = { val: 0.000001 };
      const buttonTimeline = new TimelineLite({
        paused: true,
        onUpdate() {
          turb.setAttribute('baseFrequency', '0.00001 ' + turbValue.val); // Firefox has a bug with 0
        },
        onStart() {
          button.style.filter = 'url(#filter-shake)';
        },
        onComplete() {
          button.style.filter = 'none';
        },
      });
      const restartAnimation = () => {
        buttonTimeline.restart();
      }
      buttonTimeline.to(turbValue, 0.2, { val: 0.06 });
      buttonTimeline.to(turbValue, 0.2, { val: 0.000001 });
      button.addEventListener('mouseenter', restartAnimation);
    });
  }, []);
  return (
    <header className="Header">
      <div className="Header__titleContainer">
        <div className="Header__animationWrapper">
          <h1 className="Header__title">
            Tehran <span className="Header__titleText -light">React</span>
          </h1>
          <div className="Header__titleGlitchWrapper">
            <span className="Header__title -clone">
              Tehran <span className="Header__titleText -light">React</span>
            </span>
          </div>
          <div className="Header__titleGlitchWrapper">
            <span className="Header__title -clone">
              Tehran <span className="Header__titleText -light">React</span>
            </span>
          </div>
        </div>
        <p className="Header__description">
          The biggest Iranian React and React Native community
        </p>
      </div>

      <div className="Header__actionsContainer">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="Header__svgFilter">
          <defs>
            <filter id="filter-shake">
              <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" result="warp" />
              <feOffset dx="-90" dy="-90" result="warpOffset" />
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
            </filter>
          </defs>
        </svg>
        <a rel="noopener noreferrer" target="_blank" href="https://telegram.me/joinchat/D8jLp0D27irx4rjq2j88xw" className="Header__action">
          <Icon size="3.2rem" name="telegram" />
          <span className="Header__actionText">Telegram Group</span>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/tehranreact" className="Header__action -secondary">
          <Icon huge name="github" />
          <span className="Header__actionText">Github</span>
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/tehranreact" className="Header__action -secondary">
          <Icon huge name="twitter" />
          <span className="Header__actionText">Twitter</span>
        </a>
      </div>
      <Logo className="Header__logo"/>
    </header>
  );
};

export default Header;
