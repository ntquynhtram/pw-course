# LESSION3
## GIT
### Undo
- change commit message: `git commit --admen -m<message>`
- revert 1 file cụ thể từ stg về working derictory: `git restore --staged<file>`
- revert 1 folder từ stg về working directory: `git restore --staged<folder>/*`
- revert về (n) commit trước đó: `git reset HEAD~N`
### Branching model
- sử dụng nhánh đểlàm việc mà không ảnh hưởng đến main branch
- tạo 1 nhánh mới `git branch <tên branch>`
- switch qua 1 nhánh cụ thể `git checkout <tên branch>`
- vừa tạo và đồng thời switch qua nhánh mới `git checkout -b <tên branch>`
- xoá branch `git checkout --D <tên branch>` (phải đứng ở nhánh khác với nhánh muốn xoá)
### Ignore file
- file `.gitignore` dùng để untracked những file chỉ định
- ignore 1 file cụ thể thì nhập tên file: `file1.txt`
- ignore tất cả file có cùng đuôi: `*.txt`
- ignore tất cả các file có cùng đuôi trong 1 folder: `folder/**/*.txt`
- không ignore file này: `!file1.txt`
## JAVASCRIPT
### Convention
- dùng để code theo format chung
- 1 số convention phổ biến:
    - snake_case: không dùng
    - kabe-case: dùng cho tên file và folder
    - camelCase: dùng cho tên biến và hàm
    - PascalCase: đặt tên class
### Console.log nâng cao
- console.log ('toi la Nga'); -> truyền chuỗi
- console.log ("toi la Nga"); -> truyền chuỗi
- console.log (`${toi la Nga}`); -> truyền biến
### Object
- lưu dữ liệu kiểu key-value
    - key: giống quy tắc đặt tên biến và luôn là 1 string
    - value: có thể là string, number, boolen... hoặc 1 object khác
### Array
- dùng để tạo mảng
- độ dài mảng
    - bắt đầu từ 0
    - kết thúc là length-1
- vidu: `Arr = [a,b,c];`
### Function
- là 1 hàm, dùng để đặt tên và có thể tái sử dụng
- thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể