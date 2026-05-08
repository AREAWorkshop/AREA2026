const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const compactHeroGraphPositions = [
  { x: 15, y: 24 },
  { x: 50, y: 8 },
  { x: 85, y: 24 },
  { x: 85, y: 76 },
  { x: 15, y: 76 },
  { x: 50, y: 92 }
];
let heroGraphLayout = getHeroGraphLayout();

/* =========================
   Editable workshop content
   ========================= */
const siteContent = {
  workshop: {
    title: 'AREA 2026',
    subtitle: '6th Workshop on Agents and Robots for reliable Engineered Autonomy',
    subtitleKickerLines: ['6th Workshop on', 'Agents and Robots for reliable Engineered Autonomy'],
    hostConferenceLine: 'In conjunction with PAAMS 2026',
    location: 'Naples, Italy',
    dateRange: 'TBA, October 2026',
    submitDeadlineDisplay: '22 May 2026',
    submitDeadlineISO: '2026-05-22',
    tagline: 'Advancing reliable engineered autonomy through agents, robotics, and verification.',
    contactEmail: 'area.workshop.info@gmail.com',
    copyrightYear: '2026'
  },
  links: {
    submitPaper: 'https://easychair.org/conferences/?conf=paams26',
    submissionGuidelines: '#cfp',
    registration: 'https://www.paams.net/registration',
    paams: 'https://www.paams.net/',
    email: 'mailto:area.workshop.info@gmail.com'
  },
  heroNodes: [
    {
      label: 'Call for Papers',
      target: 'cfp',
      description: 'Topics, format, and submission instructions.',
      x: 14,
      y: 31
    },
    {
      label: 'Important Dates',
      target: 'dates',
      description: 'Milestones for submission, notification, and camera-ready.',
      x: 50,
      y: 8
    },
    {
      label: 'Programme',
      target: 'programme',
      description: 'Provisional workshop schedule and session flow.',
      x: 86,
      y: 31
    },
    {
      label: 'Invited Speakers',
      target: 'speakers',
      description: 'Speaker placeholders ready for confirmed announcements.',
      x: 86,
      y: 66
    },
    {
      label: 'Organisers',
      target: 'organisers',
      description: 'Workshop coordination and programme committee status.',
      x: 14,
      y: 66
    },
    {
      label: 'Venue @ PAAMS 2026',
      target: 'venue',
      description: 'Host conference context, city, dates, and venue details.',
      x: 50,
      y: 89
    },
  ],
  topics: [
    'Agent architectures',
    'Agent-oriented software engineering',
    'Runtime verification',
    'Verification and validation',
    'Multi-robot systems',
    'Human-robot interaction',
    'Fault tolerance',
    'Neuro-symbolic AI',
    'Coordination and negotiation',
    'Real-world autonomy'
  ],
  importantDates: [
    /* Keep the submission deadline as a verified official value once published.
       If you replace the placeholder below, check it against the final CFP first. */
    {
      label: 'Paper submission',
      date: '8 May 2026',
      note: 'Submission deadline for workshop papers.',
      highlight: false
    },
    {
      label: 'Notification of acceptance',
      date: '5 July 2026',
      note: 'Authors will be notified of the review outcome.',
      highlight: false
    },
    {
      label: 'Camera-ready',
      date: '15 July 2026',
      note: 'Final version deadline for accepted papers.',
      highlight: false
    },
    {
      label: 'Workshop dates',
      date: 'October 2026',
      note: 'One workshop day during PAAMS 2026 (21-23 October 2026), exact day TBC.',
      highlight: true
    }
  ],
  programme: [
    {
      kind: 'item',
      time: '09:00 - 09:15',
      title: 'Opening remarks',
      type: 'Workshop welcome',
      description: 'Introduction to the workshop aims, format, and thematic scope.'
    },
    {
      kind: 'session',
      title: 'Session 1: Agent Programming & Reasoning'
    },
    {
      kind: 'item',
      time: '09:15 - 09:40',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'item',
      time: '09:40 - 10:05',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'break',
      time: '10:05 - 10:30',
      title: 'Coffee break',
      type: 'Break'
    },
    {
      kind: 'highlight',
      title: 'Invited Talk'
    },
    {
      kind: 'item',
      time: '10:30 - 11:15',
      title: 'Speaker to be announced',
      type: 'Invited speaker',
      description: 'Talk title and abstract will be published once the invited speaker has been confirmed.'
    },
    {
      kind: 'session',
      title: 'Session 2: Verification & Safety'
    },
    {
      kind: 'item',
      time: '11:15 - 11:40',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'item',
      time: '11:40 - 12:05',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'break',
      time: '12:05 - 13:15',
      title: 'Lunch break',
      type: 'Break'
    },
    {
      kind: 'session',
      title: 'Session 3: Robotics & Real-World Autonomy'
    },
    {
      kind: 'item',
      time: '13:15 - 13:40',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'item',
      time: '13:40 - 14:05',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'break',
      time: '14:05 - 14:25',
      title: 'Coffee break',
      type: 'Break'
    },
    {
      kind: 'session',
      title: 'Session 4: Discussion & Outlook'
    },
    {
      kind: 'item',
      time: '14:25 - 14:50',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'item',
      time: '14:50 - 15:15',
      title: 'Accepted paper title',
      type: 'Paper presentation',
      description: 'Author names will be added after the review process.'
    },
    {
      kind: 'item',
      time: '15:15 - 15:45',
      title: 'Panel / discussion',
      type: 'Community exchange',
      description: 'Discussion across agent-oriented and robotics perspectives on dependable autonomy.'
    },
    {
      kind: 'item',
      time: '15:45 - 16:00',
      title: 'Closing remarks',
      type: 'Workshop close',
      description: 'Wrap-up, next steps, and closing discussion for AREA 2026.'
    }
  ],
  speakers: [
    {
      name: 'To be announced',
      affiliation: 'Speaker announcement pending',
      bio: '',
      initials: 'TBA',
      link: ''
    },
    {
      name: 'To be announced',
      affiliation: 'Speaker announcement pending',
      bio: '',
      initials: 'TBA',
      link: ''
    }
  ],
  organisers: [
    {
      name: 'Angelo Ferrando',
      affiliation: 'University of Modena and Reggio Emilia (Italy)',
      bio: '',
      initials: 'AF',
      image: 'images/angelo.jpg?v=20260326-1',
      imagePosition: '50% 24%',
      imageZoom: 1.08,
      imageShiftX: '0%',
      link: 'https://angeloferrando.github.io/'
    },
    {
      name: 'Rafael C. Cardoso',
      affiliation: 'University of Aberdeen (UK)',
      bio: '',
      initials: 'RC',
      image: 'images/rafael.jpeg?v=20260326-1',
      imagePosition: '50% 30%',
      imageZoom: 1.14,
      link: 'https://rafaelcaue.github.io/'
    }
  ],
  programmeCommittee: [
    /* Add programme committee members here as:
       { name: 'Name Surname', affiliation: 'University / Institution' } */
  ]
};

