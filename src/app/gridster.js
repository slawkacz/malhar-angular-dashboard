/*
 * Copyright (c) 2014 Slawkacz, Inc. ALL Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
angular.module('app').controller('GridsterDemoCtrl', function ($scope, $timeout, $window, widgetDefinitions, defaultWidgets) {
  $scope.dashboardOptions = {
    widgetButtons: true,
    widgetDefinitions: widgetDefinitions,
    defaultWidgets: [],
    storage: $window.localStorage,
    storageId: 'demo_gridster'
  };
  $scope.gridsterOpts = {
    resizable: {
       enabled: false
    },
    draggable: {
      enabled: false
    }
  };
  $timeout(function(){
    console.log('enabled draggable and resizable')
    $scope.gridsterOpts.resizable.enabled = true;
    $scope.gridsterOpts.draggable.enabled = true;
  },5000);
});