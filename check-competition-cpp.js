const fs = require('fs');
const vm = require('vm');
const files = [
  'competition-cpp-1.js',
  'competition-cpp-2.js',
  'competition-cpp-3.js',
  'competition-cpp-4.js',
  'competition-cpp-5.js',
  'competition-cpp-6.js',
  'competition-cpp-main.js',
  'competition-cpp-exams.js'
];
const sandbox = {};
vm.createContext(sandbox);
for (const f of files) {
  try {
    const code = fs.readFileSync(f, 'utf8');
    vm.runInContext(code, sandbox, {filename: f});
    console.log('loaded', f);
  } catch (e) {
    console.error('WARN: error running', f, '-', e && e.message ? e.message : e);
    // continue to next file
  }
}

// Checks
const checks = [];
for (let i=1;i<=6;i++) {
  const name = 'phase'+i;
  checks.push(`${name} defined=${typeof sandbox[name] !== 'undefined'}`);
}
checks.push('database defined=' + (Array.isArray(sandbox.database) ? 'true len='+sandbox.database.length : String(typeof sandbox.database)));
checks.push('examLibrary keys=' + (sandbox.examLibrary ? Object.keys(sandbox.examLibrary).join(',') : 'undefined'));
checks.push('renderExams type=' + (typeof sandbox.renderExams));
if (typeof sandbox.renderExams === 'function') {
  const s = sandbox.renderExams.toString();
  checks.push('renderExams contains "Danh sách bài thi"=' + (s.indexOf('Danh sách bài thi')!==-1));
}
console.log(checks.join('\n'));
