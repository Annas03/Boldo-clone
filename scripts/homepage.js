let testimonials = [document.getElementById("review-one"), document.getElementById("review-two"), document.getElementById("review-three")]
testimonials[1].style.height = "350px"

document.getElementById("move-left").addEventListener("click", leftClicked)

document.getElementById("move-right").addEventListener("click", rightClicked)

function leftClicked(){
    testimonials = [testimonials[1], testimonials[2], testimonials[0]]
    testimonials[0].style.order = "0"
    testimonials[1].style.order = "1"
    testimonials[2].style.order = "2"

    testimonials[0].style.height = "auto"
    testimonials[1].style.height = "350px"
    testimonials[2].style.height = "auto"
}

function rightClicked(){
    testimonials = [testimonials[2], testimonials[0], testimonials[1]]
    testimonials[0].style.order = "0"
    testimonials[1].style.order = "1"
    testimonials[2].style.order = "2"

    testimonials[0].style.height = "auto"
    testimonials[1].style.height = "350px"
    testimonials[2].style.height = "auto"
}