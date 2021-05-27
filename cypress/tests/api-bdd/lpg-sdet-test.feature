@lpg
Feature: Get the city Attraction using REST API

    As QA
    I want to check REST API response
    Background: Set Base URL
        Given I set base URL as "lpg_url"

    Scenario: Get All Citys
        Then I set header "Content-Type" as "application/json"
        Then I set header "User-agent" as "lpg"
        When I GET "/citys"
        Then Verify response status code is 200
       # Then Verify response body should contain "New York"
      