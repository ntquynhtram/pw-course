import { test } from '@playwright/test';
test("test 3", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    const newTask = page.locator("//input[@id='new-task']");
    const addTask = page.locator("//button[@id='add-task']");
    for (let i = 1; i <= 100; i++) {
        await newTask.fill("Todo " + `${i}`)
        await addTask.click()
    }

    page.on('dialog', async dialog => dialog.accept());

    for (let i = 1; i <= 100; i++) {
        const deleteTask = page.locator(`//button[@id='todo-${i}-delete']`)
        if (i % 2 !== 0) {
            await deleteTask.click();
        }
    }
});

