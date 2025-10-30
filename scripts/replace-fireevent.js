const fs = require('fs');
const path = require('path');

// Simple codemod: replace imports of fireEvent and occurrences of fireEvent. with userEvent.
// NOTE: This is a best-effort text replacement. Complex cases (adding userEvent.setup() and await)
// may need manual adjustments. Run this on staged files via lint-staged before commit.

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      // skip node_modules and .git
      if (file === 'node_modules' || file === '.git') return;
      walk(filepath, filelist);
    } else if (/\.tsx?$/.test(file)) {
      filelist.push(filepath);
    }
  });
  return filelist;
}

function replaceInFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // replace import { fireEvent } from '@testing-library/react' -> import userEvent from '@testing-library/user-event'
  content = content.replace(/import\s+\{\s*fireEvent\s*\}\s+from\s+['"]@testing-library\/react['"];?/g, "import userEvent from '@testing-library/user-event';");

  // replace other forms like import { fireEvent, screen } ...
  content = content.replace(/import\s+\{([^}]*)fireEvent([^}]*)\}\s+from\s+['"]@testing-library\/react['"];?/g, (m, a, b) => {
    const rest = (a + b).replace(/[,\s]*$/, '');
    if (rest.trim()) {
      return `import { ${rest} } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';`;
    }
    return "import userEvent from '@testing-library/user-event';";
  });

  // naive replacement of fireEvent. -> userEvent.
  content = content.replace(/fireEvent\./g, 'userEvent.');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
}

if (require.main === module) {
  const cwd = process.cwd();
  const files = walk(cwd);
  files.forEach(replaceInFile);
}

module.exports = { walk, replaceInFile };
