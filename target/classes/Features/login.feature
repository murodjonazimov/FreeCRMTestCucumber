Feature: Free CRM login Feature

#Without examples keyword
#Scenario: Free CRM Login Test Scenario
#	Given User is already on login page
#	When Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.
#	Then User enters "azimovmuradjan" and "mura9780879"
#	Then User clicks on login botton
#	Then User on home page
#	And Quit the chrome

# With Examples keywords
@SmokeTest
Scenario Outline: Free CRM Login Test Scenario
	Given User is already on login page
	When Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.
	Then User enters "<username>" and "<password>"
	Then User clicks on login botton
	Then User on home page
	And Quit the chrome
Examples: 
	| username 			 | password 	|
	| azimovmuradjan | mura9780879|
	

