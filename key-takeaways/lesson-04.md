Object

let sinhVien = {
	tuoi: 21,
	hoTen: "Vuong Bao Ngoc",
	diaChi: {
	   soNha: 12,
	   duong: "Nguyen Chi Thanh"		
	}

}


console.log(sinhVien.tuoi);
console.log(sinhVien.diaChi.soNha)

khai báo: {} hoặc new Object()
Truy xuất .key hoặc ["key"]
Thêm/sửa obj.key = value
xóa delete obj.key
lồng nhau: value là Object 

---------
Array
- Mảng là kiểu dữ liệu để lưu trữ một danh sách (có thứ tụ) các giá trị

khai báo: let monHoc = ["Toan", "Ly", "Hoa"]
index: bắt đầu từ 0
Truy xuất dữ liệu:
lấy theo phần tử [index]
lấy phần tử cuối cùng [array.length-1]
đếm số phần tử: array.lenght
gán lại giá trị theo index: array[index] = value

thêm phần tử cuối: array.push(value)
xóa phần tử cuối: array.pop()
thêm vào đầu: array.unshift(value)
xóa phần tử đầu: array.shift()

console.log(`Hoc sinh ${i+1}: ${diemSo[i]} điểm`)



-----------

Function
- Hàm là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết code

Khai báo:  function tenHam() {
	//code block	
	}

Quy tắc đặt tên:
camelCase, bắt đầu bằng động từ, diễn tả hành động mà hàm thực hiện. 


Parameter (tham số): tên biến đặt trong ngoặc khi khai báo
function chao(ten) {
	console.log ("Xin chao" + ten + "!")
}

Khi gọi hàm thì điền tham số vào


Argument (đối số) - giá trị truyền vào () khi gọi => chao("Lan")



------
Array - Utils functions


forEach () : duyệt qua từng phần tử của mảng
courses[]


courses.forEach(function(course, index){
	console.log(course)
})



every() : kiểm tra tất cả phần tử của mảng thỏa mãn điều kiện, trả về True/False
courses.every(function(course, index){
	return course.coin === 0;
})


some() : kiểm tra ít nhất 1 phần tử của mảng thỏa mãn điều kiện, trả về True/False



find(): kiểm tra và trả về 1 phần tử thỏa mãn điều kiện


filter(): kiểm tra và trả về tất cả phần tử thỏa mãn điều kiện



map() : chỉnh sửa/thay đổi element của array, trả về mảng mới


courses.map(function(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
	index
    };
});


reduce() : 
mảng.reduce(function(biến_tích_lũy, phần_tử_hiện_tại) {
    return giá_trị_tích_lũy_mới;
}, giá_trị_khởi_tạo);

function coinHandler(accumulator, currentValue, currentIndex, originArray){

}

courses.reduce(coinHandler,0)