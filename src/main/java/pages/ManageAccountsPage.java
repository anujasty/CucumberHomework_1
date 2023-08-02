package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ManageAccountsPage extends TestBase {
	WebDriver driver;

	NewAccountPage newAccountPage;

	public ManageAccountsPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[2]/div/div/div[1]")
	WebElement Manage_Accounts_Header_Element;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement Account_Creation_Status_Header_Element;

	public void validateManageAccountsPage(String expectedText) throws InterruptedException {
		Thread.sleep(1000);
		validateElement(Manage_Accounts_Header_Element.getText(), expectedText,
				"Manage Accounts Page is not avaialble!");
	}
	
	//Msg that is displayed is "Account Created Succesfully".  However, when used getText() on that
	//element it brings back "x/nAccount Created Succesfully".
	//x in the message is not a lower case x or upper case X.  So, just trimmed the first two and compared.
	public void validateAccountCreationMsg(String expectedText) throws InterruptedException {
		Thread.sleep(1000);
		validateElement((Account_Creation_Status_Header_Element.getText().substring(2)), expectedText,
				"New Account has not been created successfully!");
	}

}
