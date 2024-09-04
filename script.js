document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';

    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.5}s`;
        title.appendChild(span);

        setTimeout(function () {
            for (let j = 0; j < 10; j++) {
                setTimeout(function () {
                    span.textContent = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
                }, (j * 50));
            }
        }, i * 0.5 * 1000);

        setTimeout(function () {
            span.textContent = text[i];
        }, (i + 2) * 0.5 * 1000);
    }

    const heartColors = ['#ff5e5e', '#ffb6b6', '#ff8484', '#ff9292', '#ffaaaa'];
    const heartSymbols = ['❤️', '💖', '💗', '💕', '💓'];
    const heartInterval = 100;

    document.getElementById('yesButton').addEventListener('click', function () {
        generateHearts();
        const title = document.querySelector('.title');
        title.textContent = 'Yaşasınn!';
    });

    function generateHearts() {
        setInterval(() => {
            const symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            createHeart(symbol);
        }, heartInterval);
    }

    function createHeart(symbol) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = symbol;
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.animationName = 'heartAnimation';
        heart.style.animationDuration = '.9s';
        document.body.appendChild(heart);
    }

    const noButton = document.getElementById('noButton');
    let isMoved = false;

    noButton.addEventListener("mouseover", function () {
        if (!isMoved) {
            noButton.style.transform = `translate(-80px, 50px)`;
            isMoved = true;
        } else {
            noButton.style.transform = `translate(80px, 50px)`;
            isMoved = false;
        }
        noButton.style.transition = "all 0.3s ease";
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            noButton.style.animation = 'explode 0.5s forwards';
            if (!noButton.dataset.tabPressed) {
                noButton.dataset.tabPressed = true;
                setTimeout(() => noButton.style.display = 'none', 500);
                event.preventDefault();

                const title = document.querySelector('.title');
                title.textContent = 'Hile yapmak yok :)';

                setTimeout(() => {
                    title.textContent = 'Çıkalım mı artık?';
                }, 2000);
            }
        }
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    window.addEventListener("DOMContentLoaded", function () {
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
                disabledEvent(e);
            }
            if ((e.ctrlKey || e.metaKey) && e.keyCode == 76 && e.shiftKey) {
                disabledEvent(e);
            }
        }, false);
    });

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }

    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "Sayfayı kapatmak istediğinizden emin misiniz?";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    });

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode == 87) {
            disabledEvent(e);
        }
        if (e.altKey && e.keyCode == 115) {
            disabledEvent(e);
        }
    }, false);

});
