// ── Typed role animation ──────────────────────────────────────────────────────
function startTypingAnimation() {
  const el = document.getElementById('typed-role');
  if (!el) return;
  const roles = portfolioData.roles;
  let roleIndex = 0, charIndex = 0, isDeleting = false;

  function tick() {
    const current = roles[roleIndex];
    el.textContent = isDeleting
      ? current.substring(0, charIndex - 1)
      : current.substring(0, charIndex + 1);
    charIndex += isDeleting ? -1 : 1;

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      return setTimeout(tick, 1800);
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      return setTimeout(tick, 400);
    }
    setTimeout(tick, isDeleting ? 55 : 100);
  }
  tick();
}

// ── Stats counters ────────────────────────────────────────────────────────────
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;
  container.innerHTML = portfolioData.stats
    .map(({ value, suffix, label }) => `
      <div class="stat-item reveal">
        <div class="stat-number" data-target="${value}" data-suffix="${suffix}">0${suffix}</div>
        <div class="stat-label">${label}</div>
      </div>`)
    .join('');
}

function startStatCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix;
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + suffix;
      if (count >= target) clearInterval(timer);
    }, 28);
  });
}

// ── Social links ──────────────────────────────────────────────────────────────
function renderSocialLinks() {
  document.getElementById('social-links').innerHTML = portfolioData.social
    .map(({ icon, url }) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer"><i class="fa ${icon}"></i></a>`)
    .join('');
}

// ── Services / What I Do ──────────────────────────────────────────────────────
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;
  container.innerHTML = portfolioData.services
    .map(({ icon, title, desc }) => `
      <div class="service-item padd-15 reveal">
        <div class="service-item-inner shadow-dark shine-card">
          <div class="service-icon"><i class="fa ${icon}"></i></div>
          <h4>${title}</h4>
          <p>${desc}</p>
        </div>
      </div>`)
    .join('');
}

// ── Skills ────────────────────────────────────────────────────────────────────
function renderSkills() {
  const row = document.getElementById('personal-skills-row');
  portfolioData.skillGroups.forEach(({ title, skills }) => {
    const div = document.createElement('div');
    div.className = 'skills padd-15 reveal';
    div.innerHTML = `
      <div class="row">
        <h1 class="padd-15">${title}</h1>
        ${skills.map(({ name, percent }) => `
          <div class="skill-item padd-15">
            <div class="skill-header">
              <h4>${name}</h4>
              <span class="skill-percent">${percent}%</span>
            </div>
            <div class="progress">
              <div class="progress-in" style="width: 0%" data-width="${percent}%"></div>
            </div>
          </div>`).join('')}
      </div>`;
    row.appendChild(div);
  });

  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.progress-in').forEach(bar => barObserver.observe(bar));
}

// ── Timelines ─────────────────────────────────────────────────────────────────
function renderTimeline(items, containerId) {
  document.getElementById(containerId).innerHTML = items
    .map(({ date, title, lines }) => `
      <div class="timeline-item reveal from-left">
        <div class="circle-dot"></div>
        <h6 class="timeline-date"><i class="fa fa-calendar"></i> ${date}</h6>
        <h4 class="timeline-title">${title}</h4>
        ${lines.map(line => `<p class="timeline-text">${line}</p>`).join('')}
      </div>`)
    .join('');
}

// ── Projects (no image — gradient header with number) ─────────────────────────
function renderProjects() {
  document.getElementById('projects-container').innerHTML = portfolioData.projects
    .map(({ alt, title, description, link, tags }, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
      <div class="project-item padd-15 reveal">
        <div class="project-item-inner shine-card">
          <div class="project-header">
            <span class="project-number">${num}</span>
            <div class="project-header-shape"></div>
            ${(tags || []).length
              ? `<div class="project-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
              : ''}
          </div>
          <div class="project-info">
            <h4 class="project-title">${title}</h4>
            <p class="project-description">${description}</p>
          </div>
        </div>
      </div>`;
    })
    .join('');
}

// ── Contact info ──────────────────────────────────────────────────────────────
function renderContactInfo() {
  document.getElementById('contact-info-container').innerHTML = portfolioData.contact
    .map(({ icon, text, link }) => `
      <div class="contact-info-item padd-15 reveal">
        ${link
          ? `<a href="${link}" target="_blank" rel="noopener noreferrer" class="contact-info-link">
               <div class="icon"><i class="fa ${icon}"></i></div>
               <p>${text}</p>
             </a>`
          : `<div class="icon"><i class="fa ${icon}"></i></div>
             <p>${text}</p>`
        }
      </div>`)
    .join('');
}

// ── Theme buttons ─────────────────────────────────────────────────────────────
function renderThemeButtons() {
  const ul = document.getElementById('theme-colors');
  ul.innerHTML = portfolioData.themes
    .map(({ name, color }) =>
      `<li><a href="#" title="${name}" style="background-color: ${color};" data-theme="${name}"></a></li>`)
    .join('');
  ul.addEventListener('click', e => {
    e.preventDefault();
    const btn = e.target.closest('[data-theme]');
    if (btn) setActiveTheme(btn.dataset.theme);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSocialLinks();
  renderStats();
  renderServices();
  renderSkills();
  renderTimeline(portfolioData.experience, 'experience-timeline');
  renderTimeline(portfolioData.education, 'education-timeline');
  renderProjects();
  renderContactInfo();
  renderThemeButtons();
  startTypingAnimation();
});
