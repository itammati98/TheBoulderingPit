const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else{
        //     entry.target.classList.remove('show');
        // }
    });
});

const slidingElements = document.querySelectorAll('.slide');
slidingElements.forEach((el) => observer.observe(el));

function carouselLeft(){
    var lastImg = $('.carousel div:last-child').clone();
    $('.carousel div:last-child').remove();
    $('.carousel').prepend(lastImg);
}

function carouselRight(){
    var firstImg = $('.carousel div:first-child').clone();
    $('.carousel div:first-child').remove();
    $('.carousel').append(firstImg);
}

document.addEventListener('keydown', (e)=>{
    if(e.code === 'ArrowLeft'){
        carouselLeft();
    }else if(e.code === 'ArrowRight'){
        carouselRight();
    }
});