const textBindings = [
  { selector: '[data-workshop-title]', value: siteContent.workshop.title },
  { selector: '[data-workshop-subtitle]', value: siteContent.workshop.subtitle },
  { selector: '[data-workshop-host]', value: siteContent.workshop.hostConferenceLine },
  { selector: '[data-workshop-location]', value: siteContent.workshop.location },
  { selector: '[data-workshop-dates]', value: siteContent.workshop.dateRange },
  { selector: '[data-workshop-tagline]', value: siteContent.workshop.tagline },
  { selector: '[data-copyright-year]', value: siteContent.workshop.copyrightYear }
];

const linkBindings = [
  { selector: '[data-link-submit]', value: siteContent.links.submitPaper },
  { selector: '[data-link-guidelines]', value: siteContent.links.submissionGuidelines },
  { selector: '[data-link-registration]', value: siteContent.links.registration },
  { selector: '[data-link-paams]', value: siteContent.links.paams },
  { selector: '[data-link-email]', value: siteContent.links.email }
];

const panelIds = Array.from(document.querySelectorAll('[data-panel]')).map((panel) => panel.id);
const defaultOverviewPanels = ['cfp', 'dates'];
let currentPanelId = null;

function bindWorkshopContent() {
  textBindings.forEach(({ selector, value }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  });

  document.querySelectorAll('[data-workshop-subtitle-kicker]').forEach((element) => {
    element.innerHTML = siteContent.workshop.subtitleKickerLines
      .map((line) => `<span>${line}</span>`)
      .join('');
  });

  document.querySelectorAll('[data-link-email]').forEach((element) => {
    element.textContent = siteContent.workshop.contactEmail;
  });

  linkBindings.forEach(({ selector, value }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute('href', value);
    });
  });
}

