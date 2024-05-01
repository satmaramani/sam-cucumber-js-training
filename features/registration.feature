@registration
Feature: User Registration

    @positive
    Scenario: Successful Registration
        Given a user navigates to the registration page
        When the user fills in the registration form with valid details
        Then the user should see a success message

    @invalid
    Scenario: Registration with Invalid Email
        Given a user navigates to the registration page
        When the user fills in the registration form with an invalid email
        Then the user should see an error message

    @weak @invalid @positive
    Scenario: Registration with Weak Password
        Given a user navigates to the registration page
        When the user fills in the registration form with a weak password
        Then the user should see an error message