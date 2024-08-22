
document.addEventListener('DOMContentLoaded', function() {
    const progressCircle = document.getElementById('progressCircle');
    const progressText = progressCircle.querySelector('.progress-text');
    const goal = 40; 

    progressText.textContent = `${goal}%`;
    progressCircle.style.background = `conic-gradient(#026A47 0% ${goal}%, #2C2B2B ${goal}% 100%)`;
});