function renderHeroGraph() {
  const nodesRoot = document.getElementById('heroGraphNodes');
  const linesRoot = document.getElementById('heroGraphLines');
  if (!nodesRoot || !linesRoot) {
    return;
  }

  nodesRoot.textContent = '';
  linesRoot.textContent = '';
  const nodes = getHeroGraphNodes();
  nodes.forEach((node, index) => {
    const link = document.createElement('a');
    const tooltipId = `hero-node-tooltip-${index}`;
    link.className = 'graph-node';
    link.href = `#${node.target}`;
    link.dataset.graphTarget = node.target;
    link.style.setProperty('--x', node.x);
    link.style.setProperty('--y', node.y);
    link.setAttribute('aria-label', `${node.label}: ${node.description}`);
    link.setAttribute('aria-describedby', tooltipId);
    link.innerHTML = `
      <span class="graph-node-label">${node.label}</span>
      <span class="node-tooltip" id="${tooltipId}">${node.description}</span>
    `;
    nodesRoot.appendChild(link);

    const pathData = curvePath(node.x, node.y, index, 55, 50);

    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    base.classList.add('line-base');
    base.setAttribute('d', pathData);
    linesRoot.appendChild(base);

    const flow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    flow.classList.add('line-flow');
    flow.setAttribute('d', pathData);
    flow.style.setProperty('--line-delay', `${index * -1.8}s`);
    linesRoot.appendChild(flow);
  });

}

function getHeroGraphLayout() {
  if (window.innerWidth <= 720) {
    return 'compact';
  }

  return 'desktop';
}

function getHeroGraphNodes() {
  const isCompact = heroGraphLayout === 'compact';
  return siteContent.heroNodes.map((node, index) => ({
    ...node,
    ...(isCompact ? compactHeroGraphPositions[index] : {})
  }));
}

function curvePath(x, y, index, coreX, coreY) {
  const dx = x - coreX;
  const dy = y - coreY;
  const radiusX = 17.6;
  const radiusY = 9.5;
  const edgeScale = 1 / Math.max(Math.abs(dx) / radiusX || 0, Math.abs(dy) / radiusY || 0, 1);
  const startX = coreX + dx * edgeScale;
  const startY = coreY + dy * edgeScale;
  const horizontal = x < coreX ? -1 : x > coreX ? 1 : 0;
  const vertical = y < coreY ? -1 : y > coreY ? 1 : 0;
  const bendX = horizontal * (index % 2 === 0 ? 5.2 : 3.6);
  const bendY = vertical * (index % 2 === 0 ? 4.1 : 5.4);
  const controlX = (startX + x) / 2 + bendX;
  const controlY = (startY + y) / 2 + bendY;
  return `M ${startX} ${startY} Q ${controlX} ${controlY} ${x} ${y}`;
}

