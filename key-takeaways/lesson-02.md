GIT 

3 Stages in GIT

- working directory
- staging area
- repository

- git init: khởi tạo working directory, staging area, repository
- git add <ten_file>: đưa file đó vào staging area
- git add <ten_file1> <ten_file2> : đưa những file đó vào staging
- git add .: đưa tất cả file từ working directory vào staging area
- git commit: đưa tất cả file từ staging area lên repo


-------------------------------------
git status: kiểm tra trạng thái của repo hiện tại

- những file màu đỏ: đang ở working directory
- những file màu xanh lá cây: đang staging
- những file đã commit rồi sẽ không được hiển thị

--------------------------------------
git cấu hình

git config --global user.name = "My Name"
git config --global user.mail = "Your Email"
 => cấu hình mặc định cho tất cả repo

git config user.name => cấu hình riêng cho repo, ghi đè lên cấu hình mặc định

git log => check author của tất cả commit (name & email)


git config --list => liệt kê ra các config



----------------------------------------------------


git - commit convention
<type>: <short_description>

type: loại commit
- chore: sửa nhỏ lẻ, chính tả
- feat: thêm tính năng mới, testcase mới
- fix: sửa lỗi 1 test trước đó

Ex: 
git commit -m"fix: update code for PRD_002"
git commit -m"feat: add code for PRD_003"
git commit -m"chore: add comment for function"


----------------------------------------------------
JavaScript

console.log("Hello, World!");

node <ten_file>

comment code: // single line hoặc /* code block */ 


----
biến (variable) thay đổi được
khai báo biến: let myName = "Ngoc"; 
const không thay đổi được
const pi = 3,14;

-----
Data type

- Nguyên thủy (Primitive types)
String: "chuỗi", 'Hello', `Age: 10` (backtick)
Number: số nguyên(10), số thực (1.5), Infinity(100 / 0), NaN (1000/hello)
Boolean: True/False
Undefined
Null
Symbol
BigInt
- kiểu tham chiếu(reference types)
Object

check data type: typeof <variable>

------------
Toán tử so sánh

console.log(8<10) => true

Toán tử toán học

Toán tử logic && ||



True && true => true
True && false => false
false && false => false


true || false => true
true || true => true
false || false => false


-------------------
Toán tử 1 ngôi

Prefix: toán tử nằm ở phía trước, tăng trước, trả về sau
++x;
--x
Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
x++ 
x--

let a =10;
b = ++a; //tăng. a lên 11 rồi trả về => b có giá trị là 11

let c = 10;
d = c++; //trả c = 10 về => d có giá trị = 10, sau đó tăng c lên 11

