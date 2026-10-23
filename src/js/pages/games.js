// VidyaSetu Educational Mini-Games
// Interactive learning games: Number Bridge, Eco-Sorter, Multilingual Memory Match, and Quick Math

import { i18n } from '../i18n/i18n.js';
import { audioService } from '../services/audio.service.js';
import { authService } from '../services/auth.service.js';
import { toast } from '../components/toast.js';

export function renderGamesPage() {
  return `
    <div class="games-page container" style="padding-top: var(--spacing-8); padding-bottom: var(--spacing-16);">
      <!-- Header -->
      <div class="text-center" style="max-width: 680px; margin: 0 auto var(--spacing-10) auto;">
        <span class="badge badge-accent" style="margin-bottom: 8px;">Fun & Activity-Based</span>
        <h2>${i18n.t('games_title')}</h2>
        <p style="font-size: var(--font-size-base); color: var(--color-text-muted);">
          ${i18n.t('games_subtitle')}
        </p>
      </div>

      <!-- Game Selection Tabs -->
      <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: var(--spacing-8); flex-wrap: wrap;">
        <button class="btn btn-secondary active-game-tab" id="tab-game-number" data-game="number">
          🔢 1. Number Bridge
        </button>
        <button class="btn btn-outline" id="tab-game-eco" data-game="eco">
          🌱 2. Eco-Sorter
        </button>
        <button class="btn btn-outline" id="tab-game-memory" data-game="memory">
          🃏 3. Memory Match
        </button>
        <button class="btn btn-outline" id="tab-game-math" data-game="math">
          ⚡ 4. Speed Math
        </button>
      </div>

      <!-- Active Game Container -->
      <div class="card" id="active-game-viewport" style="max-width: 780px; margin: 0 auto; min-height: 440px; padding: var(--spacing-8); border: 2px solid #C7E3D6; box-shadow: var(--shadow-lg);">
        <!-- Injected dynamically -->
      </div>
    </div>
  `;
}

export function setupGamesEvents() {
  const container = document.getElementById('active-game-viewport');
  let currentGame = 'number';

  // Tab switching
  const tabs = document.querySelectorAll('[data-game]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('btn-secondary');
        t.classList.add('btn-outline');
      });
      tab.classList.remove('btn-outline');
      tab.classList.add('btn-secondary');

      currentGame = tab.getAttribute('data-game');
      loadGame(currentGame);
    });
  });

  function loadGame(gameKey) {
    if (gameKey === 'number') initNumberBridge(container);
    else if (gameKey === 'eco') initEcoSorter(container);
    else if (gameKey === 'memory') initMemoryMatch(container);
    else if (gameKey === 'math') initSpeedMath(container);
  }

  // Load first game initially
  loadGame('number');
}

