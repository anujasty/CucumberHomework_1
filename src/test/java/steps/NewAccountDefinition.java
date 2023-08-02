package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.DashboardPage;
import pages.LoginPage;
import pages.ManageAccountsPage;
import pages.NewAccountPage;
import pages.TestBase;

public class NewAccountDefinition extends TestBase {

	LoginPage loginPage;
	DashboardPage dashboardPage;
	NewAccountPage newAccountPage;
	ManageAccountsPage manageAccountsPage;

	static String expectedNewAccountHeaderText = "Add New Account";
	//static String expectedMSG = "Account Created Successfully";

	static String expectedManageAccountsHeaderText = "Manage Accounts";
	static String expectedAccountCreationStatusText = "Account Created Successfully";

	@Given("User clicks on bank and cash menu")
	public void user_clicks_on_bank_and_cash_menu() {
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		try {
			dashboardPage.clickBankAndCashButton();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Given("User clicks on new account")
	public void user_clicks_on_new_account() {
		try {
			dashboardPage.clickNewAccount();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Then("User should land on add new account page")
	public void user_should_land_on_add_new_account_page() {
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
		try {
			newAccountPage.validateNewAccountPage(expectedNewAccountHeaderText);
		} catch (InterruptedException e) { 
			e.printStackTrace();
		}
	}

	@And("User enters account title as {string}")
	public void user_enters_accounttitle_as(String accountTitle) {
		newAccountPage.enterAccountTitle(accountTitle);
	}

	@And("User enters description as {string}")
	public void user_enters_description_as(String description) {
		newAccountPage.enterDescription(description);
	}

	@And("User enters initial balance as {string}")
	public void user_enters_initial_balance_as(String initialBalance) {
		newAccountPage.enterInitialBalance(initialBalance);
	}

	@And("User enters account number as {string}")
	public void user_enters_account_number_as(String accountNumber) {
		newAccountPage.enterAccountNumber(accountNumber);
	}

	@And("User enters contact person as {string}")
	public void user_enters_contact_person_as(String contactPerson) {
		newAccountPage.enterContactPerson(contactPerson);
	}

	@And("User enters phone as {string}")
	public void user_enters_phone_as(String phone) {
		newAccountPage.enterPhone(phone);
	}

	@And("User enters internet banking url as {string}")
	public void user_enters_internet_banking_url_as(String internetBankingUrl) {
		newAccountPage.enterInternetBankingUrl(internetBankingUrl);
	}

	@And("User clicks on submit button")
	public void user_clicks_on_submit_button() {
		newAccountPage.clickSubmitButton();
	}

	@Then("User should land on manage accounts page")
	public void user_should_land_on_manage_accounts_page() {
		manageAccountsPage = PageFactory.initElements(driver, ManageAccountsPage.class);
		try {
			manageAccountsPage.validateManageAccountsPage(expectedManageAccountsHeaderText);
			// manageAccountsPage.validateInsertedAccount();

		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("User should be displayed account created successfully message")
	public void user_should_be_displayed_account_created_successfully_message() {
		manageAccountsPage = PageFactory.initElements(driver, ManageAccountsPage.class);
		try {
			manageAccountsPage.validateAccountCreationMsg(expectedAccountCreationStatusText);

		} catch (InterruptedException e) { 
			e.printStackTrace();
		}
	}

}
