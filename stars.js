const starsWrapper = document.getElementById('starsWrapper');
const starsFill = document.getElementById('starsFill');
const ratingValue = document.getElementById('ratingValue');
const votesCount = document.getElementById('votesCount');
const addVote = document.getElementById('addVote');

const maxStars = 5;
const starWidth = 16;
let currentRating = 0;
let totalVotes = 0;
let totalScore = 0;

function updateStars(rating) {
    starsFill.style.width = `${(rating / maxStars) * 100}%`;
    ratingValue.textContent = rating.toFixed(1);
}

starsWrapper.addEventListener('mousemove', e => {
    const rect = starsWrapper.getBoundingClientRect();
    let relativeX = e.clientX - rect.left;
    let rating = (relativeX / rect.width) * maxStars;
    rating = Math.min(maxStars, Math.max(0, rating));
    rating = Math.round(rating * 2) / 2;
    updateStars(rating);
});

starsWrapper.addEventListener('mouseleave', () => {
    updateStars(currentRating);
});

starsWrapper.addEventListener('click', e => {
    const rect = starsWrapper.getBoundingClientRect();
    let relativeX = e.clientX - rect.left;
    let rating = (relativeX / rect.width) * maxStars;
    rating = Math.min(maxStars, Math.max(0, rating));
    rating = Math.round(rating * 2) / 2;

    currentRating = rating;
});

addVote.addEventListener('click', e => {
    e.preventDefault();
    if(currentRating === 0) return;

    totalVotes++;
    totalScore += currentRating;
    let average = totalScore / totalVotes;

    ratingValue.textContent = average.toFixed(1);
    votesCount.textContent = totalVotes;

    currentRating = 0;
    updateStars(0);
});
