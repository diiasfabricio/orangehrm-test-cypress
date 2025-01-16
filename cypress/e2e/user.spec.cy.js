import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module", 
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='dd-mm-yyyy']",
    dateCloseButton: ".--close",
    subimitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text--arrow"

  }

 

  it.only('User infor Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstnameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastnameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('nNTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('EmpIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('otIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('dLNTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2027-03-25')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNTest')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNTest')
    // cy.get(selectorsList.genericField).eq(12).clear().type('militarySTest')
    // cy.get(':nth-child(2) > .oxd-checkbox-wrapper > label').click()
    // cy.get(selectorsList.genericField).eq(11).clear().type('tFieldTest')
    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(28)').click()
    cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.subimitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.genericComboBox).eq(2).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(6)').click()
    cy.get(selectorsList.subimitButton).eq(1).click({force: true})
    cy.get('body').should('contain', 'Successfully Saved')
  })
  it('Login com fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})