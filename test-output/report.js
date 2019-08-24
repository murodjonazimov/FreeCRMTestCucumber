$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/murodjonazimov/eclipse-workspace/FreeCRMTestCucumber/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#\tGiven User is already on login page"
    },
    {
      "line": 6,
      "value": "#\tWhen Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support."
    },
    {
      "line": 7,
      "value": "#\tThen User enters \"azimovmuradjan\" and \"mura9780879\""
    },
    {
      "line": 8,
      "value": "#\tThen User clicks on login botton"
    },
    {
      "line": 9,
      "value": "#\tThen User on home page"
    },
    {
      "line": 10,
      "value": "#\tAnd Quit the chrome"
    },
    {
      "line": 12,
      "value": "# With Examples keywords"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks on login botton",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Quit the chrome",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "azimovmuradjan",
        "mura9780879"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"azimovmuradjan\" and \"mura9780879\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks on login botton",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Quit the chrome",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3753746359,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_login_page_is_CRMPRO_CRM()"
});
formatter.result({
  "duration": 47785753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "azimovmuradjan",
      "offset": 13
    },
    {
      "val": "mura9780879",
      "offset": 34
    }
  ],
  "location": "LoginStepDefenition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 263354099,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_botton()"
});
formatter.result({
  "duration": 1891879174,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_on_home_page()"
});
formatter.result({
  "duration": 5526341,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.quit_the_chrome()"
});
formatter.result({
  "duration": 93889066,
  "status": "passed"
});
});