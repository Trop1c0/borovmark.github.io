document.getElementById("year").textContent = new Date().getFullYear();


// Анимация появления секций при скролле
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
}, { threshold: 0.2 });


document.querySelectorAll('.intro, .card').forEach(el => observer.observe(el));