// ==========================================
// GAME 1: NUMBER BRIDGE
// ==========================================
function initNumberBridge(container) {
  let score = 0;
  let round = 1;
  const maxRounds = 3;

  const puzzles = [
    { sequence: [3, 6, null, 12, 15], missing: 9, options: [7, 8, 9, 10], hint: 'Counting in threes (Multiples of 3)' },
    { sequence: [10, 20, 30, null, 50], missing: 40, options: [35, 40, 45, 60], hint: 'Adding ten each step' },
    { sequence: [2, 4, 8, null, 32], missing: 16, options: [12, 14, 16, 18], hint: 'Doubling the number each step' }
  ];

  function renderRound() {
    if (round > maxRounds) {
      renderGameComplete(container, 'Number Bridge Master', score, 3, () => initNumberBridge(container));
      return;
    }

    const currentPuzzle = puzzles[round - 1];

    container.innerHTML = `
      <div style="text-align: center;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="badge badge-primary">Round ${round} of ${maxRounds}</span>
          <span class="badge badge-accent">⭐ Score: ${score}</span>
        </div>

        <h3 style="margin-bottom: 6px;">The River Stepping Stones</h3>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: 24px;">
          Find the missing stone so the calf can cross the village river safely!
        </p>

        <!-- Stepping Stones Visual -->
        <div style="background: linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%); padding: 32px 16px; border-radius: var(--radius-lg); margin-bottom: 28px; display: flex; justify-content: center; align-items: center; gap: 12px; flex-wrap: wrap;">
          <span style="font-size: 32px; margin-right: 8px;">🐄</span>
          ${currentPuzzle.sequence.map(num => `
            <div style="width: 60px; height: 60px; border-radius: 50%; background: ${num === null ? '#FEF08A' : '#FFFFFF'}; border: 3px solid ${num === null ? '#D97706' : '#0284C7'}; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 20px; color: #0369A1; box-shadow: var(--shadow-sm);">
              ${num === null ? '?' : num}
            </div>
          `).join('')}
          <span style="font-size: 32px; margin-left: 8px;">🏡</span>
        </div>

        <p style="font-size: var(--font-size-sm); font-weight: 600; margin-bottom: 12px;">Which stone fits the pattern?</p>

        <!-- Options -->
        <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
          ${currentPuzzle.options.map(opt => `
            <button class="btn btn-outline stone-opt-btn" data-val="${opt}" style="min-width: 70px; font-size: 18px; font-weight: bold;">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="game-feedback-area" style="margin-top: 20px; min-height: 48px;"></div>
      </div>
    `;

    document.querySelectorAll('.stone-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = Number(btn.getAttribute('data-val'));
        const fbArea = document.getElementById('game-feedback-area');

        if (val === currentPuzzle.missing) {
          audioService.playBeep(true);
          score += 10;
          btn.classList.remove('btn-outline');
          btn.classList.add('btn-primary');
          fbArea.innerHTML = `<span style="color: #15803D; font-weight: bold;">✓ Correct! The calf stepped across!</span>`;

          setTimeout(() => {
            round++;
            renderRound();
          }, 900);
        } else {
          audioService.playBeep(false);
          btn.classList.add('btn-outline');
          fbArea.innerHTML = `<span style="color: #DC2626;">💡 Hint: ${currentPuzzle.hint}. Try another number!</span>`;
        }
      });
    });
  }

  renderRound();
}

// ==========================================
// GAME 2: ECO-SORTER (Environmental Studies)
// ==========================================
function initEcoSorter(container) {
  let score = 0;
  let currentIndex = 0;

  const items = [
    { name: 'Banana Peel', icon: '🍌', bin: 'wet', tip: 'Organic wet waste turns into natural rich farm manure!' },
    { name: 'Empty Plastic Bottle', icon: '🧴', bin: 'dry', tip: 'Plastic must be cleaned and sent for recycling.' },
    { name: 'Dry Neem Leaves', icon: '🍂', bin: 'wet', tip: 'Dry leaves compost beautifully under tree roots.' },
    { name: 'Discarded Tin Can', icon: '🥫', bin: 'dry', tip: 'Metals should be recycled rather than buried in soil.' }
  ];

  function renderItem() {
    if (currentIndex >= items.length) {
      renderGameComplete(container, 'Eco-Sprout Guardian', score, 3, () => initEcoSorter(container));
      return;
    }

    const item = items[currentIndex];

    container.innerHTML = `
      <div style="text-align: center;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="badge badge-success">Item ${currentIndex + 1} of ${items.length}</span>
          <span class="badge badge-accent">⭐ Score: ${score}</span>
        </div>

        <h3 style="margin-bottom: 6px;">Clean Village Waste Sorter</h3>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: 24px;">
          Sort the item into the correct village bin to protect soil and drinking water!
        </p>

        <!-- Current Falling / Presented Item -->
        <div style="width: 130px; height: 130px; border-radius: var(--radius-xl); background: #FEF3C7; border: 3px dashed #F59E0B; margin: 0 auto 28px auto; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: var(--shadow-md);">
          <span style="font-size: 48px;">${item.icon}</span>
          <strong style="font-size: 14px; margin-top: 4px;">${item.name}</strong>
        </div>

        <!-- Two Bins: Green (Wet/Compost) and Blue (Dry/Recycle) -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 440px; margin: 0 auto;">
          <button class="btn btn-secondary btn-sort-bin" data-bin="wet" style="background: #DCFCE7; border-color: #22C55E; color: #15803D; padding: 20px 10px; display: flex; flex-direction: column; height: auto;">
            <span style="font-size: 32px; margin-bottom: 4px;">🥬</span>
            <strong style="font-size: 16px;">Green Bin</strong>
            <small style="font-size: 11px;">Wet / Compost</small>
          </button>

          <button class="btn btn-secondary btn-sort-bin" data-bin="dry" style="background: #E0F2FE; border-color: #38BDF8; color: #0369A1; padding: 20px 10px; display: flex; flex-direction: column; height: auto;">
            <span style="font-size: 32px; margin-bottom: 4px;">📦</span>
            <strong style="font-size: 16px;">Blue Bin</strong>
            <small style="font-size: 11px;">Dry / Recyclables</small>
          </button>
        </div>

        <div id="eco-feedback-area" style="margin-top: 20px; min-height: 48px;"></div>
      </div>
    `;

    document.querySelectorAll('.btn-sort-bin').forEach(btn => {
      btn.addEventListener('click', () => {
        const binChoice = btn.getAttribute('data-bin');
        const fbArea = document.getElementById('eco-feedback-area');

        if (binChoice === item.bin) {
          audioService.playBeep(true);
          score += 10;
          fbArea.innerHTML = `<span style="color: #15803D; font-weight: bold;">✓ Excellent! ${item.tip}</span>`;

          setTimeout(() => {
            currentIndex++;
            renderItem();
          }, 1100);
        } else {
          audioService.playBeep(false);
          fbArea.innerHTML = `<span style="color: #D97706;">💡 Try again: Is this item organic or manufactured?</span>`;
        }
      });
    });
  }

  renderItem();
}

// ==========================================
// GAME 3: MULTILINGUAL MEMORY MATCH
// ==========================================
function initMemoryMatch(container) {
  let matchedPairs = 0;
  let flipped = [];
  const cards = [
    { id: '1', key: 'tree', label: 'Tree / ಮರ / पेड़', icon: '🌳' },
    { id: '2', key: 'tree', label: 'Tree / ಮರ / पेड़', icon: '🌳' },
    { id: '3', key: 'water', label: 'Water / ನೀರು / जल', icon: '💧' },
    { id: '4', key: 'water', label: 'Water / ನೀರು / जल', icon: '💧' },
    { id: '5', key: 'book', label: 'Book / ಪುಸ್ತಕ / पुस्तक', icon: '📖' },
    { id: '6', key: 'book', label: 'Book / ಪುಸ್ತಕ / पुस्तक', icon: '📖' },
    { id: '7', key: 'cow', label: 'Cow / ಹಸು / गाय', icon: '🐄' },
    { id: '8', key: 'cow', label: 'Cow / ಹಸು / गाय', icon: '🐄' }
  ].sort(() => 0.5 - Math.random());

  container.innerHTML = `
    <div style="text-align: center;">
      <h3 style="margin-bottom: 6px;">Village Memory Card Match</h3>
      <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin-bottom: 24px;">
        Flip two cards to match village words and symbols!
      </p>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; max-width: 480px; margin: 0 auto 20px auto;" id="memory-grid">
        ${cards.map((c, i) => `
          <button class="card memory-card-btn" data-index="${i}" data-key="${c.key}" style="height: 90px; font-size: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease;">
            ❓
          </button>
        `).join('')}
      </div>

      <div id="memory-msg" style="font-size: var(--font-size-sm); font-weight: 600; min-height: 24px;"></div>
    </div>
  `;

  const btnEls = document.querySelectorAll('.memory-card-btn');
  btnEls.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-index'));
      if (flipped.some(f => f.index === idx) || btn.classList.contains('matched')) return;

      btn.textContent = cards[idx].icon;
      btn.classList.add('selected');
      flipped.push({ index: idx, key: cards[idx].key, btn });

      if (flipped.length === 2) {
        if (flipped[0].key === flipped[1].key) {
          audioService.playBeep(true);
          flipped[0].btn.classList.add('matched', 'correct');
          flipped[1].btn.classList.add('matched', 'correct');
          matchedPairs++;
          flipped = [];

          if (matchedPairs === 4) {
            setTimeout(() => {
              renderGameComplete(container, 'Memory Match Champion', 40, 3, () => initMemoryMatch(container));
            }, 600);
          }
        } else {
          audioService.playBeep(false);
          setTimeout(() => {
            flipped.forEach(f => {
              f.btn.textContent = '❓';
              f.btn.classList.remove('selected');
            });
            flipped = [];
          }, 800);
        }
      }
    });
  });
}

// ==========================================
// GAME 4: SPEED MENTAL MATH
// ==========================================
function initSpeedMath(container) {
  let score = 0;
  let qNum = 1;
  const total = 4;

  const questions = [
    { q: '14 + 18 = ?', ans: 32, options: [30, 32, 34] },
    { q: '6 × 7 = ?', ans: 42, options: [36, 42, 48] },
    { q: '50 − 17 = ?', ans: 33, options: [33, 37, 43] },
    { q: '9 × 8 = ?', ans: 72, options: [64, 72, 81] }
  ];

  function renderQ() {
    if (qNum > total) {
      renderGameComplete(container, 'Speed Math Wizard', score, 3, () => initSpeedMath(container));
      return;
    }

    const current = questions[qNum - 1];

    container.innerHTML = `
      <div style="text-align: center;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span class="badge badge-accent">Math Challenge ${qNum} of ${total}</span>
          <span class="badge badge-primary">Score: ${score}</span>
        </div>

        <h3 style="margin-bottom: 24px;">Quick Mental Arithmetic</h3>

        <div style="font-size: 44px; font-weight: var(--font-weight-heavy); color: var(--color-primary); margin-bottom: 32px;">
          ${current.q}
        </div>

        <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
          ${current.options.map(opt => `
            <button class="btn btn-outline math-choice-btn" data-val="${opt}" style="min-width: 90px; font-size: 22px; font-weight: bold; padding: 14px 20px;">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="math-feedback" style="margin-top: 24px; min-height: 32px;"></div>
      </div>
    `;

    document.querySelectorAll('.math-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = Number(btn.getAttribute('data-val'));
        if (val === current.ans) {
          audioService.playBeep(true);
          score += 10;
          btn.classList.add('btn-primary');
          setTimeout(() => {
            qNum++;
            renderQ();
          }, 600);
        } else {
          audioService.playBeep(false);
          document.getElementById('math-feedback').innerHTML = `<span style="color:#DC2626;">Try recalculating!</span>`;
        }
      });
    });
  }

  renderQ();
}

