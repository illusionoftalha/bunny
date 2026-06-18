class UISoundSystem {
  constructor() {
    this.audioCtx = null;
    this.analyser = null;
    this.mediaSource = null;
    this.initialized = false;
  }

  init() {
    if (!this.initialized) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.initialized = true;
    }
  }

  connectMediaElement(audioElement) {
    if (!this.initialized || !this.audioCtx) this.init();
    
    if (!this.mediaSource) {
      try {
        this.mediaSource = this.audioCtx.createMediaElementSource(audioElement);
        this.mediaSource.connect(this.analyser);
        this.analyser.connect(this.audioCtx.destination);
      } catch (e) {
        // MediaElementSource already created
      }
    }
  }

  getFrequencyData() {
    if (!this.analyser || !this.dataArray) return null;
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.dataArray;
  }

  // A soft, delicate glassy "tink" for hovering over images
  playHoverTick() {
    if (!this.initialized || !this.audioCtx) return;
    
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    
    osc.type = 'sine';
    // High frequency for a glassy sound
    osc.frequency.setValueAtTime(1200, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2000, this.audioCtx.currentTime + 0.1);
    
    // Very short, sharp envelope
    gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, this.audioCtx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.1);
  }

  // A cinematic deep "whoosh/swell" for opening the envelope
  playCinematicWhoosh() {
    if (!this.initialized || !this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    osc.type = 'triangle';
    // Sub-bass frequency swell
    osc.frequency.setValueAtTime(40, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, this.audioCtx.currentTime + 1.5);
    osc.frequency.exponentialRampToValueAtTime(20, this.audioCtx.currentTime + 3);

    // Filter sweep
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(100, this.audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1000, this.audioCtx.currentTime + 1.5);
    filter.frequency.exponentialRampToValueAtTime(100, this.audioCtx.currentTime + 3);

    // Volume swell (fade in and out)
    gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, this.audioCtx.currentTime + 1.5);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 3);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 3);
  }
}

export const uiSounds = new UISoundSystem();
