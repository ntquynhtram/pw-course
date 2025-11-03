import { test } from 'playwright/test';
test("test 1", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
    await page.locator("//input[@id='username']").fill("Tram");
    await page.locator("//input[@id='email']").fill('quynhtram@gmail.com');
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='reading']").check();
    await page.locator("//select[@id='interests']").selectOption({ value: 'art' });
    await page.locator("//select[@id='country']").selectOption({ value: 'canada' });
    await page.locator("//input[@id='dob']").fill("1998-11-09");
    await page.locator("//inp[@id='profile']").setInputFiles("tests/tests/lession-5/test2.spec.ts");
    await page.locator("//textarea[@id='bio']").fill("My name is Tram");
    await page.locator("//input[@id='rating']").fill("8");
    await page.locator("//input[@id='newsletter']").click();
    await page.locator("//span[@class='slider round']").click();
    await page.locator("//button[@type='submit']").click();
})