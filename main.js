document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('main-photo').src   = 'img/photo.jpg';
  document.getElementById('hr-card-img').src  = 'img/hr1.jpg';
  document.getElementById('exc-card-img').src = 'img/excel1.jpg';
  document.getElementById('hr-img-0').src     = 'img/hr1.jpg';
  document.getElementById('hr-img-1').src     = 'img/hr2.jpg';
  document.getElementById('hr-img-2').src     = 'img/hr3.jpg';
  document.getElementById('exc-img-0').src    = 'img/excel1.jpg';
  document.getElementById('exc-img-1').src    = 'img/excel2.jpg';
  document.getElementById('cv-link').href     = 'img/CV.pdf';

  const obs = new IntersectionObserver(
    e => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('on'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', function(e) {
      if (e.target === this) closeModal(this.id.replace('modal-', ''));
    });
  });
});

// Filter
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pcard').forEach(c => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
}

// Modal
const imgIdx = {};
function openModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
  document.body.style.overflow = 'hidden';
  imgIdx[id] = 0;
}
function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('open');
  document.body.style.overflow = '';
}
function goImg(id, i, total) {
  imgIdx[id] = i;
  for (let j = 0; j < total; j++) {
    document.getElementById(id + '-img-' + j)?.classList.toggle('active', j === i);
    document.getElementById(id + '-dot-' + j)?.classList.toggle('active', j === i);
  }
}
function nextImg(id, total) {
  const cur = ((imgIdx[id] || 0) + 1) % total;
  imgIdx[id] = cur;
  goImg(id, cur, total);
}
function prevImg(id, total) {
  const cur = ((imgIdx[id] || 0) - 1 + total) % total;
  imgIdx[id] = cur;
  goImg(id, cur, total);
}
