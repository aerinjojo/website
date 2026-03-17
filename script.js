const now = new Date();
const opts = { year: 'numeric', month: 'long', day: 'numeric' };
const ds = now.toLocaleDateString('en-US', opts);

document.getElementById('hdr-date').textContent = ds;
document.getElementById('ftr-date').textContent = ds;

function goto(page) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('visible'));
  document.getElementById('page-' + page).classList.add('visible');
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.goto = goto;
