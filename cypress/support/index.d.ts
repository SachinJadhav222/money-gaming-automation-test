declare namespsce Cypress{
    interface Chainable<Subject =any>{
        /**
         * Click DOM Element in the website application
         * @example
         * cy.login('email','password').click()  //Click button
         */
       login(email: string, password: string Chainable <Subject> )
        /**
        * Get Selector Custom command
        * It will filter the selector based on xpath or not
        * No need to pspecity special xapath comand , thsi can ahndle all get selector commands
        */
       getSelector(selector: string)
       
    };
    

    // interface Chainable<Subject =any>{
    //   /**
    //     * Get Selector Custom command
    //     * It will filter the selector based on xpath or not
    //     * No need to pspecity special xapath comand , thsi can ahndle all get selector commands
    //     */
    //    getSelector(selector: string)
    // };

}