const labels = document.querySelectorAll('.form-control label');
const getStarted = document.getElementById('login');
const courseCard = document.querySelectorAll('.course-card');
const courseCardMore = document.querySelectorAll('.more');
const header = document.querySelector('.header-bottom');
const closeMenuBtn = document.querySelector('.close-menu');
const menuBtn = document.querySelector('.open-menu');
const sideMenu = document.querySelector('.navbar');
const navbar = document.getElementById('navbar')

    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'flex';
        navbar.style.display = 'none'
    })
    
    closeMenuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
        navbar.style.display = 'flex'
    })




labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})



getStarted.addEventListener('click', () => {
    window.location = 'login.html'
    
})

for(let i = 0; i < courseCard.length; i++){
    courseCard[i].addEventListener('mouseover', () => {
        courseCardMore[i].style.display = 'block';
    });
    courseCard[i].addEventListener('mouseout', () => {
        courseCardMore[i].style.display = 'none';
    })
}

courseCard.forEach(card => {
    card.addEventListener('click', () => {
        window.location = 'courses.html'
    })
})

