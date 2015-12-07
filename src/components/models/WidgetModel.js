/*
 * Copyright (c) 2014 DataTorrent, Inc. ALL Rights Reserved.
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

angular.module('ui.dashboard')
  .factory('WidgetModel', function ($log) {

    function defaults() {
      return {
        title: 'Widget',
        size: {
          sizeX: 1,
          sizeY: 1,
          row: 0,
          col: 0,
        }
      };
    };

    // constructor for widget model instances
    function WidgetModel(widgetDefinition, overrides, overrideDataModelOptions) {
  
      // Extend this with the widget definition object with overrides merged in (deep extended).
      var widgetDef = angular.copy(widgetDefinition);
      if (overrideDataModelOptions)
        delete widgetDef['dataModelOptions'];

      angular.extend(this, defaults(), _.merge(widgetDef, overrides));
    }

    WidgetModel.prototype = {
      serialize: function () {
        return _.pick(this, ['title', 'name', 'style', 'size', 'dataModelOptions', 'attrs', 'storageHash']);
      }
    };

    return WidgetModel;
  });