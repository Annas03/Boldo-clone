let mobileNavBarIsClicked = false

if(screen.width > 789){
    mobileNavBarIsClicked = true
}

let testimonials = [document.getElementById("review-one"), document.getElementById("review-two"), document.getElementById("review-three")]


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