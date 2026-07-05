const fs = require('fs');
const tools = [
  { name: 'capcut', text: 'CapCut', color: '#000000' },
  { name: 'davinci', text: 'DaVinci', color: '#ff5722' },
  { name: 'higgsfield', text: 'Higgsfield', color: '#8a2be2' },
  { name: 'veo_3', text: 'VEO 3', color: '#32cd32' },
  { name: 'opus', text: 'Opus', color: '#ff1493' },
  { name: 'elevenlabs', text: 'ElevenLabs', color: '#1e90ff' }
];

tools.forEach(t => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <rect width="512" height="512" fill="#ffffff"/>
    <text x="256" y="276" font-family="Arial, sans-serif" font-weight="bold" font-size="80" fill="${t.color}" text-anchor="middle" alignment-baseline="middle">${t.text}</text>
  </svg>`;
  fs.writeFileSync('./public/images/' + t.name + '.svg', svg);
});
console.log('SVGs updated successfully.');
