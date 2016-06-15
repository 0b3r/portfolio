'use strict';

import logoDirective from './logo.directive';
import './logo.scss';

const logoModule = angular.module('logo-module', []);

logoModule
  .directive('logo', logoDirective);

export default logoModule;
