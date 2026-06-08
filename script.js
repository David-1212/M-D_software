window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('hidden');
});

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let W, H;
function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const particles = [];
const COUNT = 80;
const DIST = 160;

class Particle {
  constructor(){
    this.reset();
    this.y = Math.random() * H;
    this.x = Math.random() * W;
  }
  reset(){
    this.vx = (Math.random() - 0.5) * .6;
    this.vy = (Math.random() - 0.5) * .6;
    this.r = Math.random() * 2 + .5;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.x < 0 || this.x > W) this.vx *= -1;
    if(this.y < 0 || this.y > H) this.vy *= -1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,229,255,0.5)';
    ctx.fill();
  }
}
for(let i = 0; i < COUNT; i++) particles.push(new Particle());

function connect(){
  for(let i = 0; i < particles.length; i++){
    for(let j = i + 1; j < particles.length; j++){
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if(d < DIST){
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,229,255,${(1-d/DIST)*.2})`;
        ctx.lineWidth = .6;
        ctx.stroke();
      }
    }
  }
}

function anim(){
  ctx.clearRect(0, 0, W, H);
  for(const p of particles){p.update();p.draw()}
  connect();
  requestAnimationFrame(anim);
}
anim();

const words = ['Desarrollo web a medida', 'Despliegue en la nube', 'SEO que posiciona', 'Arquitectura escalable', 'Soporte continuo'];
let i = 0, j = 0, dir = 1;
const el = document.getElementById('typing');
function type(){
  const word = words[i];
  if(dir === 1){
    j++;
    if(j > word.length){dir = -1;setTimeout(type, 1500);return}
  } else {
    j--;
    if(j < 0){dir = 1;i=(i+1)%words.length;j=0;setTimeout(type, 300);return}
  }
  el.textContent = word.slice(0, j);
  setTimeout(type, dir === 1 ? 70 : 30);
}
type();

function animateCounter(el, target, suffix = ''){
  let current = 0;
  const step = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current += step;
    if(current >= target){current = target; clearInterval(interval)}
    el.textContent = current + suffix;
  }, 25);
}

const counterObs = new IntersectionObserver((entries) => {
  for(const e of entries){
    if(e.isIntersecting){
      animateCounter(document.getElementById('counter-projects'), 50, '+');
      animateCounter(document.getElementById('counter-clients'), 30, '+');
      animateCounter(document.getElementById('counter-years'), 5, '+');
      animateCounter(document.getElementById('counter-uptime'), 98, '%');
      counterObs.unobserve(e.target);
    }
  }
}, {threshold: .5});
counterObs.observe(document.getElementById('hero'));

const obs = new IntersectionObserver((entries) => {
  for(const e of entries){if(e.isIntersecting) e.target.classList.add('visible')}
}, {threshold: .12, rootMargin: '0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