function getTopicIcon(topic) {
  const normalized = topic.toLowerCase();
  const icon = (content) => `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      ${content}
    </svg>
  `;

  if (normalized.includes('architectures')) {
    return icon(`
      <rect x="4" y="4" width="6" height="6" rx="2"></rect>
      <rect x="14" y="4" width="6" height="6" rx="2"></rect>
      <rect x="9" y="14" width="6" height="6" rx="2"></rect>
      <path d="M10 7h4M12 10v4"></path>
    `);
  }

  if (normalized.includes('software engineering')) {
    return icon(`
      <path d="M8 8l-4 4 4 4"></path>
      <path d="M16 8l4 4-4 4"></path>
      <path d="M13 5l-2 14"></path>
    `);
  }

  if (normalized.includes('runtime verification')) {
    return icon(`
      <path d="M3 12h4l2-4 4 8 2-4h6"></path>
      <path d="M5 5h14"></path>
      <path d="M5 19h14"></path>
    `);
  }

  if (normalized.includes('verification and validation')) {
    return icon(`
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"></path>
      <path d="M9 12l2 2 4-4"></path>
    `);
  }

  if (normalized.includes('multi-robot')) {
    return icon(`
      <rect x="4" y="9" width="5" height="5" rx="1.5"></rect>
      <rect x="15" y="9" width="5" height="5" rx="1.5"></rect>
      <rect x="9.5" y="4" width="5" height="5" rx="1.5"></rect>
      <path d="M9 11.5h6"></path>
      <path d="M12 9v2.5"></path>
    `);
  }

  if (normalized.includes('human-robot')) {
    return icon(`
      <circle cx="7" cy="12" r="2.5"></circle>
      <rect x="14.5" y="9.5" width="5" height="5" rx="1.5"></rect>
      <path d="M9.5 12h5"></path>
    `);
  }

  if (normalized.includes('fault tolerance')) {
    return icon(`
      <path d="M12 5a7 7 0 1 0 7 7"></path>
      <path d="M12 2v5h5"></path>
      <path d="M10 12l1.5 1.5L15 10"></path>
    `);
  }

  if (normalized.includes('neuro-symbolic')) {
    return icon(`
      <circle cx="6" cy="8" r="1.5"></circle>
      <circle cx="9" cy="12" r="1.5"></circle>
      <circle cx="6" cy="16" r="1.5"></circle>
      <path d="M7.2 9l1 1.4M8.2 13.6l-1 1.4"></path>
      <path d="M13 8h6"></path>
      <path d="M13 12h6"></path>
      <path d="M13 16h6"></path>
      <path d="M10.8 12H13"></path>
    `);
  }

  if (normalized.includes('coordination') || normalized.includes('negotiation')) {
    return icon(`
      <path d="M4 8h11"></path>
      <path d="M12 5l3 3-3 3"></path>
      <path d="M20 16H9"></path>
      <path d="M12 13l-3 3 3 3"></path>
    `);
  }

  if (normalized.includes('real-world autonomy')) {
    return icon(`
      <circle cx="12" cy="12" r="7"></circle>
      <path d="M5 12h14"></path>
      <path d="M12 5c2 2 3 4.4 3 7s-1 5-3 7"></path>
      <path d="M12 5c-2 2-3 4.4-3 7s1 5 3 7"></path>
      <path d="M10 14l2-2 1.7 1.5 2.8-3"></path>
    `);
  }

  return icon(`
    <circle cx="12" cy="12" r="2.5"></circle>
    <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2.2 2.2M15.8 15.8 18 18M18 6l-2.2 2.2M8.2 15.8 6 18"></path>
  `);
}

function renderTopics() {
  const topicCloud = document.getElementById('topicCloud');
  if (!topicCloud) {
    return;
  }

  topicCloud.textContent = '';
  siteContent.topics.forEach((topic) => {
    const chip = document.createElement('article');
    chip.className = 'topic-chip';
    chip.innerHTML = `
      <span class="topic-chip-icon" aria-hidden="true">${getTopicIcon(topic)}</span>
      <span class="topic-chip-label">${topic}</span>
    `;
    topicCloud.appendChild(chip);
  });
}

