@API
Feature: Pokemon GET /pokemon/{pokemon_name or id}
    Background: Set the base url
        Given I set base URL as "pokemon_api"
    
    @smoke @test
    Scenario: Fetch data for a pokemon using API and verify it
        Then I set header "Content-Type" as "application/json"
        Given I GET "/pikachu"
        # Given As a user I want to execute Pokemon GET api for Pokemon "pikachu"
        Then Verify response status code is 200
        And Verify response details for Pokemon "pikachu"


    @smoke @test @negative
    Scenario: Fetch data for an invalid pokemon using API and verify it
        Given I GET "/doraemon"
        # Given As a user I want to execute Pokemon GET api for Pokemon "doraemon"
        Then Verify response status code is 404