// Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if(license) {
    return `![${license}](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-green);`
  } else {
   
    // If there is no license, return an empty string
   
    return '';
  }
};

// Creates a function that returns a description

const renderDescription = (title, disc, link) => {
  if (link) {
    return `${disc}
    
  View the application at [${title}](${link}).`;
  } else {
    return `${disc}`;
  }

};

// Creates a function that returns TOC

const renderToc = contentsArr => {
  let dataList = '';
  contentsArr.forEach((item)=> {
    if (item.content) {
      dataList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
    }
  });
  return dataList;
};

// TODO: Create a function that returns the license link

function renderLicense(license) {
  if(license) {
    return `This is licensed under ${license} license.`;
  } else {
    
  // If there is no license, return an empty string

    return '';
  }
}

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