function renderImportantDates() {
  const datesGrid = document.getElementById('datesGrid');
  if (!datesGrid) {
    return;
  }

  datesGrid.textContent = '';
  siteContent.importantDates.forEach((item) => {
    const card = document.createElement('li');
    card.className = `milestone-card${item.highlight ? ' is-highlight' : ''}`;
    card.innerHTML = `
      <p class="milestone-label">${item.label}</p>
      <p class="milestone-date">${item.date}</p>
      <p class="milestone-note">${item.note}</p>
    `;
    datesGrid.appendChild(card);
  });
}

function renderHeroDeadline() {
  const deadlineDate = document.querySelector('[data-hero-deadline-date]');
  const countdown = document.querySelector('[data-hero-deadline-countdown]');
  if (!deadlineDate || !countdown) {
    return;
  }

  const { submitDeadlineDisplay, submitDeadlineISO } = siteContent.workshop;
  deadlineDate.textContent = submitDeadlineDisplay;

  const deadline = new Date(`${submitDeadlineISO}T23:59:59`);
  if (Number.isNaN(deadline.getTime())) {
    countdown.textContent = 'Deadline to be confirmed';
    return;
  }

  const updateCountdown = () => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();

    if (diff <= 0) {
      countdown.textContent = 'Deadline passed';
      return;
    }

    const msPerDay = 24 * 60 * 60 * 1000;
    const msPerHour = 60 * 60 * 1000;
    const days = Math.floor(diff / msPerDay);
    const hours = Math.floor((diff % msPerDay) / msPerHour);

    if (days > 7) {
      countdown.textContent = `${days} days left`;
      return;
    }

    countdown.textContent = `${days}d ${hours}h left`;
  };

  updateCountdown();
  window.setInterval(updateCountdown, 60 * 1000);
}

function renderProgramme() {
  const programmeList = document.getElementById('programmeList');
  if (!programmeList) {
    return;
  }

  programmeList.textContent = '';
  siteContent.programme.forEach((item) => {
    const entry = document.createElement('li');
    const kind = item.kind || 'item';
    entry.className = `programme-item programme-item-${kind}`;

    if (kind === 'session' || kind === 'highlight') {
      const bandClass = kind === 'highlight' ? 'programme-band programme-band-highlight' : 'programme-band programme-band-session';
      entry.innerHTML = `<div class="${bandClass}">${item.title}</div>`;
      programmeList.appendChild(entry);
      return;
    }

    const descriptionMarkup = item.description ? `<p class="programme-description">${item.description}</p>` : '';

    entry.innerHTML = `
      <div class="programme-time"><span>${item.time}</span></div>
      <div class="programme-content">
        <h3 class="programme-title">${item.title}</h3>
        ${descriptionMarkup}
      </div>
    `;
    programmeList.appendChild(entry);
  });
}

function renderSpeakers() {
  const speakerGrid = document.getElementById('speakerGrid');
  if (!speakerGrid) {
    return;
  }

  speakerGrid.textContent = '';
  siteContent.speakers.forEach((speaker) => {
    const bioMarkup = speaker.bio ? `<p class="person-bio">${speaker.bio}</p>` : '';
    const card = document.createElement(speaker.link ? 'a' : 'article');
    card.className = `card person-card speaker-card reveal${speaker.link ? ' speaker-card-link' : ''}`;
    if (speaker.link) {
      card.href = speaker.link;
      card.target = '_blank';
      card.rel = 'noreferrer';
      card.setAttribute('aria-label', `Open ${speaker.name} speaker profile`);
    }
    card.innerHTML = `
      <div class="person-top">
        <div class="avatar ${speaker.initials === 'TBA' ? 'is-placeholder' : ''}" aria-hidden="true">${speaker.initials}</div>
        <div class="person-meta">
          <p class="card-label">Invited Speaker</p>
          <h3 class="person-name">${speaker.name}</h3>
          <p class="person-affiliation">${speaker.affiliation}</p>
        </div>
      </div>
      ${bioMarkup}
    `;
    speakerGrid.appendChild(card);
  });
}

