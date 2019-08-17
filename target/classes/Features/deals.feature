Feature: Deal data creation

Scenario: Free CRM Create a new deal scenario
	Given User is already on login page
	When Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.
	Then User enters username and password
	| azimovmuradjan | mura9780879 |
	Then User clicks on login botton
	Then User on home page
	Then User move to new deal page
	Then User enters deal details 
	| test deal | 1000 | 50 | 10 |
#	| test deal | 2000 | 80 | 20 | it is little bit haddek use Scenario Outline Exemples 
	And Quit the chrome
