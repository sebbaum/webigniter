/**
 * Questions to ask the user in order to configure the web project.
 */
module.exports = [
  {
    'type': 'input',
    'name': 'projectName'
  },
  {
    type: 'confirm',
    name: 'installJquery',
    message: 'Do you want to use jquery?',
    default: false
  },
  {
    type: 'confirm',
    name: 'localGit',
    message: 'Do you want to init a local git repository?',
    default: true
  },
  {
    type: 'confirm',
    name: 'startCoding',
    message: 'Do you want to start coding right away?',
    default: true
  }
  // ...
];
