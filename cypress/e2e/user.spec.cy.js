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
    cy.get(selectorsList.genericField).eq(3).clear().type('EmpIdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('otIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('dLNTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2027-03-25')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('tFieldTest')
    cy.get(selectorsList.subimitButton).eq(1).click()
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