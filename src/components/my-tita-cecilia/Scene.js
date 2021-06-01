import React from 'react';
import { useTransition, animated } from 'react-spring';

const Scene = ({ children, night }) => {
  const [index, set] = React.useState(night);
  const transitions = useTransition(index, {
    key: `scene-${index ? 'night' : 'day'}`,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  React.useEffect(() => {
    set(night);
  }, [night]);

  return (
    <div>
      { transitions((style, i) => (
        <animated.div
          style={{
            ...style,
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(/assets/my-tita-cecilia/${i ? 'bg_night.png' : 'bg.png'})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundColor: 'black',
            backgroundRepeat: 'no-repeat',
            zIndex: '-1',
          }}
        >
          { children }
        </animated.div>
      )) }
    </div>
  );
}
export default Scene;