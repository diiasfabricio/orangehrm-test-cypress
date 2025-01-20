class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='dd-mm-yyyy']",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            subimitButton: "[type='submit']",    
        }   

        return selectors

    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployeeDetails (employeeId, otherId, driverLicense, driversLicenseDate, ssnNuber, sinNuber) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
        // cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNuber)
        // cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNuber)
    }

    saveForm() {
        cy.get(this.selectorsList().subimitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemCombobox).click({force: true})
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemCombobox).click({force: true})
    }

}

export default MyInfoPage