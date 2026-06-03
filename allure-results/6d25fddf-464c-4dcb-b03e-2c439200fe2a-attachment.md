# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup.spec.js >> Signup tests >> create account
- Location: tests\signup.spec.js:6:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Welcome Back!')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Welcome Back!')

```

```yaml
- button
- heading "Welcome to Unicare" [level=1]
- heading "Sign Up" [level=2]
- paragraph: Create an account to get started
- text: Your Name *
- textbox "Enter your name": AsadTester01
- text: Phone Number *
- textbox "Enter phone number (e.g., 0412 345 678)": "+61432231567"
- text: Email *
- textbox "Enter email": asad123@gmail.com
- text: Password *
- textbox "Enter password": Tester@123
- button
- text: Confirm Password *
- textbox "Confirm password": Tester@123
- button
- button "Create"
- paragraph:
  - text: Already have an account?
  - link "SignIn":
    - /url: /auth/login
- img "Signup illustration"
- region "Notifications (F8)":
  - list:
    - listitem:
      - text: Sign-up failed For security purposes, you can only request this after 3 seconds.
      - button
- alert
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import Signup from '../pages/signup.js';
  3  | import signupData from '../data/signupData.json';
  4  | 
  5  | test.describe('Signup tests', () => {
  6  |     test('create account',async ({page}) =>{
  7  |         const signup = new Signup(page);
  8  |     
  9  |     await test.step('Navigate to signup page', async () => {
  10 |         await signup.navigateToSignupPage();
  11 | 
  12 |     });   
  13 | 
  14 |     await test.step('Filling the signup form', async () => {
  15 |         await signup.fillSignupForm(signupData.name,signupData.email,signupData.phNumber,signupData.password,signupData.confirmPassword);
  16 |     });
  17 | 
  18 |     await test.step('Clicking Create Button', async () => {
  19 |         await signup.create();
  20 |     });
  21 | 
  22 |     await test.step('Assertion/Verification', async () => {
> 23 |         await expect(page.getByText("Welcome Back!")).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  24 |     });
  25 | 
  26 | 
  27 | });
  28 | });
  29 | 
```