/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with this
 * work for additional information regarding copyright ownership. The ASF
 * licenses this file to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var App = require('app');

/**
 * @class
 * 
 * This is a view for showing cluster CPU metrics
 * 
 * @extends App.ChartLinearTimeView
 * @extends Ember.Object
 * @extends Ember.View
 */
App.ChartServiceMetricsMapReduce_JobsStatus = App.ChartLinearTimeView.extend({
  id: "service-metrics-mapreduce-jobs-status",
  title: "Jobs Status",
  renderer: 'line',
  url: function () {
    return App.formatUrl(App.apiPrefix + "/clusters/{clusterName}/services/MAPREDUCE/components/JOBTRACKER?fields=metrics/mapred/jobtracker/jobs_completed[{fromSeconds},{toSeconds},{stepSeconds}],metrics/mapred/jobtracker/jobs_preparing[{fromSeconds},{toSeconds},{stepSeconds}],metrics/mapred/jobtracker/jobs_failed[{fromSeconds},{toSeconds},{stepSeconds}],metrics/mapred/jobtracker/jobs_submitted[{fromSeconds},{toSeconds},{stepSeconds}],metrics/mapred/jobtracker/jobs_failed[{fromSeconds},{toSeconds},{stepSeconds}],metrics/mapred/jobtracker/jobs_running[{fromSeconds},{toSeconds},{stepSeconds}]", {
      clusterName: App.router.get('clusterController.clusterName')
    }, "/data/services/metrics/mapreduce/jobs_status.json");
  }.property('App.router.clusterController.clusterName'),

  transformToSeries: function (jsonData) {
    var seriesArray = [];
    if (jsonData && jsonData.metrics && jsonData.metrics.mapred && jsonData.metrics.mapred.jobtracker) {
      for ( var name in jsonData.metrics.mapred.jobtracker) {
        var displayName;
        var seriesData = jsonData.metrics.mapred.jobtracker[name];
        switch (name) {
          case "jobs_running":
            displayName = "Running";
            break;
          case "jobs_failed":
            displayName = "Failed";
            break;
          case "jobs_completed":
            displayName = "Succeeded";
            break;
          case "jobs_preparing":
            displayName = "Preparing";
            break;
          case "jobs_submitted":
            displayName = "Submitted";
            break;
          default:
            break;
        }
        if (seriesData) {
          // Is it a string?
          if ("string" == typeof seriesData) {
            seriesData = JSON.parse(seriesData);
          }
          // We have valid data
          var series = {};
          series.name = displayName;
          series.data = [];
          for ( var index = 0; index < seriesData.length; index++) {
            series.data.push({
              x: seriesData[index][1],
              y: seriesData[index][0]
            });
          }
          seriesArray.push(series);
        }
      }
    }
    return seriesArray;
  }
});