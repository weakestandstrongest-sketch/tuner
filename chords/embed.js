// Shown inside the tuner app: shared SVG paint servers for the restyled wheel (see embed.css).
(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  // radial gradients centred on the wheel (viewBox is centred on 0,0): each ring brightens outward
  const ring = (id, r0, r1, c0, c1) =>
    `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="200">
       <stop offset="${r0 / 200}" stop-color="${c0}"/><stop offset="${r1 / 200}" stop-color="${c1}"/></radialGradient>`;
  svg.innerHTML = `<defs>
    ${ring('g-major', 148, 198, '#0c6b51', '#27d6a2')}
    ${ring('g-minor', 100, 148, '#23428f', '#5f90ff')}
    ${ring('g-dim', 60, 100, '#7a2c22', '#ff7d66')}
    <radialGradient id="g-hub" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#2a2a31"/><stop offset="1" stop-color="#0a0a0c"/></radialGradient>
    <filter id="w-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter></defs>`;
  document.body.prepend(svg);
})();
