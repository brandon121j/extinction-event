const li = document.querySelectorAll('ol li');

const fading = document.querySelectorAll('ul li');

const pics = document.querySelectorAll('#row img')

const button = document.querySelector('button')

button.style.cursor = 'pointer';

button.addEventListener('click', meteor);

for (const looper of li) {
    looper.addEventListener('click', onClick);
    looper.style.cursor = 'pointer';
}

for (const looping of fading) {
    looping.addEventListener('click', fade);
    looping.style.cursor = 'pointer';
    looping.style.opacity = '1';
}

for (const pic of pics) {
    pic.addEventListener('click', disappear);
    pic.style.cursor = 'pointer';
    pic.style.opacity = '1';
}

function onClick() {
    if (this.style.textDecoration === 'line-through') {
        this.style.textDecoration = 'none';
    } else {
        this.style.textDecoration = 'line-through'
    }

}

function fade() {
    if (this.style.opacity === '1') {
        this.style.opacity = '0.0';
    } else {
        this.style.opacity = '1';
    }
}

function disappear(event) {
    if (event.target.style.opacity === '1') {
        event.target.style.opacity = '0.0'
    } else {
        event.target.style.opacity = '1'
    }
}

function meteor(event) {

    li.forEach(element => {
        element.style.opacity = '0.0'
    })

    fading.forEach(element => {
        element.style.opacity = '0.0'
    })

    pics.forEach(element => {
        element.style.opacity = '0.0'
    })

}

// li.addEventListener('click', onClick)

