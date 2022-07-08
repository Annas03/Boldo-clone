let mobileNavBarIsClicked = false
if(screen.width > 789){
    mobileNavBarIsClicked = true
}

document.getElementById("mobile-navbar").addEventListener("click", mobileNavbarClicked)

function mobileNavbarClicked(){
    mobileNavBarIsClicked = !mobileNavBarIsClicked
    if(mobileNavBarIsClicked){
        document.getElementById("links").style.display = "flex"
    }
    else{
        document.getElementById("links").style.display = "none"
    }
}