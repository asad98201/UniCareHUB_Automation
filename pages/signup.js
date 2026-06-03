import { test } from '@playwright/test';

class Signup {
  constructor(page) {
    this.page = page;
    this.name = this.page.getByPlaceholder('Enter your name');
    this.email = this.page.getByPlaceholder('Enter email');
    this.phNumber = this.page.getByPlaceholder('Enter phone number (e.g., 0412 345 678)');
    this.password = this.page.getByPlaceholder('Enter password');
    this.confirmPassword = this.page.getByPlaceholder('Confirm password');
  }

  async attachScreenshot(name) {
    await test.info().attach(name, {
      body: await this.page.screenshot(),
      contentType: 'image/png',
    });
  }

  async fillSignupForm(namee, email, phNumber, password, confirmPassword) {
    await this.name.fill(namee);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.phNumber.fill(phNumber);
    await this.confirmPassword.fill(confirmPassword);
    await this.attachScreenshot(' After Credentials Entered');
  }

  async create() {
    await this.page.getByRole('button', { name: 'create' }).click();
    await this.attachScreenshot('After clicking create button');
  }

  async navigateToSignupPage() {
    await this.page.goto('https://unicarehub.com.au/');
    await this.page.getByRole('link', { name: 'Sign In' }).click();
    await this.page.getByRole('link', { name: 'SignUp' }).click();
    await this.attachScreenshot('Signup page');
  }
}

export default Signup;
