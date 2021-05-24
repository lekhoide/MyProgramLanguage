--Đảm bảo toàn vẹn dữ liệu: không có trường hợp tham chiếu đến dữ liệu không tồn tại

USE HocSQL_1
GO

CREATE TABLE BoMon(
	MaBM CHAR(10) PRIMARY KEY,
	TenBM NVARCHAR(100) DEFAULT N'Tên bộ môn'
)
GO

CREATE TABLE Lop(
	MaLop CHAR(10) NOT NULL,
	TenLop NVARCHAR(100) DEFAULT N'Tên lớp',

	PRIMARY KEY(MaLop)
)
GO

CREATE TABLE GiaoVien(
	MaGV CHAR(10) NOT NULL,
	TenGV NVARCHAR(100) DEFAULT N'Tên giáo viên',
	DiaChi NVARCHAR(100) DEFAULT N'Địa chỉ giáo viên',
	NgaySinh DATE,
	GioiTinh bit,
	--C1: Tạo khóa ngoại
	--MaBM CHAR(10) FOREIGN KEY(MaBM) REFERENCES BoMon(MaBM)

)
GO

CREATE TABLE HocSinh(
	MaHS CHAR(10) PRIMARY KEY,
	TenHS NVARCHAR(100),
	MaLop CHAR(10)
)
GO

--C2: Tạo khóa ngoại
ALTER TABLE HocSinh ADD FOREIGN KEY(MaLop) REFERENCES Lop(MaLop)
GO

--C3: Tạo khóa ngoại
ALTER TABLE HocSinh ADD CONSTRAINT FK_HS FOREIGN KEY(MaLop)  REFERENCES Lop(MaLop)
GO

--Hủy constraint khóa ngoại
ALTER TABLE HocSinh DROP CONSTRAINT FK_HS

--Thêm một thuộc tính và đặt nó là khóa ngoại của GiaoVien
ALTER TABLE GiaoVien ADD MaBM CHAR(10) FOREIGN KEY(MaBM) REFERENCES BoMon(MaBM)

INSERT INTO BoMon(MaBM,TenBM) VALUES('BM1',N'Bộ môn 1')
INSERT INTO BoMon(MaBM,TenBM) VALUES('BM2',N'Bộ môn 2')
INSERT INTO BoMon(MaBM,TenBM) VALUES('BM3',N'Bộ môn 3')

INSERT INTO GiaoVien(MaGV,TenGV,DiaChi,NgaySinh,GioiTinh,MaBM) VALUES ('GV1',N'Giang Viên 1','','19961001',1,'BM1')

