class ProctorTimer {
    constructor(containerId) {
        this.containerId = containerId;
        this.duration = 50 * 60; // default 50 mins
        this.timeLeft = this.duration;
        this.interval = null;
        this.isRunning = false;

        // Audio Context lazy init
        this.audioCtx = null;

        this.render();
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        // Progress percentage for background fill or bar
        const pct = (this.timeLeft / this.duration) * 100;
        let color = '#10b981'; // Green
        if (pct < 20) color = '#ef4444'; // Red
        else if (pct < 50) color = '#f59e0b'; // Output

        container.innerHTML = `
            <div class="proctor-wrapper" style="text-align: center; max-width: 600px; margin: 0 auto;">
                 <h2 style="color: var(--navy-primary); margin-bottom: 2rem;">Exam Proctoring Tool</h2>
                 
                 <div class="timer-display" style="
                    font-size: 8rem; 
                    font-weight: 800; 
                    font-family: monospace; 
                    color: ${color};
                    background: #1e293b;
                    padding: 2rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    margin-bottom: 2rem;
                    position: relative;
                    overflow: hidden;
                 ">
                    <div style="position: relative; z-index: 2;" role="timer" aria-live="off" id="pt-display-text">${timeStr}</div>
                    <div class="timer-progress" style="
                        position: absolute; bottom: 0; left: 0; height: 6px; background: ${color}; width: ${pct}%; transition: width 1s linear, background 0.3s;
                    "></div>
                 </div>

                 <div class="controls-row" style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                    <button id="pt-start" class="neo-btn primary large" onclick="window.proctorTimer.start()" aria-label="Start Timer">
                        <i class="ph-bold ph-play"></i> Start
                    </button>
                    <button id="pt-stop" class="neo-btn danger large" onclick="window.proctorTimer.stop()" style="display: none;" aria-label="Stop Timer">
                        <i class="ph-bold ph-stop"></i> Stop
                    </button>
                    <button class="neo-btn outline" onclick="window.proctorTimer.reset()" aria-label="Reset Timer">
                        <i class="ph-bold ph-arrow-counter-clockwise"></i> Reset
                    </button>
                 </div>

                 <div class="presets-row" style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(50)">50m (Std)</button>
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(30)">30m</button>
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(15)">15m</button>
                    <button class="neo-btn small outline" onclick="window.proctorTimer.setDuration(5)">5m</button>
                 </div>
                 
                 <div style="margin-top: 2rem; font-size: 0.9rem; color: #64748b;">
                    <p><i class="ph-bold ph-speaker-high"></i> Audio cues at Start, 5 min warning, and End.</p>
                 </div>
            </div>
        `;
    }

    start() {
        if (this.isRunning) return;

        // Init Audio
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

        this.isRunning = true;
        this.playBeep('start');

        document.getElementById('pt-start').style.display = 'none';
        document.getElementById('pt-stop').style.display = 'inline-block';

        this.interval = setInterval(() => {
            this.timeLeft--;
            if (this.timeLeft === 300) {
                this.playBeep('warning');
                // Announce warning
                const disp = document.getElementById('pt-display-text');
                if (disp) disp.setAttribute('aria-live', 'assertive');
            }
            if (this.timeLeft <= 0) {
                this.finish();
            } else {
                this.updateDisplay();
            }
        }, 1000);
    }

    stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        clearInterval(this.interval);
        document.getElementById('pt-start').style.display = 'inline-block';
        document.getElementById('pt-stop').style.display = 'none';

        document.getElementById('pt-start').innerHTML = '<i class="ph-bold ph-play"></i> Resume';
    }

    reset() {
        this.stop();
        this.timeLeft = this.duration;
        this.updateDisplay();
        document.getElementById('pt-start').innerHTML = '<i class="ph-bold ph-play"></i> Start';
        const disp = document.getElementById('pt-display-text');
        if (disp) {
            disp.setAttribute('aria-live', 'off');
            disp.textContent = this.formatTime(this.duration);
        }
    }

    setDuration(mins) {
        this.stop();
        this.duration = mins * 60;
        this.timeLeft = this.duration;
        this.updateDisplay();
    }

    finish() {
        this.stop();
        this.timeLeft = 0;
        this.updateDisplay();
        this.playBeep('end');
        alert("TIME IS UP!");
    }

    formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    updateDisplay() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const timeStr = this.formatTime(this.timeLeft);

        const displayEl = document.getElementById('pt-display-text');
        if (displayEl) displayEl.textContent = timeStr;
        else {
            this.render(); // Fallback
            return;
        }

        const pct = (this.timeLeft / this.duration) * 100;
        let color = '#10b981';
        if (pct < 20) color = '#ef4444';
        else if (pct < 50) color = '#f59e0b';

        const wrapper = container.querySelector('.timer-display');
        if (wrapper) wrapper.style.color = color;

        const bar = container.querySelector('.timer-progress');
        if (bar) {
            bar.style.width = `${pct}%`;
            bar.style.background = color;
        }

        // Ensure buttons sync
        const startBtn = document.getElementById('pt-start');
        const stopBtn = document.getElementById('pt-stop');
        if (this.isRunning) {
            if (startBtn) startBtn.style.display = 'none';
            if (stopBtn) stopBtn.style.display = 'inline-block';
        } else {
            if (startBtn) startBtn.style.display = 'inline-block';
            if (stopBtn) stopBtn.style.display = 'none';
        }
    }

    playBeep(type) {
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        const now = this.audioCtx.currentTime;

        if (type === 'start') {
            osc.frequency.setValueAtTime(880, now); // A5
            gain.gain.setValueAtTime(0.1, now);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'warning') {
            osc.frequency.setValueAtTime(660, now);
            osc.start(now);
            osc.stop(now + 0.2);

            const osc2 = this.audioCtx.createOscillator();
            const gain2 = this.audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(this.audioCtx.destination);
            osc2.frequency.setValueAtTime(660, now + 0.3);
            osc2.start(now + 0.3);
            osc2.stop(now + 0.5);
        } else if (type === 'end') {
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.linearRampToValueAtTime(110, now + 1);
            gain.gain.setValueAtTime(0.5, now);
            gain.gain.linearRampToValueAtTime(0, now + 1);
            osc.start(now);
            osc.stop(now + 1);
        }
    }
}

window.ProctorTimer = ProctorTimer;
window.proctorTimer = null;
