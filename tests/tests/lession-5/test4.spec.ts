import { test } from '@playwright/test';
test("test 4", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='04-xpath-personal-notes.html']");
    const title = ["click", "fill", "type", "hover", "check", "uncheck", "selectOption", "press", "dblclick", "dragAndDrop"];
    const content = ["Hàm click dùng để thực hiện click vào các phần tử trên trang web", "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web", "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng", "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích  hoạt các hiệu ứng hover", "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần  tử ở trạng thái checked", "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng  thái unchecked", "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select  dropdown", "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab,  Escape hoặc các phím khác", "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử  trên trang web", "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí  đích trên trang web"];
    const addTitle = page.locator("//input[@id='note-title']");
    const addContent = page.locator("//textarea[@id='note-content']");
    const saveTitle = page.locator("//button[@id='add-note']");
    for (let i = 0; i < title.length; i++) {
        await addTitle.fill(title[i]);
        await addContent.fill(content[i]);
        await saveTitle.click();
    }
    await page.locator("//input[@id='search']").fill("một hoặc nhiều");
});


