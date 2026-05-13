
Feature: Login Funcionality

    Background:
        Given User is on the login page

    Scenario: Successful login with valid credentials
        When User enters username "standard_user" and password "secret_sauce"
        And User clicks on the login button
        Then User should be logged in successfully

    Scenario: Unsuccessful login with invalid credentials
        When User enters username "standard_user" and password "invalid_password"
        And User clicks on the login button
        Then User should see an error message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Login with locked account
        When User enters locked account username "locked_out_user" and password "secret_sauce"
        And User clicks on the login button
        Then User should see an error message indicating account is locked "Epic sadface: Sorry, this user has been locked out."