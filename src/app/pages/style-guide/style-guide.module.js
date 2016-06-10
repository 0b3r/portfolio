'use strict';

import route from './style-guide.route';
import './main.scss';

const mainPageModule = angular.module('main-module', [
  'ui.router'
]);

mainPageModule
    .config(route);

export default mainPageModule;
