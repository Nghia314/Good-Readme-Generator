// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Project license](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ## Descriptions
  ${data.description}

  ## Table of Contents
  * [installation](#installation)
  * [usage](#usage)
  * [contributing](#contributing)
  * [tests](#tests)
  * [license](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  
  Github Username: ${data.username}

  Github Profile: www.github.com/${data.username}/

  Email address: ${data.email}
`;
}

module.exports = generateMarkdown;
