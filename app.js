

//observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve if you only want to animate once
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

document.querySelectorAll('.explanation-ani').forEach(el=>{
    observer.observe(el)
})
document.querySelectorAll('.main-exam-cont p').forEach(el=>{
    observer.observe(el)
})
document.querySelectorAll('.main-exam-cont h1').forEach(el=>{
    observer.observe(el)
})

const toggler = document.querySelector('.side__toggle')
const side__link = document.querySelectorAll('.side__nav__link')
const side__nav = document.querySelector('.side__nav')
const toggle_anotate = document.querySelector('.toggle_anotate')
const side_tag = document.querySelector('.side-nav-tog')
const side_cont = document.querySelector('.side__nav_cont')
const highlight = document.querySelector('.highlight')

toggler.addEventListener('click', function(){
    event.preventDefault();
    side__link.forEach(link =>{
        link.classList.toggle('active')
    })
    side__nav.classList.toggle('active')
    side_tag.classList.toggle('active')
    toggle_anotate.classList.toggle('active')
    side_cont.classList.toggle('active')
    highlight.classList.toggle('active')
})