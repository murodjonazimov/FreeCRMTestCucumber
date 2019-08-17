$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/murodjonazimov/eclipse-workspace/FreeCRMTestCucumber/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "azimovmuradjan",
        "mura9780879"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login botton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User move to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Quit the chrome",
  "keyword": "And "
});
formatter.match({
  "location": "DealStepDefenition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4072281559,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.title_of_login_page_is_CRMPRO_CRM()"
});
formatter.result({
  "duration": 54703852,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 257413470,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_clicks_on_login_botton()"
});
formatter.result({
  "duration": 1442477240,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_on_home_page()"
});
formatter.result({
  "duration": 4872980,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_move_too_new_contact_page()"
});
formatter.result({
  "duration": 860054915,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_enters_and_and(DataTable)"
});
formatter.result({
  "duration": 139535439,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.quit_the_chrome()"
});
formatter.result({
  "duration": 95182957,
  "status": "passed"
});
});