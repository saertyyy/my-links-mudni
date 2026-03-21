particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#67c1f5" }, /* Голубой цвет как в Steam */
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#67c1f5",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, /* При наведении линии тянутся к мышке */
      "onclick": { "enable": true, "mode": "push" }  /* При клике взрыв новых частиц */
    }
  },
  "retina_detect": true
});