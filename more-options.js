const optionsBtn = document.getElementById('optionsBtn');
const bottomCard = document.getElementById('bottomCard');
const overlay = document.getElementById('overlay');

let startY = 0;
let currentY = 0;
let isDragging = false;

optionsBtn.addEventListener('click', () => {
  if (window.innerWidth > 1059) return;
  
  bottomCard.classList.add('open');
  overlay.style.display = 'block';
  bottomCard.style.bottom = '0';
});

const closeCard = () => {
  bottomCard.classList.remove('open');
  overlay.style.display = 'none';
  bottomCard.style.bottom = '-100%';
};

overlay.addEventListener('click', closeCard);

const onTouchStart = (e) => {
  if (window.innerWidth > 1059) return;
  
  startY = e.touches ? e.touches[0].clientY : e.clientY;
  isDragging = true;
  bottomCard.style.transition = 'none';
};

const onTouchMove = (e) => {
  if (!isDragging || window.innerWidth > 1059) return;
  
  currentY = e.touches ? e.touches[0].clientY : e.clientY;
  let diff = currentY - startY;
  if (diff > 0) {
    bottomCard.style.bottom = `-${diff}px`;
  }
};

const onTouchEnd = () => {
  if (!isDragging || window.innerWidth > 1059) return;
  
  isDragging = false;
  bottomCard.style.transition = 'bottom 0.3s ease';
  const diff = currentY - startY;
  if (diff > 100) {
    closeCard();
  } else {
    bottomCard.style.bottom = '0';
  }
};

bottomCard.addEventListener('touchstart', onTouchStart);
bottomCard.addEventListener('touchmove', onTouchMove);
bottomCard.addEventListener('touchend', onTouchEnd);