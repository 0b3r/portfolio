'use strict';

function StyleGuideController($log) {
  'ngInject';

  const self = this;
  self.tableContents = [
    {
      name: 'UI Color Palette',
      link: ''
    },
    {
      name: 'Logo',
      link: ''
    },
    {
      name: 'Icons',
      link: ''
    },
    {
      name: 'Buttons',
      link: ''
    },
    {
      name: 'Shapes',
      link: ''
    },
    {
      name: 'Font Stacks',
      link: ''
    },
    {
      name: 'Headings',
      link: ''
    },
    {
      name: 'Content Block',
      link: ''
    },
    {
      name: 'Media',
      link: ''
    },
    {
      name: 'Form',
      link: ''
    }
  ];

  self.palette = {
    primary: {
      light: '#c5eff7',
      medium: '#52b3d9',
      dark: '#446cb3'
    },
    accent: {
      light: '#81cfe0',
      medium: '#22a7f0',
      dark: '#1e8bc3'
    },
    gradient: [
      { val: '#e4f1fe' }, 
      { val: '#c5eff7' },
      { val: '#89c4f4' },
      { val: '#6bb9f0' },
      { val: '#59abe3' },
      { val: '#3498d8' },
      { val: '#2574a9' }
    ],
    font: {
      primary: '87%',
      secondary: '54%',
      hint: '25%',
      dividers: '12%'
    }
    
  }

}

export default StyleGuideController;
