// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //return `![](https://img.shields.io/badge/label-${data.licensing}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![](https://img.shields.io/badge/label-${data.licensing}-green)
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.comInstall}

  ## Usage
  ${data.repo}

  ## License
  This project is licensed under the ${data.licensing} license.

  ## Contributing
  If you would like to contribute:
  ${data.contribute}

  ## Tests
  To run tests, run the following command:
  
  ${data.comTest}
  
  ## Questions
  If you have any questions or comments about the repo, open an issue or ${data.contribute}.
  More repos at [Github:${data.githubName}](https://github.com/${data.githubName}).

`;
}

module.exports = generateMarkdown;
