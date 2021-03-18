# This feature is based on simple aproch 
# We are sending input value and webelement itself through step defination
# e.g.  Then I entered "firstname" at "loc2_first_name"
#   In the above step we are entering "Fristname (this is input value)"  and  "loc2_first_name" is webelement  stored into saperate file.
#   In step definition we read the input value, and we get the webelement form locator file and then perform action.
#   With this approch coading and mentainance gets fairly easy.


Feature: Password validation feature

   As a user
   I want to check validity of the passowrd 

   Scenario Outline: Invalid passowrd error message
      Given I visit "moneyGamingWeb"
      Then I should see page title "Play Online Casino Games Now | MoneyGaming.com"
      Then I click on "loc01_join_now_button"
      Then I shloud see "loc02_registration_journey" is visible
      #user details
      Then I select "Mr" from dropdown at "loc2_title_dropdown"
      Then I entered "firstname" at "loc2_first_name"
      Then I entered "lastname" at "loc2_surname"
      Then I entered "01-January-1981" at "loc2_dob"
      Then I entered "lastname@gmail.com" at "loc2_email"
      Then I entered "address1" at "loc2_address1"
      Then I entered "London" at "loc2_city"

      # user details and passowrd 
      Then I entered "user123" at "loc2_username"
      Then I entered "<invalid_password>" at "loc2_password1"
    
      #field error
      Then I should see "<password_error_messsage>" at "loc02_required_filed_ERROR"

      Examples:
          | invalid_password       | password_error_messsage                                                                                  | 
          |  Pass                  | Password must be at least 6 characters long with at least one number and at least one special character  |
          |  Password              | Password must be at least 6 characters long with at least one number and at least one special character  |
          |  Password123           | Password must be at least 6 characters long with at least one number and at least one special character  | 
          |  Password##            | Password must be at least 6 characters long with at least one number and at least one special character  |
      
    
    Scenario Outline: Both Passowrd value does  NOT match
      Given I visit "moneyGamingWeb"
      Then I should see page title "Play Online Casino Games Now | MoneyGaming.com"
      Then I click on "loc01_join_now_button"
      Then I shloud see "loc02_registration_journey" is visible
      #user details
      Then I select "Mr" from dropdown at "loc2_title_dropdown"
      Then I entered "firstname" at "loc2_first_name"
      Then I entered "lastname" at "loc2_surname"
      Then I entered "01-January-1981" at "loc2_dob"
      Then I entered "lastname@gmail.com" at "loc2_email"
      Then I entered "address1" at "loc2_address1"
      Then I entered "London" at "loc2_city"

      # user details and passowrd 
      Then I entered "user123" at "loc2_username"
      Then I entered "<first_password>" at "loc2_password1"
      Then I entered "<cofirm_password>" at "loc2_password2"
    
      #field error
      Then I should see "<password_error_messsage>" at "loc02_required_filed_ERROR"

      Examples:
          | first_password   |  confirm_password  | password_error_messsage |                                                                                 | 
          |  Password#123    | 123#password       | Both Password must match |