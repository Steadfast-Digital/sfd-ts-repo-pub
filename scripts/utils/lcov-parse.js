/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/naming-convention */
const fs = require('fs').promises;
const path = require('path');

async function parseLcovFile(filePath) {
  try {
    const lcovData = await fs.readFile(filePath, 'utf8');
    return parseLcovString(lcovData);
  } catch (error) {
    throw new Error(`Error reading LCOV file at ${filePath}: ${error.message}`);
  }
}

function parseLcovString(str) {
  const data = [];
  let currentItem = initializeItem();

  const lines = str.split('\n');
  lines.forEach((line) => {
    line = line.trim();
    const [key, value] = line.split(':');

    if (!key) return;

    switch (key.toUpperCase()) {
      case 'TN':
        currentItem.title = value.trim();
        break;
      case 'SF':
        currentItem.file = value.trim();
        break;
      case 'FNF':
        currentItem.functions.found = Number(value.trim());
        break;
      case 'FNH':
        currentItem.functions.hit = Number(value.trim());
        break;
      case 'LF':
        currentItem.lines.found = Number(value.trim());
        break;
      case 'LH':
        currentItem.lines.hit = Number(value.trim());
        break;
      case 'DA':
        const [lineNumber, lineHit] = value.split(',');
        currentItem.lines.details.push({
          line: Number(lineNumber),
          hit: Number(lineHit),
        });
        break;
      case 'FN':
        const [fnLine, fnName] = value.split(',');
        currentItem.functions.details.push({
          name: fnName,
          line: Number(fnLine),
        });
        break;
      case 'FNDA':
        const [fnHits, fnNameDA] = value.split(',');
        const funcDetail = currentItem.functions.details.find(
          (i) => i.name === fnNameDA,
        );
        if (funcDetail) {
          funcDetail.hit = Number(fnHits);
        }
        break;
      case 'BRDA':
        const [branchLine, block, branch, taken] = value.split(',');
        currentItem.branches.details.push({
          line: Number(branchLine),
          block: Number(block),
          branch: Number(branch),
          taken: taken === '-' ? 0 : Number(taken),
        });
        break;
      case 'BRF':
        currentItem.branches.found = Number(value.trim());
        break;
      case 'BRH':
        currentItem.branches.hit = Number(value.trim());
        break;
      case 'END_OF_RECORD':
        data.push(currentItem);
        currentItem = initializeItem();
        break;
    }
  });

  return data;
}

function initializeItem() {
  return {
    lines: {
      found: 0,
      hit: 0,
      details: [],
    },
    functions: {
      hit: 0,
      found: 0,
      details: [],
    },
    branches: {
      hit: 0,
      found: 0,
      details: [],
    },
  };
}

async function parse(filePath) {
  try {
    const stats = await fs.stat(filePath);
    if (stats.isFile()) {
      const data = await parseLcovFile(filePath);
      return data;
    } else {
      throw new Error(`The path provided is not a file: ${filePath}`);
    }
  } catch (error) {
    throw new Error(`Error parsing LCOV: ${error.message}`);
  }
}

module.exports = parse;
module.exports.parseLcovString = parseLcovString;
