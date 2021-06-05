const loadSound = sound => {
  return new Promise((resolve, reject) => {
    const loadSfx = new Audio(sound);
    loadSfx.preload = 'auto';
    loadSfx.volume = 0.2;
    
    loadSfx.addEventListener('canplaythrough', () => {
      resolve(loadSfx);
    }, false);

    loadSfx.onerror = err => reject(err);
  });
}

export default loadSound;