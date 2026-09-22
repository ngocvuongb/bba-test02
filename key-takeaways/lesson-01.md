
Playwright: là một framework
Ưu điểm: 
- Cross browser
- Cross platform
- Report đầy đủ thông tin
- Code gen

git cấu hình

git config --global user.name "My Name"
git config --global user.mail "My Email"
 => cấu hình mặc định cho tất cả repo

git config user.name => cấu hình riêng cho repo, ghi đè lên cấu hình mặc định

Config branch default
git config --global init.defaultBranch main

Câu lệnh khởi tạo dự án Playwright
npm init playwright@latest

Câu lệnh tạo SSH key:: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Câu lệnh khởi tạo repo Git: git init
Câu lệnh add remote git: git remote add origin <remote url>
Câu lệnh thêm code vào vùng staging: git add .
Câu lệnh push code lên GitHub: git push origin main