Feature: Deal data creation

  Scenario: Free CRM Create a new deal scenario
    Given User is already on login page
    When Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.
    Then User enters username and password
      | username       | password    |
      | azimovmuradjan | mura9780879 |
    Then User clicks on login botton
    Then User on home page
    Then User move to new deal page
    Then User enters deal details
      | title      | amount | probability | commission |
      | test deal1 |   1000 |          50 |         10 |
      | test deal2 |   2000 |          60 |         20 |
      | test deal3 |   3000 |          70 |         30 |
    And Quit the chrome
