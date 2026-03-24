// === 1. НАВИГАЦИЯ И КНОПКА "НАВЕРХ" ===
const btn = document.getElementById('backToTop');

window.onscroll = () => {
    if (window.scrollY > 500) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Плавная прокрутка для ссылок
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// === 2. ЭФФЕКТ ПЕЧАТНОЙ МАШИНКИ ===
const titleText = "VaiseMods";
const speed = 150;
let i = 0;

function typeWriter() {
    const element = document.getElementById("typewriter");
    if (element && i < titleText.length) {
        element.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// === 3. СИСТЕМА СЧЕТЧИКОВ (LOCAL STORAGE) ===
// Функция для клика по кнопке
function updateCount(modId) {
    let count = localStorage.getItem('count-' + modId) || 0;
    count++;
    localStorage.setItem('count-' + modId, count);
    
    const element = document.getElementById('count-' + modId);
    if (element) {
        element.innerText = count;
    }
}

// Функция для загрузки цифр при старте
function loadAllCounts() {
    // Список всех ID твоих модов (проверь, чтобы они совпадали с id в HTML)
    const mods = ['camera', 'leaves', 'zoom', 'insanity']; 
    
    mods.forEach(id => {
        let savedCount = localStorage.getItem('count-' + id) || 0;
        let element = document.getElementById('count-' + id);
        if (element) {
            element.innerText = savedCount;
        }
    });
}

// === 4. ЕДИНЫЙ ЗАПУСК ПРИ ЗАГРУЗКЕ ===
window.addEventListener('load', () => {
    typeWriter();
    loadAllCounts();
});window.addEventListener('mousemove', e => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});// === ЖИВОЕ ВРЕМЯ ===
function updateSystemTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { hour12: false });
    const dateString = now.toLocaleDateString('ru-RU').replace(/\//g, '.');
    
    const timeElement = document.getElementById('system-time');
    if (timeElement) {
        timeElement.innerText = `SYSTEM_TIME: ${timeString} [${dateString}]`;
    }
}
setInterval(updateSystemTime, 1000);
updateSystemTime(); // Запуск сразу

// === СЛЕДЯЩЕЕ СВЕЧЕНИЕ КУРСОРA ===
window.addEventListener('mousemove', e => {
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});const cursor = document.getElementById('custom-cursor');

if (cursor) {
    // 1. Привязываем квадрат к мышке
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px'; // 10 — это половина ширины прицела
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // 2. Включаем вращение при наведении на кнопки и ссылки
    const targets = document.querySelectorAll('a, button, .dl-link, .nav-item');
    
    targets.forEach(t => {
        t.addEventListener('mouseenter', () => cursor.classList.add('active'));
        t.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}// === АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ ===
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Если хочешь, чтобы анимация сработала только один раз, раскомментируй строку ниже:
            // observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1 // Анимация начнется, когда 10% элемента будет видно
});

// Запускаем слежку за всеми элементами с классом reveal
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));