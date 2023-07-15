
let change = false;
let map = document.getElementById('map');
let buttonmap = document.getElementById('button-map');
function buttons() {
    change=!change;
    if (change === true) {
        map.classList.remove('address');
        buttonmap.innerHTML = "&#8743";
    } 
    else {
        map.classList.add('address');
        buttonmap.innerHTML = "&#8744";     
    }
}
