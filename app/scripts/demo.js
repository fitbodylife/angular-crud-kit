'use strict';

/**
 * @ngdoc overview
 * @name crudKit.demo
 * @description
 * # crudKit.demo
 *
 * Demo site for crudKit.
 */
angular
    .module('crudKit.demo', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'crudKit',
        'ui.ace'
    ])
    .config(['$routeProvider', 'crudKitConfigProvider', function ($routeProvider, crudKitConfigProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        crudKitConfigProvider.addSchema('Widget', {
                "$schema":  "http://json-schema.org/draft-04/schema",
                "title":    "ACME Widget",
                "description": "Some description of the widget.",
                "type":     "object",
                "properties": {
                    "title": {
                        "title":"Title",
                        "description":"Something to describe this Widget",
                        "type":["string", "null"]
                    },

                    "email": {
                        "title":"Email",
                        "type":["string", "null"],
                        "format":"email"
                    },

                    "someInt":{
                        "title":"Some Integer",
                        "type": ['integer', 'null'],
                        "default": 150
                    },

                    "useful": {
                        "title":"Useful",
                        "type":"boolean",
                        "default": false
                    },

                    "context_id": {
                        "title":"Context",
                        "enum":['Chinese','English']
                    },

                    "created": {
                        "title":"Date Created",
                        "format":"date-time"
                    },

                    "summary": {
                        "title":"Summary",
                        "type":"string",
                        "format":"textarea"
                    }
                },
                "required": ["title", "summary","context_id"]
            }
        );
    }]);

