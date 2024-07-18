const { Project } = require('ts-morph');
const fs = require('fs');

// Initialize a ts-morph project
const project = new Project({
  tsConfigFilePath: './libs/abstract-core/tsconfig.json',
});

// Function to extract JSDoc description from a node
function getJSDocDescription(node) {
  const jsDocs = node.getJsDocs();
  if (jsDocs.length === 0) return '';
  return jsDocs[0].getInnerText();
}

// Function to extract parameter details
function getParameterDetails(parameters) {
  return parameters.map(param => {
    const paramName = param.getName();
    const paramType = param.getType().getText();
    return `${paramName}: ${paramType}`;
  }).join(', ');
}

// Function to simplify type names by removing import paths
function simplifyTypeName(typeName) {
  return typeName.replace(/import\(.*?\)\./g, '');
}

// Function to generate markdown table for functions and methods
function generateMarkdownTable(sourceFile) {
  let table = '| Function | Description | Parameters | Returns |\n| --- | --- | --- | --- |\n';

  // Process top-level functions
  sourceFile.getFunctions().forEach(func => {
    const name = func.getName();
    const description = getJSDocDescription(func);
    const parameters = getParameterDetails(func.getParameters());
    const returnType = func.getReturnType().getText();
    table += `| ${name} | ${description} | ${parameters} | ${returnType} |\n`;
  });

  // Process classes and their methods
  sourceFile.getClasses().forEach(cls => {
    cls.getMethods().forEach(method => {
      const className = cls.getName();
      const methodName = `${className}.${method.getName()}`;
      const description = getJSDocDescription(method);
      const parameters = getParameterDetails(method.getParameters());
      const returnType =  simplifyTypeName(method.getReturnType().getText());
      table += `| ${methodName} | ${description} | ${parameters} | ${returnType} |\n`;
    });
  });

  return table;
}

// Parse the specified TypeScript file
const sourceFile = project.addSourceFileAtPath('./libs/abstract-core/src/lib/abstract-core.ts');

// Generate markdown table
const markdownTable = generateMarkdownTable(sourceFile);

// Write the markdown table to a file
fs.writeFileSync('./docs/functions.md', markdownTable);

console.log('Markdown table generated successfully!');
