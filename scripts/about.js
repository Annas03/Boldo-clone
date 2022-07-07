let mobileNavBarIsClicked = false

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