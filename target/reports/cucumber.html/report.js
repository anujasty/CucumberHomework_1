$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/NewAccount.feature");
formatter.feature({
  "name": "Techfios billing login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BankAndCashFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BankAndCashFeature"
    }
  ]
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepsDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepsDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepsDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepsDefinition.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able to add new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on bank and cash menu",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on new account",
  "keyword": "Given "
});
formatter.step({
  "name": "User should land on add new account page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters account title as \"\u003caccount_title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters initial balance as \"\u003cinitial_balance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters account number as \"\u003caccount_number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters contact person as \"\u003ccontact_person\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters phone as \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters internet banking url as \"\u003cinternet_banking_url\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on manage accounts page",
  "keyword": "Then "
});
formatter.step({
  "name": "User should be displayed account created successfully message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "account_title",
        "description",
        "initial_balance",
        "account_number",
        "contact_person",
        "phone",
        "internet_banking_url"
      ]
    },
    {
      "cells": [
        "AJ\u0027s Business Acct",
        "Brand New Business Acct",
        "2000000",
        "4321443214324132",
        "Capt America",
        "32323",
        "https://techfios.com/"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to add new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BankAndCashFeature"
    }
  ]
});
formatter.step({
  "name": "User clicks on bank and cash menu",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_clicks_on_bank_and_cash_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on new account",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_clicks_on_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on add new account page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_should_land_on_add_new_account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters account title as \"AJ\u0027s Business Acct\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_accounttitle_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters description as \"Brand New Business Acct\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_description_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters initial balance as \"2000000\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_initial_balance_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters account number as \"4321443214324132\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_account_number_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters contact person as \"Capt America\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_contact_person_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters phone as \"32323\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_phone_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters internet banking url as \"https://techfios.com/\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_enters_internet_banking_url_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on manage accounts page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_should_land_on_manage_accounts_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed account created successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NewAccountDefinition.user_should_be_displayed_account_created_successfully_message()"
});
formatter.result({
  "status": "passed"
});
});