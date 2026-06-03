import {test,expect} from '@playwright/test';
import Signup from '../pages/signup.js';
import signupData from '../data/signupData.json';

test.describe('Signup tests', () => {
    test('create account',async ({page}) =>{
        const signup = new Signup(page);
    
    await test.step('Navigate to signup page', async () => {
        await signup.navigateToSignupPage();

    });   

    await test.step('Filling the signup form', async () => {
        await signup.fillSignupForm(signupData.name,signupData.email,signupData.phNumber,signupData.password,signupData.confirmPassword);
    });

    await test.step('Clicking Create Button', async () => {
        await signup.create();
    });

    await test.step('Assertion/Verification', async () => {
        await expect(page.getByText("Welcome Back!").first()).toBeVisible();
    });


});
});
