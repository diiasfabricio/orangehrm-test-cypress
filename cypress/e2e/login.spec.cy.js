import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashBoardPage'

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - fail', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessIvalid()
  })
  
  it('Login - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoardPage.checkDashboardPage()
   
  })

  
})