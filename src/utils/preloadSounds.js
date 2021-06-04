const loadSound = sound => {
  return new Promise((resolve, reject) => {
    const loadSfx = new Audio(sound);
    loadSfx.preload = 'auto';
    
    loadSfx.addEventListener('canplaythrough', () => {
      resolve(sound);
    }, false);

    loadSfx.onerror = err => reject(err);
  });
}

export default loadSound;