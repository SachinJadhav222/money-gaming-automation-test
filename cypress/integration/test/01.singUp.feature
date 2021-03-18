Feature: Visit Money Gaming Web app and sign up

   As a user
   I want to Sign up to app

   Scenario: Login with valid credentials
      Given I visit "moneyGamingWeb"
      Then I should see page title "Play Online Casino Games Now | MoneyGaming.com"
      Then I click on "loc01_join_now_button"
      Then I shloud see "loc02_registration_journey" is visible
      #user details
      Then I select "Mr" from dropdown at "loc2_title_dropdown"
      Then I entered "firstname" at "loc2_first_name"
      Then I entered "lastname" at "loc2_surname"
      Then I click on "loc02_accept_terms_checkbox"
      Then I click on "loc02_join_now_button"
      #field error
      Then I should see "This field is required" at "loc02_required_filed_ERROR"
      
     

  

