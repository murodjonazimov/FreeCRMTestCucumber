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
  "location": "DealStepDefenition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3768530233,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.title_of_login_page_is_CRMPRO_CRM()"
});
formatter.result({
  "duration": 7459710,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 199245697,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_clicks_on_login_botton()"
});
formatter.result({
  "duration": 584836930,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_on_home_page()"
});
formatter.result({
  "duration": 37869268,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id mainpanel\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Murodjons-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:491:cbc3:fd83:d008%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:982)\n\tat stepDefenitions.DealStepDefenition.switchToFrame(DealStepDefenition.java:21)\n\tat stepDefenitions.DealStepDefenition.user_on_home_page(DealStepDefenition.java:53)\n\tat ✽.Then User on home page(/Users/murodjonazimov/eclipse-workspace/FreeCRMTestCucumber/src/main/java/Features/dealsMap.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "DealStepDefenition.user_move_too_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefenition.user_enters_and_and(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefenition.quit_the_chrome()"
});
formatter.result({
  "status": "skipped"
});
});