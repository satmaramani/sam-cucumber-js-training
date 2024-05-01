Feature: Data Passing Between Steps

    @positive
    Scenario: Store and Retrieve Data Between Steps
        Given the user has an initial balance of $100
        When the user deposits $50
        And the user withdraws $30
        Then the user should have a remaining balance of $120