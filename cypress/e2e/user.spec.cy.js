import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashBoardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashBoardPage =  new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User infor Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashBoardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')   
    myInfoPage.fillEmployeeDetails('Employe Id', 'Other Id', 'Drive Licence Number', '2025-07-29', '123456', '987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
   
  })

  it('Login - fail', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessIvalid()
  })
})