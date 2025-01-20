import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashBoardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance();
const loginPage = new LoginPage()
const dashBoardPage =  new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User infor Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashBoardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last() , chance.last())   
    myInfoPage.fillEmployeeDetails(chance.string({min: 8, max: 10}), chance.string({min: 8, max: 10}), chance.natural(), '1994-29-11', '123456', '987654')
    myInfoPage.fillStatus() 
    myInfoPage.saveForm()
    
   
  })

  
})