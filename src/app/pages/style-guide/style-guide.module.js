'use strict';

import route from './style-guide.route';
import './style-guide.scss';

const styleGuidePageModule = angular.module('style-guide-module', [
  'ui.router'
]);

styleGuidePageModule
    .config(route);

export default styleGuidePageModule;