function renderOrganisers() {
  const organiserGrid = document.getElementById('organiserGrid');
  if (!organiserGrid) {
    return;
  }

  organiserGrid.textContent = '';
  siteContent.organisers.forEach((organiser) => {
    const imageStyles = [];
    if (organiser.imagePosition) {
      imageStyles.push(`object-position: ${organiser.imagePosition};`);
    }
    if (organiser.imageShiftX || organiser.imageZoom) {
      imageStyles.push(
        `transform: translateX(${organiser.imageShiftX || '0'}) scale(${organiser.imageZoom || 1});`
      );
    }
    const avatarMarkup = organiser.image
      ? `<div class="avatar avatar-photo"><img src="${organiser.image}" alt="${organiser.name}"${imageStyles.length ? ` style="${imageStyles.join(' ')}"` : ''}></div>`
      : `<div class="avatar" aria-hidden="true">${organiser.initials}</div>`;
    const bioMarkup = organiser.bio ? `<p class="person-bio">${organiser.bio}</p>` : '';
    const card = document.createElement(organiser.link ? 'a' : 'article');
    card.className = `card person-card organiser-card reveal${organiser.link ? ' organiser-card-link' : ''}`;
    if (organiser.link) {
      card.href = organiser.link;
      card.target = '_blank';
      card.rel = 'noreferrer';
      card.setAttribute('aria-label', `Open ${organiser.name} website`);
    }
    card.innerHTML = `
      <div class="person-top">
        ${avatarMarkup}
        <div class="person-meta">
          <p class="card-label">Organiser</p>
          <h3 class="person-name">${organiser.name}</h3>
          <p class="person-affiliation">${organiser.affiliation}</p>
        </div>
      </div>
      ${bioMarkup}
    `;
    organiserGrid.appendChild(card);
  });

  const committeeCard = document.createElement('article');
  committeeCard.className = 'card person-card committee-card reveal';
  const committeeMembers = siteContent.programmeCommittee || [];
  const committeeMarkup = committeeMembers.length
    ? `
      <div class="committee-list" role="list">
        ${committeeMembers
          .map(
            (member) => `
              <div class="committee-item" role="listitem">
                <p class="committee-name">${member.name}</p>
                <p class="committee-affiliation">${member.affiliation}</p>
              </div>
            `
          )
          .join('')}
      </div>
    `
    : '<p class="committee-empty">TBA</p>';

  committeeCard.innerHTML = `
    <p class="card-label">Programme Committee</p>
    ${committeeMarkup}
  `;
  organiserGrid.appendChild(committeeCard);
}

function setupMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (!navToggle || !siteNav) {
    return () => {};
  }

  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    siteNav.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 780) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  return closeMenu;
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !revealElements.length || prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });

  revealElements.forEach((element) => observer.observe(element));
}

function revealPanel(panel) {
  if (!panel) {
    return;
  }

  panel.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('is-visible');
  });
}

