/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
const fs = require('fs');
const path = require('path');

const { globSync } = require('glob');

const parse = require('./utils/lcov-parse');

// Function to generate percentage
const getPercentage = (covered, total) => {
  return total === 0 ? 100 : ((covered / total) * 100).toFixed(2);
};

// Function to generate HTML report
const generateHtmlReport = (data) => {
  let html = `
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .good { background-color: #dff0d8; }
        .warning { background-color: #fcf8e3; }
        .danger { background-color: #f2dede; }
      </style>
    </head>
    <body>
      <h1>Coverage Report</h1>
      <table>
        <tr>
          <th>File</th>
          <th>Lines</th>
          <th>Functions</th>
          <th>Branches</th>
        </tr>
  `;

  data.forEach((file) => {
    const linePercentage = getPercentage(file.lines.hit, file.lines.found);
    const fnPercentage = getPercentage(
      file.functions.hit,
      file.functions.found,
    );
    const branchPercentage = getPercentage(
      file.branches.hit,
      file.branches.found,
    );

    html += `
      <tr>
        <td>${file.file}</td>
        <td class="${linePercentage >= 80 ? 'good' : linePercentage >= 50 ? 'warning' : 'danger'}">${linePercentage}% (${file.lines.hit}/${file.lines.found})</td>
        <td class="${fnPercentage >= 80 ? 'good' : fnPercentage >= 50 ? 'warning' : 'danger'}">${fnPercentage}% (${file.functions.hit}/${file.functions.found})</td>
        <td class="${branchPercentage >= 80 ? 'good' : branchPercentage >= 50 ? 'warning' : 'danger'}">${branchPercentage}% (${file.branches.hit}/${file.branches.found})</td>
      </tr>
    `;
  });

  html += `
      </table>
    </body>
    </html>
  `;

  return html;
};

// Function to generate text report
const generateTextReport = (data) => {
  let text = 'Coverage Summary:\n\n';

  let totalLines = { found: 0, hit: 0 };
  let totalFunctions = { found: 0, hit: 0 };
  let totalBranches = { found: 0, hit: 0 };

  data.forEach((file) => {
    totalLines.found += file.lines.found;
    totalLines.hit += file.lines.hit;
    totalFunctions.found += file.functions.found;
    totalFunctions.hit += file.functions.hit;
    totalBranches.found += file.branches.found;
    totalBranches.hit += file.branches.hit;
  });

  text += `Lines: ${getPercentage(totalLines.hit, totalLines.found)}% (${totalLines.hit}/${totalLines.found})\n`;
  text += `Functions: ${getPercentage(totalFunctions.hit, totalFunctions.found)}% (${totalFunctions.hit}/${totalFunctions.found})\n`;
  text += `Branches: ${getPercentage(totalBranches.hit, totalBranches.found)}% (${totalBranches.hit}/${totalBranches.found})\n`;

  return text;
};

// Main function
const generateReports = async (lcovPath, outputDir) => {
  try {
    const lcov = await parse(lcovPath);
    const htmlReport = generateHtmlReport(lcov);
    const textReport = generateTextReport(lcov);

    fs.writeFileSync(path.join(outputDir, 'coverage-report.html'), htmlReport);
    fs.writeFileSync(path.join(outputDir, 'coverage-summary.txt'), textReport);

    console.log('Reports generated successfully!');
  } catch (error) {
    console.error('Error generating reports:', error);
  }
};

async function combineResults(path) {
  try {
    const files = globSync(path);
    const mergedReport = files.reduce(
      (mergedReport, currFile) => (mergedReport += fs.readFileSync(currFile)),
      '',
    );
    await fs.writeFile(
      path.resolve('./coverage/lcov.info'),
      mergedReport,
      (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      },
    );
  } catch (error) {
    console.error(error);
  }
}

// Usage
combineResults('coverage/**/lcov.info');

const lcovPath = path.join(__dirname, '..', 'coverage', 'lcov.info');
const outputDir = path.join(__dirname, '..', 'coverage');

generateReports(lcovPath, outputDir);
