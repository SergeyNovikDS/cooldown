// Set the date we're counting down to
const meetingDate = new Date('2024-09-15:03:30'); // Replace with the actual date and time

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = meetingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    } else {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerText = "The time has come!";
    }
}, 1000);

// Heart burst effect with sound
document.addEventListener('click', function(event) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${event.clientX - 25}px`;
    heart.style.top = `${event.clientY - 25}px`;
    document.body.appendChild(heart);

    // Play burst sound
    const burstSound = new Audio('/home/sergey/projects/python/surprise/bubble-sound-43207.mp3');
    burstSound.play();

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});