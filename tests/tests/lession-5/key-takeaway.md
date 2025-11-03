# LESSION 5
## JavaScript
### Function Advance
- Function expression
    - Định nghĩa function bằng cách gắn cho nó 1 biến
    - const add = function(a,b) {
        return add = a+b;
    };
- Lambda function
    - Cách viết ngắn gọn hơn cho function
    - Bỏ từ khoá function và sử dụng dấu `=>`
    - const add = (a,b) => {
        return add = a+b;
    };
    - Nếu chỉ có 1 dòng code thì có thể rút gọn cặp {} -> const add = (a,b) => a+b;
- Anonymous function
    - Là 1 function ẩn danh
    - Chỉ dùng 1 lần hoặc dùng để callback cho 1 hàm khác
## DOM
### DOM
- Khi vào 1 trang web:
    - Con nguời sẽ nhìn thấy website dưới dạng: text, hình ảnh, các ô input, các liên kết...
    - Máy tính sẽ nhìn thấy website dưới dạng hình cây có cấu trúc
        - Nhấn F12, chọn Element (click chuột phải, chọn Inspect, Elemet)
        - Cấu trúc này được gọi là DOM (Document object model)
### Các thẻ HTML thường gặp
- Có nhiều loại thẻ khác nhau:
    - Thẻ tiêu chuẩn: thẻ do tổ chức uy tín mozilla định nghĩa
        - Thẻ Cấu Trúc Cơ Bản
            - `<html>`: Thẻ gốc của trang
            - `<head>`: Chứa metadata: tiêu đề website, hiển thị Google
            - `<body>`: Nội dung của cả website hiển thị
            - `<div>`: Khối/container chung
            - `<span>`: Inline container
            - `<header>`, `<footer>`, `<nav>`, `<section>`: Thẻ ngữ nghĩa
        - Thẻ Nội Dung:
            - `<h1>` đến `<h6>`: Tiêu đề
            - `<p>`: Đoạn văn
            - `<a>`: Liên kết
            - `<img>`: Hình ảnh
            - `<ul>`, `<ol>`, `<li>`: Danh sách
        - Thẻ Form (Quan trọng cho Testing):
            - `<form>`: Biểu mẫu
            - `<input>`: Ô nhập liệu (text, password, checkbox, radio, etc.)
            - `<button>`: Nút bấm
            - `<select>` và `<option>`: Dropdown
            - `<textarea>`: Vùng văn bản nhiều dòng
    - Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa
### Selector
- Automation có nghĩa là tuơng tác (fill, input, click, delete) với các phần tử trên trang web 1 cách tự động
- Để tương tác được ta cần tìm được các phần tử và selector là công cụ giúp tìm các phần từ
- Có 3 loại selector:
    - XPath
        - Dùng cho hầu hết các trường hợp (99,99%)
        - Đa dạng, có thể tìm đc các phần tử khó tìm
        - Hơi dài
        - Có 2 loại:
            - Tuyệt đối: đi dọc theo cây DOM: bắt đầu bởi 1 /
            - Tương đối: tìm dựa vào đặc tính: bắt đầu bởi 2 // `//tenthe[@thuoctinh=”giatri”]`
        - Nên dùng tương đối
    - CSS selector
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm
        - Không linh hoạt bằng XPath
    - Playwright selector
        - Chỉ dùng riêng cho Playwright
        - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - Hướng tới “giống người dùng đang nhìn thấy gì”
- Playwright selector > CSS Selector > XPath
## Playwright basic syntax
- test: Đơn vị cơ bản để khai báo một test
- step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
- step nên được map 1-1 với test case để dễ dàng maintain

import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});`
- Navigate: `await page.goto('https://pw-practiceplaywrightvn.com/');`
- Locate: Sử dụng page.locator(“<selector>”) để chọn phần tử trên trang `page.locator(“//input[@id=’email’]”)`
- Click:
    - Single click:
    `await page.locator("//button").click();`
    - Double click:
    `await page.locator("//button").dblclick();`
    - Click chuột phải:
    `await page.locator("//button").click({button: 'right'});`
    - Click chuột kèm bấm phím khác:
    `await page.locator("//button").click({modifiers: ['Shift'],})`
- Input:
    - Fill: giống việc copy, paste content vào một ô input 
    `await page.locator("//input").fill('Playwright Viet Nam')`
    - PressSequentially: giống việc bạn gõ từng chữ cái vào ô input
    `await page.locator("//input").pressSequentially('Playwright Viet Nam',{delay: 100,});`
- Radio/checkbox
    - Lấy giá trị hiện tại đang là check hay không:
`const isChecked = page.locator("//input").isChecked();`
    - Check/ uncheck
`await page.locator("//input").check();`
`await page.locator("//input").setChecked(false);`
- Select: `await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })`
- Upload file `await page.locator("//input[@id='profile']").setInputFiles("<file-path>");`