function applyActiveState(panelId) {
  document.querySelectorAll('[data-nav-target]').forEach((link) => {
    const isActive = link.dataset.navTarget === panelId;
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  document.querySelectorAll('[data-graph-target]').forEach((node) => {
    node.classList.toggle('is-active', node.dataset.graphTarget === panelId);
  });
}

function getPanelIdFromHash() {
  const hash = window.location.hash.replace('#', '');
  return panelIds.includes(hash) ? hash : null;
}

function scrollToPanelStage(panelId) {
  const targetPanel = panelId ? document.getElementById(panelId) : null;
  const panelStage = document.getElementById('panel-stage');
  const panelHeading = targetPanel?.querySelector('.section-intro') || null;
  const scrollTarget = panelHeading || targetPanel || panelStage;
  if (!scrollTarget) {
    return;
  }

  const headerHeight = document.documentElement.style.getPropertyValue('--header-height')
    || getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  const parsedHeaderHeight = Number.parseFloat(headerHeight);
  const mobileExtraOffset = window.innerWidth <= 780 ? 38 : 18;
  const cfpExtraOffset = panelId === 'cfp' && window.innerWidth > 780 ? 22 : 0;
  const offset = Number.isFinite(parsedHeaderHeight)
    ? parsedHeaderHeight + mobileExtraOffset + cfpExtraOffset
    : 120;
  const top = window.scrollY + scrollTarget.getBoundingClientRect().top - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
}

function showOverviewPanels() {
  document.querySelectorAll('[data-panel]').forEach((panel) => {
    const isVisible = defaultOverviewPanels.includes(panel.id);
    panel.classList.toggle('is-active', isVisible);
    panel.hidden = !isVisible;
    panel.setAttribute('aria-hidden', String(!isVisible));
  });

  currentPanelId = 'overview';
  applyActiveState('overview');
  defaultOverviewPanels.forEach((panelId) => revealPanel(document.getElementById(panelId)));
}

function activatePanel(panelId, options = {}) {
  const {
    updateHash = false,
    replaceHistory = false,
    scrollToPanel = false,
    focusPanel = false
  } = options;

  if (!panelIds.includes(panelId)) {
    return;
  }

  document.querySelectorAll('[data-panel]').forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.classList.toggle('is-active', isActive);
    panel.hidden = !isActive;
    panel.setAttribute('aria-hidden', String(!isActive));
  });

  currentPanelId = panelId;
  applyActiveState(panelId);
  revealPanel(document.getElementById(panelId));

  if (updateHash) {
    const nextHash = `#${panelId}`;
    if (window.location.hash !== nextHash) {
      if (replaceHistory) {
        history.replaceState(null, '', nextHash);
      } else {
        history.pushState(null, '', nextHash);
      }
    }
  }

  if (scrollToPanel) {
    scrollToPanelStage(panelId);
  }

  if (focusPanel) {
    const activePanel = document.getElementById(panelId);
    window.setTimeout(() => {
      activePanel?.focus({ preventScroll: true });
    }, prefersReducedMotion ? 0 : 140);
  }
}

function setupPanelNavigation(closeMenu) {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) {
      return;
    }

    const targetId = link.getAttribute('href')?.slice(1);
    if (!targetId || !panelIds.includes(targetId)) {
      return;
    }

    event.preventDefault();
    closeMenu();
    activatePanel(targetId, {
      updateHash: true,
      scrollToPanel: true,
      focusPanel: true
    });
  });

  const syncFromLocation = () => {
    const targetId = getPanelIdFromHash();
    if (!targetId) {
      if (currentPanelId !== 'overview') {
        showOverviewPanels();
      }
      return;
    }

    if (targetId !== currentPanelId) {
      activatePanel(targetId, {
        updateHash: false,
        scrollToPanel: false,
        focusPanel: false
      });
    }
  };

  window.addEventListener('hashchange', syncFromLocation);
  window.addEventListener('popstate', syncFromLocation);
}

function setupPanels() {
  const initialPanelId = getPanelIdFromHash();

  if (initialPanelId) {
    activatePanel(initialPanelId, {
      updateHash: false,
      replaceHistory: true,
      scrollToPanel: true,
      focusPanel: false
    });
    return;
  }

  showOverviewPanels();
}

function setupBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) {
    return;
  }

  const updateVisibility = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 360);
  };

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
}

function setupHeroGraphLayout() {
  let resizeFrame = 0;

  const syncHeroGraph = () => {
    resizeFrame = 0;
    const nextLayout = getHeroGraphLayout();
    if (nextLayout === heroGraphLayout) {
      return;
    }

    heroGraphLayout = nextLayout;
    renderHeroGraph();
    applyActiveState(currentPanelId);
  };

  window.addEventListener('resize', () => {
    if (resizeFrame) {
      window.cancelAnimationFrame(resizeFrame);
    }
    resizeFrame = window.requestAnimationFrame(syncHeroGraph);
  }, { passive: true });
}

bindWorkshopContent();
renderHeroGraph();
renderTopics();
renderImportantDates();
renderHeroDeadline();
renderProgramme();
renderSpeakers();
renderOrganisers();

const closeMenu = setupMobileMenu();
setupRevealAnimations();
setupPanels();
setupPanelNavigation(closeMenu);
setupBackToTop();
setupHeroGraphLayout();
