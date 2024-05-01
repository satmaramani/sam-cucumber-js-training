Feature: User Login

    Scenario Outline: Successful Login with Valid Credentials
        Given the user is on the login page
        When the user enters their username "<username>" and password "<password>" and "<other>"
        And the user clicks the login button
        Then the user should be redirected to the dashboard

        Examples:
            | username            | password     | other    |
            | user1DuringTraining | pass123      | other1   |
            | user2               | pass456      | other2   |
            | user3               | pass789      | other3   |
            | user4               | passForUser4 | asdfasdf |