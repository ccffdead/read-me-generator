// Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license) {
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
  contentsArr.forEach((item) => {
    if (item.content) {
      dataList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
    }
  });
  return dataList;
};

//Creates a function that returns installation instructions
const renderInstall = install => {
  if(install) {
    return `To use this project please install the following:\`\`\` ${install} \`\`\``
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link

function renderLicense(license) {
  if (license) {
    return `This is licensed under ${license} license.`;
  } else {

    // If there is no license, return an empty string

    return '';
  }
};

//Creates a function that returns what the application was built with

const renderBuilt = built => {
  let all = '';

  if (built) {
    built.forEach(item => {
      all += ` *${item}`
    });
    return `${all}`;
  } else {
    return '';
  };
};

//Creates a function that returns use instructions

const renderUse = (use) => {
  return `${use}`
};

//Creates a function that returns how to test the app

const renderTest = test => {
  if (test) {
    return `To use our applictaion install \`\`\` ${test} \`\`\` and run \`node index.js\` from your terminal.`
  } else {
    return '';
  }
};

//Creates a function that returns contact info
const renderContact = (email, github, repository) => {
  if (email) {
    return `If you have any further questions, please contact me at ${email}. You can also find any addtional files at (https://github.com/${github}/${repository}). Thanks!`
  } else {
    return '';
  }
};

//Creates a function to generate markdown for README

function generateMarkdown(data) {
  const { title, github, repository, license } = data;
  let rmContents = '';
  const sectionArr = [
    {
      header: 'License',
      content: renderLicense(license)
    },
    {
      header: 'Installation',
      content: renderInstall(data.install)
    },
    {
      header: 'Use',
      content: renderUse(data.use)
    },
    {
      header: 'Built With',
      content: renderBuilt(data['built'])
    },
    {
      header: 'Contact',
      content: renderContact(data.contact, repository, github)
    },
    {
      header: 'Test',
      content: renderTest(data.test)
    },
    {
      header: 'Contribution',
      content: data.contribution
    },
  ];

  //Forms Content Section

  sectionArr.forEach((sectionData) => {
    if (sectionData.content && sectionData.header === 'Table of Contents') {
      readmeData += `### ${sectionData.header}${sectionData.content}`;
    } else if (sectionData.content) {
      rmContents += `## ${sectionData.header}${sectionData.content}`;
    }
  })

  return `# ${title}
[![Issues](https://img.shields.io/github/issues/${github}/${repository
    })](https://github.com/${github}/${repository
    }/issues) [![Issues](https://img.shields.io/github/contributors/${github
    }/${repository})](https://github.com/${github}/${repository
    }/graphs/contributors) ${renderLicenseBadge(license)}
## Description
${renderDescription(title, data.disc, data.link)}
## Contents
${renderToc(sectionArr)}
${rmContents}`;
}

module.exports = generateMarkdown;