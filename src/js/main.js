const sections = document.querySelectorAll('a.section');
const navItems = document.querySelectorAll('.nav-link');

window.onscroll = function() {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop - 106;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    
    navItems.forEach( item => {
        item.classList.remove('active');
        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    })

    if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        for (let e of document.getElementsByTagName("a")) { e.style.fontSize = "2.4vh"; }
    } else {
        document.getElementById("navbar").style.padding = "80px 10px";
        for (let e of document.getElementsByTagName("a")) { e.style.fontSize = "3.1vh"; }
        document.querySelector('a.home').classList.add('active');
    }

    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight + 230) {
        navItems.forEach( item => { item.classList.remove('active'); })
        document.querySelector('a.projects').classList.add('active');
    }
};

function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}

// Modal logic
// var modal = document.getElementById("myModal");
// var downloadButton = document.getElementById("download");
// var closeBtn = document.getElementsByClassName("close")[0];
// var continueBtn = document.getElementsByClassName("close")[1];

window.onload = function () {
    var modal = document.getElementById("myModal");
    var downloadButton = document.getElementById("download");
    var closeBtn = document.getElementsByClassName("close")[0];
    var continueBtn = document.getElementsByClassName("close")[1];
    
    downloadButton.onclick = function() {
        modal.style.display = "block";
    }
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    continueBtn.onclick = function() {
        modal.style.display = "none";
    }
};

// downloadButton.onclick = function() {
//     modal.style.display = "block";
// }

// closeBtn.onclick = function() {
//     modal.style.display = "none";
// }
// continueBtn.onclick = function() {
//     modal.style.display = "none";
// }
