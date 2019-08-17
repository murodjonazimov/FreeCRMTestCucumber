//package stepDefenitions;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.github.bonigarcia.wdm.WebDriverManager;
//import junit.framework.Assert;
//
//public class LoginStepDefenition {
//	
//	WebDriver driver;
//	Actions action;
//	
//	
//	@Given("^User is already on login page$")
//	public void user_already_on_login_page() {
//		WebDriverManager.chromedriver().setup();
//		driver = new ChromeDriver();
//		driver.get("https://classic.crmpro.com");
//		//driver.manage().window().fullscreen();
//	}
//
//	@When("^Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support\\.$")
//	public void title_of_login_page_is_CRMPRO_CRM() {
//		String title = driver.getTitle();
//		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
//		
//	}
//
//	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_username_and_password(String username, String password) {
//		driver.findElement(By.name("username")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);
//	}
//
//	@Then("^User clicks on login botton$")
//	public void user_clicks_on_login_botton() {
//		driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input")).submit();
////		JavascriptExecutor js = (JavascriptExecutor)driver;
////		js.executeScript("arguments[0].click", loginBtn);
//	}
//
//	@Then("^User on home page$")
//	public void user_on_home_page() {
//		String homePageTitle = driver.getTitle();
//		System.out.println("Home Page title is :" + homePageTitle);
//		Assert.assertEquals("CRMPRO", homePageTitle);
//	}
//	
//	@Then("^User move too new contact page$")
//	public void user_move_too_new_contact_page() {
//		driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//	}
//
//	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_and_and(String firstName, String lastName, String position, String midName, String nickName) {
//		driver.findElement(By.id("first_name")).sendKeys(firstName);
//		driver.findElement(By.id("surname")).sendKeys(lastName);
//		driver.findElement(By.id("company_position")).sendKeys(position);
//		driver.findElement(By.xpath("//input[@name = \"middle_initial\"]")).sendKeys(midName);
//		driver.findElement(By.name("nickname")).sendKeys(nickName);
//		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//		
//		
//	}
//
//	@Then("^Quit the chrome$")
//	public void quit_the_chrome() {
//		driver.quit();
//	}
//
//
//
//
//	
//	
//	
//}