function renderGameComplete(container, gameTitle, finalScore, stars, restartFn) {
  authService.addStars(stars);

  container.innerHTML = `
    <div style="text-align: center; padding: 20px 0; animation: scaleUp 0.3s ease;">
      <div style="font-size: 60px; margin-bottom: 12px;">🏆</div>
      <h2>Awesome Job!</h2>
      <p style="color: var(--color-text-muted); font-size: var(--font-size-base); margin-bottom: 20px;">
        You completed <strong>${gameTitle}</strong> with a score of ${finalScore}!
      </p>

      <div style="display: inline-block; background: #FEF3C7; border: 2px solid #FCD34D; border-radius: var(--radius-lg); padding: 14px 28px; margin-bottom: 24px;">
        <span style="font-size: 28px;">⭐⭐⭐</span>
        <div style="font-size: var(--font-size-xs); color: #92400E; font-weight: bold; margin-top: 4px;">
          +${stars} Bonus Stars Added to Profile!
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
        <button class="btn btn-primary" id="btn-restart-game">
          🔄 Play Again
        </button>
        <a href="#/student" class="btn btn-secondary">
          👦 Go to Student Dashboard
        </a>
      </div>
    </div>
  `;

  document.getElementById('btn-restart-game')?.addEventListener('click', restartFn);
}
