@BankAndCashFeature
Feature: Techfios billing login page functionality validation

  Scenario Outline: User should be able to login with valid credentials
    Given User is on the techfios login page
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User clicks on Sign in button
    Then User should land on dashboard page

    Examples: 
      | username          | password |
      | demo@techfios.com | abc123   |

  Scenario Outline: User should be able to add new account
    Given User clicks on bank and cash menu
    Given User clicks on new account
    Then User should land on add new account page
    And User enters account title as "<account_title>"
    And User enters description as "<description>"
    And User enters initial balance as "<initial_balance>"
    And User enters account number as "<account_number>"
    And User enters contact person as "<contact_person>"
    And User enters phone as "<phone>"
    And User enters internet banking url as "<internet_banking_url>"
    And User clicks on submit button
    Then User should land on manage accounts page
    Then User should be displayed account created successfully message
    
    Examples: 
      | account_title | description             | initial_balance | account_number   | contact_person | phone | internet_banking_url  |
      | AJ's Business Acct | Brand New Business Acct |         2000000 | 4321443214324132 | Capt America   | 32323 | https://techfios.com/ |
