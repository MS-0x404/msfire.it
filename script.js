particlesJS("particles", {

    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00abf0"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00abf0",
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },

    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}


/// Read Less
function toggleAboutText(event) {
    event.preventDefault();
    const moreText = document.getElementById("more-text");
    const link = document.getElementById("read-more-link");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        link.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        link.textContent = "Read more";
    }
}



////


document.getElementById("mail-send").addEventListener("click", function() {
    let box = document.getElementById("email-box");
    if (box.style.display === "block") {
        box.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => {
            box.style.display = "none";
            box.style.animation = "";
        }, 300);
    } else {
        box.style.display = "block";
        box.style.animation = "fadeIn 0.3s ease-out";
    }
});

document.getElementById("copy-icon").addEventListener("click", function() {
    let emailText = document.getElementById("email-text").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        let confirmMsg = document.getElementById("copy-confirm");
        confirmMsg.style.display = "inline";
        setTimeout(() => {
            confirmMsg.style.display = "none";
        }, 1500);
    });
});



window.addEventListener('scroll', function () {

    var scrollTopButton = document.querySelector('.scroll-top');

    if (this.window.pageYOffset > 200) {

        scrollTopButton.style.display = 'block';

    } else {

        scrollTopButton.style.display = 'none';

    }

});

/// Hamburger Responsive

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
hamburger.classList.toggle('active');
toggleIcon();
});

links.forEach(link => {
link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    resetIcon();
});
});

function toggleIcon() {
menuIcon.classList.toggle('bx-menu');
menuIcon.classList.toggle('bx-x');
}

function resetIcon() {
menuIcon.classList.remove('bx-x');
menuIcon.classList.add('bx-menu');
}
