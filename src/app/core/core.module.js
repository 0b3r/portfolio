'use strict';

const shared = angular.module('core.shared', []);

require('./directives/menu-icon/menu-icon.directive')(shared);
require('./animations/intro/intro.directive')(shared);
require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/store.factory')(shared);
require('./services/resolver.provider')(shared);

export default shared;
