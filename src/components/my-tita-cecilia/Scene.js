import React from 'react';
import { useTransition, animated } from 'react-spring';

import { CDN_URL } from '../../utils/constants';

const Scene = ({ children, night, darken }) => {
  const [index, set] = React.useState(night || false);
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
            backgroundImage: `url(${CDN_URL}/2021/06/${i ? 'bg_night.jpg' : 'bg.jpg'})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundColor: 'black',
            backgroundRepeat: 'no-repeat',
            zIndex: '-1',
          }}
        >
          <div style={{ backgroundColor: darken ? 'rgba(0, 0, 0, 0.6)' : '' }}>
            { children }
          </div>
        </animated.div>
      )) }
    </div>
  );
}
export default Scene;