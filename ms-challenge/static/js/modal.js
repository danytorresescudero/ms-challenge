function showModal() {
    document.getElementById("modal").classList.add('show-modal');
    document.body.classList.add('fixed');    
}

function hideModal() {
    document.getElementById("modal").classList.remove('show-modal');
    document.body.classList.remove('fixed');
}

window.onclick = function(event) {
    if (event.target.id === "modal") {
     hideModal()
    }
}