//package stepDefenitions;
//
//import java.util.List;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.github.bonigarcia.wdm.WebDriverManager;
//import junit.framework.Assert;
//
//public class DealStepDefenition {
//	WebDriver driver;
//	Actions action;
//
//	@Given("^User is already on login page$")
//	public void user_already_on_login_page() {
//		WebDriverManager.chromedriver().setup();
//		driver = new ChromeDriver();
//		driver.get("https://classic.crmpro.com");
//		// driver.manage().window().fullscreen();
//	}
//	
//	@When("^Title of login page is CRMPRO - CRM software for customer relationship management, sales, and support\\.$")
//	public void title_of_login_page_is_CRMPRO_CRM() {
//		String title = driver.getTitle();
//		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
//		
//	}
//	@Then("^User enters username and password$")
//	public void user_enters_username_and_password(DataTable credantiols) {
//		List<List<String>> data = credantiols.raw();
//		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//	}
//	@Then("^User clicks on login botton$")
//	public void user_clicks_on_login_botton() {
//		driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input")).submit();
////		JavascriptExecutor js = (JavascriptExecutor)driver;
////		js.executeScript("arguments[0].click", loginBtn);
//	}
//	@Then("^User on home page$")
//	public void user_on_home_page() {
//		String homePageTitle = driver.getTitle();
//		System.out.println("Home Page title is:" + homePageTitle);
//		Assert.assertEquals("CRMPRO", homePageTitle);
//	}
//	@Then("^User move to new deal page$")
//	public void user_move_too_new_contact_page() {
//		driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//	}
//	@Then("^User enters deal details$")
//	public void user_enters_and_and(DataTable dealData) {
//		List<List<String>> dealValue = dealData.raw();
//		driver.findElement(By.id("title")).sendKeys(dealValue.get(0).get(0));
//		driver.findElement(By.id("amount")).sendKeys(dealValue.get(1).get(1));
//		driver.findElement(By.id("probability")).sendKeys(dealValue.get(0).get(2));
//	    driver.findElement(By.id("commission")).sendKeys(dealValue.get(0).get(3));
//		//driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//
//	}
//	@Then("^Quit the chrome$")
//	public void quit_the_chrome() {
//		driver.quit();
//	}
//	
//}
