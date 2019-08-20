$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/murodjonazimov/eclipse-workspace/FreeCRMTestCucumber/src/main/java/Features/dealsMap.feature");
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "azimovmuradjan",
        "mura9780879"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login botton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User move to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Quit the chrome",
  "keyword": "And "
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3538635848,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.title_of_login_page_is_CRMPRO_CRM()"
});
formatter.result({
  "duration": 6766546,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.User_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 179379759,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.user_clicks_on_login_botton()"
});
formatter.result({
  "duration": 1715585308,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.user_on_home_page()"
});
formatter.result({
  "duration": 33211167,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.user_move_too_new_contact_page()"
});
formatter.result({
  "duration": 861125783,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.User_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 5090718016,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapStepDefenition.quit_the_chrome()"
});
formatter.result({
  "duration": 94028378,
  "status": "passed"
});
});