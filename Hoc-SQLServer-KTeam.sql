/*
Ngôn ngữ truy vấn dữ liệu cấu trúc
SQL (Structured Query Language)
Oracle đi vào thị trường ngách vì tính bảo mật đó là điểm độc đáo nổi bật hơn SQL
Sản phẩm quan hệ không sử dụng trong môi trường UNIX
Cơ sở dữ liệu định hướng
SQL phát âm "ess kyoo ell" hay là sequel
Ngôn ngữ truy vấn tiếng Anh có cấu trúc != Ngôn ngữ truy vấn có cấu trúc
*/
-- Thực thi (F5)

--Tạo Database
CREATE DATABASE [HocSQL]

--Truy vấn đến database
USE [HocSQL]
GO

--Tạo bảng Table
CREATE TABLE [Bang_1]
(
	[Ma_Bang_1] INT,
	[Ten_Bang_1] NVARCHAR(10)
)
GO

--UNIQUE: duy nhất trong toàn bộ bảng không thể có hai giá trị trùng nhau
--NOT NULL: trường đó không được phép NULL
--DEFAULT: sẽ bằng giá trị đã được gán khi không INSERT trường đó
CREATE TABLE [Bang_2]
(
	[Ma_Bang_2] INT UNIQUE NOT NULL,
	[Ten_Bang_2] NVARCHAR(10) DEFAULT 'LKD'
)
GO

CREATE TABLE [Bang_3]
(
	[Ma_Bang_3] INT,
	[Ten_Bang_3] NVARCHAR(10),
	[Ngay_Sinh] DATE,
	[Nam] BIT,
	[Dia_Chi] CHAR(20),
	[Tien_Luong] FLOAT
)
GO

--Trường khóa chính phải có từ khóa Not Null
--C1: Tạo khóa chính
CREATE TABLE [Bang_4]
(
	[Ma_Bang_4] INT NOT NULL PRIMARY KEY,
	[Ten_Bang_4] NVARCHAR(10) DEFAULT 'LKD'
)
GO

--C2: Tạo khóa chính
CREATE TABLE [Bang_5]
(
	[Ma_Bang_5] INT NOT NULL,
	[Ten_Bang_5] NVARCHAR(10) DEFAULT 'LKD',
	PRIMARY KEY([Ma_Bang_5])
)
GO

--C3: Tạo khóa chính
CREATE TABLE [Bang_6]
(
	[Ma_Bang_6] INT NOT NULL,
	[Ten_Bang_6] NVARCHAR(10) DEFAULT 'LKD',
	CONSTRAINT PK_Bang_6 PRIMARY KEY ([Ma_Bang_6]) 
)
GO

--C4: Tạo khóa chính
CREATE TABLE [Bang_7]
(
	[Ma_Bang_7] INT NOT NULL,
	[Ten_Bang_7] NVARCHAR(10) DEFAULT 'LKD'
)
GO
ALTER TABLE [Bang_7] ADD PRIMARY KEY ([Ma_Bang_7])

--C5: Tạo khóa chính
CREATE TABLE [Bang_8]
(
	[Ma_Bang_8] INT NOT NULL,
	[Ten_Bang_8] NVARCHAR(10) DEFAULT 'LKD'
)
GO
ALTER TABLE [Bang_8] ADD CONSTRAINT PK_Bang_8 PRIMARY KEY([Ma_Bang_8])

--Sửa bảng: Thêm cột
ALTER TABLE [Bang_1] ADD [Noi_Dung] NVARHCAR(20)
GO
--Xóa toàn bộ dữ liệu của bảng
TRUNCATE TABLE [Bang_1]

--Xóa bảng trong database
DROP TABLE [Bang_2]
GO

/*
Kiểu dữ liệu trong SQL
-- int: kiểu số nguyên
-- float: kiểu số thực
-- char: kiểu ký tự. Bộ cấp phát cứng. Vd: char(10) -> 10 ô nhớ này không được đụng vào
-- varchar: kiểu ký tự. Bộ cấp phát động. Vd: varchar(10) -> 10 ô nhớ này chỉ được lấy khi có dữ liệu nằm bên trong
-- nchar: hỗ trợ có dấu còn lại y chang char
-- nvarchar: hỗ trợ có dấu còn lại y chang varchar
-- date: lưu trữ ngày tháng năm giờ
-- time: lưu trữ giờ phút giây
-- bit: lưu giá trị 0 và 1
-- text: lưu văn bản lớn
-- ntext: hỗ trợ unicode còn lại y text
*/

--Thêm dữ liệu
INSERT [Bang_1](Ma_Bang_1,Ten_Bang_1) VALUES(1,N'abc')
GO
INSERT [Bang_3](Ma_Bang_3,Ten_Bang_3,Ngay_Sinh,Nam,Dia_Chi,Tien_Luong) VALUES(10,N'Lê','19961001',1,'Địa chỉ nè',1000)
GO

--Xóa dữ liệu
--Thêm điều kiện xóa thì từ khóa AND hay OR
-- >, <, >=, <=, <>, AND, OR, =
DELETE Bang_3 -- Xóa tất cả dữ liệu trong bảng
GO
DELETE Bang_3 WHERE Ma_Bang_3 = 10
GO

--Update dữ liệu
UPDATE Bang_3 SET Tien_Luong = 900 -- Các dữ liệu đều thay đổi theo yêu cầu
UPDATE Bang_3 SET Tien_Luong = 1, Dia_Chi = 'a'
UPDATE Bang_3 SET Tien_Luong = 5 WHERE Nam = 1