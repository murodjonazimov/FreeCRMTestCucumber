Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario
	Given User is already on login page
	When Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support.
	Then User enters "<username>" and "<password>"
	Then User clicks on login botton
	Then User on home page
	Then User move too new contact page
	Then User enters "<firstName>" and "<lastName>" and "<position>" and "<midName>" and "<nickName>" 
	And Quit the chrome
	
	Examples:
	| username  		 | password 	  | firstName | lastName | position | midName | nickName |
	| azimovmuradjan | mura9780879  | Micheal   | Jacson   | Manager  | H			  | MJ       |
	| azimovmuradjan | mura9780879  | Tom			  | Mayson   | SDET     | A		    | TY			 |
	| azimovmuradjan | mura9780879  | Rasel     | Cruse    | QA       | T 		  | RC       |
	| azimovmuradjan | mura9780879  | Laura     | Fabian   | DevOps   | U			  | Fabi     |

