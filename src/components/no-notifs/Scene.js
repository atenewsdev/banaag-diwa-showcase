import React from 'react';
import { useTransition, animated } from 'react-spring';

import { CDN_URL } from '../../utils/constants';

const Scene = ({ section }) => {
  const [index, set] = React.useState(section);
  const transitions = useTransition(index, {
    key: `scene-${index}`,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  React.useEffect(() => {
    set(section);
  }, [section]);

  return (
    <div>
      { transitions((style, i) => {
        if (i === 0) {
          return (
            <animated.div
              style={{
                ...style,
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundColor: 'black',
                backgroundRepeat: 'no-repeat',
                zIndex: '-1',
              }}
            />
          );
        }
        return (
          <animated.div
            style={{
              ...style,
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              backgroundImage: `url(${CDN_URL}/2021/06/scene${i > 9 ? i : `0${i}`}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundColor: 'black',
              backgroundRepeat: 'no-repeat',
              zIndex: '-1',
            }}
          />
        );
      }) }
    </div>
  );
}
export default Scene;