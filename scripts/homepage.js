let mobileNavBarIsClicked = false
let testimonials = [document.getElementById("review-one"), document.getElementById("review-two"), document.getElementById("review-three")]
if(screen.width > 1349){
    testimonials[1].style.height = "350px"
}
if(screen.width < 600){
    testimonials[1].style.height = "280px"
}
else{
    testimonials[1].style.height = "300px"
}


document.getElementById("move-left").addEventListener("click", leftClicked)

document.getElementById("move-right").addEventListener("click", rightClicked)

document.getElementById("mobile-navbar").addEventListener("click", mobileNavbarClicked)

function leftClicked(){
    testimonials = [testimonials[1], testimonials[2], testimonials[0]]
    TestimonialsStyles()
}

function rightClicked(){
    testimonials = [testimonials[2], testimonials[0], testimonials[1]]
    TestimonialsStyles()
}

function TestimonialsStyles(){
    testimonials[0].style.order = "0"
    testimonials[1].style.order = "1"
    testimonials[2].style.order = "2"

    testimonials[0].style.height = "auto"
    if(screen.width > 1349){
        testimonials[1].style.height = "350px"
    }
    else{
        testimonials[1].style.height = "300px"
    }
    testimonials[2].style.height = "auto"
}

function mobileNavbarClicked(){
    mobileNavBarIsClicked = !mobileNavBarIsClicked
    if(mobileNavBarIsClicked){
        document.getElementById("links").style.display = "flex"
    }
    else{
        document.getElementById("links").style.display = "none"
    }
}