-- 1/ Tạo DB + Sử dụng DB
	Create Database HowKteam
	Go
	Use HowKteam
	Go
	
-- 2/ Tạo các table + Khoá chính
	Create Table THAMGIADT
	(
		MAGV nchar(3),
		MADT nchar(4),
		STT int,
		PHUCAP float,
		KETQUA nvarchar(10),
		Primary Key (MAGV,MADT,STT)
	)
	go
	
	Create Table KHOA
	(
		MAKHOA nchar (4),
		TENKHOA nvarchar (50),
		NAMTL int,
		PHONG char(3),
		DIENTHOAI char(10),
		TRUONGKHOA nchar(3),
		NGAYNHANCHUC datetime,
		primary key (MAKHOA)
	)
	go
	
	create table BOMON
	(
		MABM nchar(4),
		TENBM nchar (50),
		PHONG char(3),
		DIENTHOAI char(11),
		TRUONGBM nchar(3),
		MAKHOA nchar (4),
		NGAYNHANCHUC date,
		primary key (MABM)
	)
	go
	
	create table CONGVIEC 
	(
		MADT nchar(4),
		SOTT int,
		TENCV nvarchar(50),
		NGAYBD datetime,
		NGAYKT datetime,
		primary key (MADT,SOTT)
	)
	go
	
	create table DETAI
	(
		MADT nchar(4),
		TENDT nvarchar(50),
		CAPQL nchar(20),
		KINHPHI float,
		NGAYBD date,
		NGAYKT date,
		MACD nchar(4),
		GVCNDT nchar(3),
		primary key (MADT)
	)
	go
	create table CHUDE
	(
		MACD nchar(4),
		TENCD nvarchar(30),
		primary key (MACD)
	)
	go
	
	create table GIAOVIEN
	(
		MAGV nchar(3),
		HOTEN nvarchar(50),
		LUONG float,
		PHAI nchar(3),
		NGSINH date,
		DIACHI nchar(50),
		GVQLCM nchar(3),
		MABM nchar(4),
		primary key (MAGV)
	)
	go
	
	create table NGUOITHAN
	(
		MAGV nchar(3),
		TEN nchar(12),
		NGSINH datetime,
		PHAI nchar(3),
		primary key (MAGV,TEN)
	)
	go
	
	create table GV_DT
	(
		MAGV nchar(3),
		DIENTHOAI char (10),
		primary key (MAGV,DIENTHOAI)
	)
	go
	
-- 3/ Tạo khoá ngoại
--Tạo khoá ngoại ở bảng THAMGIADT
	Alter table THAMGIADT
		add constraint FK_HG1_MADT
		foreign key (MADT, STT)
		references CONGVIEC(MADT,SOTT)
		go
		
--Tạo khóa ngoại ở bảng CONGVIEC
	Alter table CONGVIEC
		add constraint FK_HG2_MADT
		foreign key (MADT)
		references DETAI(MADT)
		go
		
--Tạo khóa ngoại ở bảng DETAI
	Alter table DETAI
		add constraint FK_HG3_MACD
		foreign key (MACD)
		references CHUDE(MACD)
		go
		
--Tạo khóa ngoại ở bảng DETAI
	Alter table DETAI
		add constraint FK_HG4_GVCNDT
		foreign key (GVCNDT)
		references GIAOVIEN(MAGV)
		go
		
--Tạo khóa ngoại ở bảng THAMGIADT
	Alter table THAMGIADT
		add constraint FK_HG5_MAGV
		foreign key (MAGV)
		references GIAOVIEN(MAGV)
		go
		
--Tạo khóa ngoại ở bảng GIAOVIEN
	Alter table GIAOVIEN
		add constraint FK_HG6_GVQLCM
		foreign key (GVQLCM)
		references GIAOVIEN(MAGV)
		go
			
--Tạo khóa ngoại ở bảng KHOA
	Alter table KHOA
		add constraint FK_HG7_TRUONGKHOA
		foreign key (TRUONGKHOA)
		references GIAOVIEN(MAGV)
		go
		
--Tạo khóa ngoại ở bảng NGUOITHAN
	Alter table NGUOITHAN
		add constraint FK_HG8_MAGV
		foreign key (MAGV)
		references GIAOVIEN(MAGV)
		go
		
--Tạo khóa ngoại ở bảng GIAOVIEN
	Alter table GIAOVIEN
		add constraint FK_HG9_MABM
		foreign key (MABM)
		references BOMON(MABM)
		go
		
--Tạo khóa ngoại ở bảng BOMON
	Alter table BOMON
		add constraint FK_HG10_MAKHOA
		foreign key (MAKHOA)
		references KHOA(MAKHOA)
		go
		
--Tạo khóa ngoại ở bảng BOMON
	Alter table BOMON
		add constraint FK_HG11_TRUONGBM
		foreign key (TRUONGBM)
		references GIAOVIEN(MAGV)
		go
		
--Tạo khóa ngoại ở bảng GV_DT
	Alter table GV_DT
		add constraint FK_HG12_MAGV
		foreign key (MAGV)
		references GIAOVIEN(MAGV)
		go
		
-- 4/ Nhập data
--Nhập data cho bảng CHUDE
	Insert Into CHUDE(MACD,TENCD)
	values ('NCPT', N'Nghiên cứu phát triển')
	Insert Into CHUDE(MACD,TENCD)
	values ('QLGD', N'Quản lý giáo dục')
	Insert Into CHUDE(MACD,TENCD)
	values ('UDCN', N'Ứng dụng công nghệ')
	go
	
--Nhập data cho bảng GIAOVIEN
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI)
	values ('001',N'Nguyễn Hoài An',2000.0,N'Nam','1973-02-15',N'25/3 Lạc Long Quân, Q.10,TP HCM')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI)
	values ('002',N'Trần Trà Hương',2500.0,N'Nữ','1960-06-20',N'125 Trần Hưng Đạo, Q.1, TP HCM')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI,GVQLCM)
	values ('003',N'Nguyễn Ngọc Ánh',2200.0,N'Nữ','1975-05-11',N'12/21 Võ Văn Ngân Thủ Đức, TP HCM',N'002')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI)
	values ('004',N'Trương Nam Sơn',2300.0,N'Nam','1959-06-20',N'215 Lý Thường Kiệt,TP Biên Hòa')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI)
	values ('005',N'Lý Hoàng Hà',2500.0,N'Nam','1954-10-23',N'22/5 Nguyễn Xí, Q.Bình Thạnh, TP HCM')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI,GVQLCM)
	values ('006',N'Trần Bạch Tuyết',1500.0,N'Nữ','1980-05-20',N'127 Hùng Vương, TP Mỹ Tho',N'004')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI)
	values ('007',N'Nguyễn An Trung',2100.0,N'Nam','1976-06-05',N'234 3/2, TP Biên Hòa')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI,GVQLCM)
	values ('008',N'Trần Trung Hiếu',1800.0,N'Nam','1977-08-06',N'22/11 Lý Thường Kiệt,TP Mỹ Tho',N'007')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI,GVQLCM)
	values ('009',N'Trần Hoàng nam',2000.0,N'Nam','1975-11-22',N'234 Trấn Não,An Phú, TP HCM',N'001')
	Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI,GVQLCM)
	values ('010',N'Phạm Nam Thanh',1500.0,N'Nam','1980-12-12',N'221 Hùng Vương,Q.5, TP HCM',N'007')
	go
	
--Nhập data cho bảng DETAI
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('001',N'HTTT quản lý các trường ĐH',N'ĐHQG',20.0,'2007-10-20','2008-10-20',N'QLGD','002')
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('002',N'HTTT quản lý giáo vụ cho một Khoa',N'Trường',20.0,'2000-10-12','2001-10-12',N'QLGD','002')
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('003',N'Nghiên cứu chế tạo sợi Nanô Platin',N'ĐHQG',300.0,'2008-05-15','2010-05-15',N'NCPT','005')
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('004',N'Tạo vật liệu sinh học bằng màng ối người',N'Nhà nước',100.0,'2007-01-01','2009-12-31',N'NCPT','004')
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('005',N'Ứng dụng hóa học xanh',N'Trường',200.0,'2003-10-10','2004-12-10',N'UDCN','007')
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('006',N'Nghiên cứu tế bào gốc',N'Nhà nước',4000.0,'2006-10-12','2009-10-12',N'NCPT','004')
	Insert Into DETAI(MADT,TENDT,CAPQL,KINHPHI,NGAYBD,NGAYKT,MACD,GVCNDT)
	values ('007',N'HTTT quản lý thư viện ở các trường ĐH',N'Trường',20.0,'2009-05-10','2010-05-10',N'QLGD','001')
	go
	
--Nhập data cho bảng CONGVIEC
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('001',1,N'Khởi tạo và Lập kế hoạch','2007-10-20','2008-12-20')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('001',2,N'Xác định yêu cầu','2008-12-21','2008-03-21')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('001',3,N'Phân tích hệ thống','2008-03-22','2008-05-22')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('001',4,N'Thiết kế hệ thống','2008-05-23','2008-06-23')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('001',5,N'Cài đặt thử nghiệm','2008-06-24','2008-10-20')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('002',1,N'Khởi tạo và lập kế hoạch','2009-05-10','2009-07-10')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('002',2,N'Xác định yêu cầu','2009-07-11','2009-10-11')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('002',3,N'Phân tích hệ thống','2009-10-12','2009-12-20')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('002',4,N'Thiết kế hệ thống','2009-12-21','2010-03-22')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('002',5,N'Cài đặt thử nghiệm','2010-03-23','2010-05-10')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('006',1,N'Lấy mẫu','2006-10-20','2007-02-20')
	Insert Into CONGVIEC(MADT,SOTT,TENCV,NGAYBD,NGAYKT)
	values ('006',2,N'Nuôi cấy','2007-02-21','2008-09-21')
	go
	
--Nhập data cho bảng THAMGIADT
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP)
	values ('001','002',1,0.0)
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP)
	values ('001','002',2,2.0)
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('002','001',4,2.0,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('003','001',1,1.0,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('003','001',2,0.0,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('003','001',4,1.0,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP)
	values ('003','002',2,0.0)
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('004','006',1,0.0,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('004','006',2,1.0,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP,KETQUA)
	values ('006','006',2,1.5,N'Đạt')
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP)
	values ('009','002',3,0.5)
	Insert Into THAMGIADT(MAGV,MADT,STT,PHUCAP)
	values ('009','002',4,1.5)
	go
	
--Nhập data cho bảng KHOA
	Insert Into KHOA(MAKHOA,TENKHOA,NAMTL,PHONG,DIENTHOAI,TRUONGKHOA,NGAYNHANCHUC)
	values (N'CNTT',N'Công nghệ thông tin',1995,'B11','0838123456','002','2005-02-20')
	Insert Into KHOA(MAKHOA,TENKHOA,NAMTL,PHONG,DIENTHOAI,TRUONGKHOA,NGAYNHANCHUC)
	values (N'HH',N'Hóa học',1980,'B41','0838456456','007','2001-10-15')
	Insert Into KHOA(MAKHOA,TENKHOA,NAMTL,PHONG,DIENTHOAI,TRUONGKHOA,NGAYNHANCHUC)
	values (N'SH',N'Sinh học',1980,'B31','0838454545','004','2000-10-11')
	Insert Into KHOA(MAKHOA,TENKHOA,NAMTL,PHONG,DIENTHOAI,TRUONGKHOA,NGAYNHANCHUC)
	values (N'VL',N'Vật lý',1976,'B21','0838223223','005','2003-09-18')
	go
	
--Nhập data cho bảng NGUOITHAN
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('001',N'Hùng','1990-01-14',N'Nam')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('001',N'Thủy','1994-12-08',N'Nữ')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('003',N'Hà','1998-09-03',N'Nữ')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('003',N'Thu','1998-09-03',N'Nữ')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('007',N'Mai','2003-03-26',N'Nữ')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('007',N'Vy','2000-02-14',N'Nữ')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('008',N'Nam','1991-05-06',N'Nam')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('009',N'An','1996-08-19',N'Nam')
	Insert Into NGUOITHAN(MAGV,TEN,NGSINH,PHAI)
	values ('010',N'Nguyệt','2006-01-14',N'Nữ')
	go
	
--Nhập data cho bảng GV_DT
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('001','0838912112')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('001','0903123123')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('002','0913454545')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('003','0838121212')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('003','0903656565')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('003','0937125125')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('006','0937888888')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('008','0653717171')
	Insert Into GV_DT(MAGV,DIENTHOAI)
	values ('008','0913232323')
	go
	
--Nhập data cho bảng BOMON
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,MAKHOA)
	values (N'CNTT',N'Công nghệ tri thức','B15','0838126126',N'CNTT')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,MAKHOA)
	values (N'HHC',N'Hóa hữu cơ','B44','0838222222',N'HH')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,MAKHOA)
	values (N'HL',N'Hóa Lý','B42','0838878787',N'HH')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,TRUONGBM,MAKHOA,NGAYNHANCHUC)
	values (N'HPT',N'Hóa phân tích','B43','0838777777','007',N'HH','2007-10-15')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,TRUONGBM,MAKHOA,NGAYNHANCHUC)
	values (N'HTTT',N'Hệ thống thông tin','B13','0838125125','002',N'CNTT','2004-09-20')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,TRUONGBM,MAKHOA,NGAYNHANCHUC)
	values (N'MMT',N'Mạng máy tính','B16','0838676767','001',N'CNTT','2005-05-15')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,MAKHOA)
	values (N'SH',N'Sinh hóa','B33','0838898989',N'SH')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,MAKHOA)
	values (N'VLĐT',N'Vật lý điện tử','B23','0838234234',N'VL')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,TRUONGBM,MAKHOA,NGAYNHANCHUC)
	values (N'VLUD',N'Vật lý ứng dụng','B24','0838454545','005',N'VL','2006-02-18')
	Insert Into BOMON(MABM,TENBM,PHONG,DIENTHOAI,TRUONGBM,MAKHOA,NGAYNHANCHUC)
	values (N'VS',N'Vi Sinh','B32','0838909090','004',N'SH','2007-01-01')
	go
	
--Cập nhật thêm dữ liệu cho bảng GIAOVIEN
	update GIAOVIEN
	set MABM = 'MMT'
	where (MAGV = '001')
	update GIAOVIEN
	set MABM = 'HTTT'
	where (MAGV = '002')
	update GIAOVIEN
	set MABM = 'HTTT'
	where (MAGV = '003')
	update GIAOVIEN
	set MABM = 'VS'
	where (MAGV = '004')
	update GIAOVIEN
	set MABM = N'VLĐT'
	where (MAGV = '005')
	update GIAOVIEN
	set MABM = 'VS'
	where (MAGV = '006')
	update GIAOVIEN
	set MABM = 'HPT'
	where (MAGV = '007')
	update GIAOVIEN
	set MABM = 'HPT'
	where (MAGV = '008')
	update GIAOVIEN
	set MABM = 'MMT'
	where (MAGV = '009')
	update GIAOVIEN
	set MABM = 'HPT'
	where (MAGV = '010')
	GO	

	--Truy vấn
SELECT * FROM BOMON
SELECT * FROM DETAI
	
	--Lấy mã đề tài tên đề tài trong bảng bộ môn
SELECT MABM,TENBM FROM BOMON
	
	--Đổi tên cột hiển thị
SELECT MABM AS N'Mã bộ môn',TENBM AS N'Tên bộ môn' FROM BOMON

	--Xuất ra thông tin(tất cả) từng giáo viên dạy bộ môn
SELECT * FROM GIAOVIEN
SELECT * FROM BOMON
SELECT GV.HOTEN, BM.TENBM FROM GIAOVIEN GV,BOMON BM


	--1. Truy xuất thông tin của bảng tham gia Đề Tài
SELECT * FROM DETAI

	--2. Lấy ra mã khoa và tên khoa tương ứng
SELECT MAKHOA,TENKHOA FROM KHOA

	--3. Lấy ra họ mã GV, tên GV và họ tên người thân tương ứng
SELECT GV.MAGV, GV.HOTEN, NT.TEN FROM GIAOVIEN GV, NGUOITHAN NT
WHERE GV.MAGV = NT.MAGV

	--4. Lấy ra mã GV, tên GV và tên khoa của GV đó làm việc. GY: Bộ môn nằm trong khoa
SELECT GV.MAGV, GV.HOTEN, K.MAKHOA FROM GIAOVIEN GV, BOMON BM, KHOA K
WHERE GV.MABM = BM.MABM AND BM.MAKHOA = K.MAKHOA

	--Lấy ra lương giáo viên lương > 2000
SELECT * FROM GIAOVIEN
WHERE LUONG > 2000

	--Lấy ra giáo viên là nữ và lương > 2000
SELECT * FROM GIAOVIEN
WHERE PHAI = N'Nữ' AND LUONG > 2000

	--Lấy ra giáo viên nhỏ hơn 30 tuổi
	--YEAR: Lấy ra năm
	--GETDATE(): Lấy ra ngày hiện tại
SELECT * FROM GIAOVIEN
WHERE YEAR(GETDATE()) - YEAR(NGSINH) > 40

	--Lấy ra họ tên giáo viên , năm sinh và tuổi của giáo viên phải < 40 tuổi
SELECT HOTEN,NGSINH, YEAR(GETDATE()) - YEAR(NGSINH) AS TUOI FROM GIAOVIEN
WHERE YEAR(GETDATE()) - YEAR(NGSINH) < 50

	--Lấy ra giáo viên là trưởng bộ môn
SELECT GV.* FROM GIAOVIEN GV, BOMON BM
WHERE GV.MAGV = BM.TRUONGBM

	--Đếm số lượng giáo viên
	--COUNT(): Đếm số lượng
SELECT COUNT(*) AS SOLUONG_GV FROM GIAOVIEN

	--Đếm số lượng người thân của giáo viên có mã GV là 007
SELECT COUNT(*) FROM NGUOITHAN NT, GIAOVIEN GV
WHERE GV.MAGV='007' AND GV.MAGV = NT.MAGV

	--Lấy ra tên giáo viên và tên đề tài người đó tham gia
SELECT GV.HOTEN, DT.TENDT FROM GIAOVIEN GV, DETAI DT, THAMGIADT TGDT
WHERE GV.MAGV = TGDT.MAGV AND DT.MADT  = TGDT.MADT

--1. Xuất ra thông tin giáo viên và giáo viên quản lý chủ nhiệm của người đó
SELECT GV1.HOTEN AS QUANLYBOI, GV2.HOTEN FROM GIAOVIEN GV1, GIAOVIEN GV2
WHERE GV1.GVQLCM = GV2.MAGV

--2. Xuất ra số lượng giáo viên của khoa CNTT
SELECT COUNT(*) FROM GIAOVIEN GV, BOMON BM, KHOA K
WHERE GV.MABM = BM.MABM AND BM.MAKHOA = K.MAKHOA AND BM.MAKHOA = 'CNTT'

--3. Xuất ra thông tin giáo viên và đề tài người đó tham gia mà kết quả là đạt
SELECT GV.HOTEN,TG.KETQUA FROM GIAOVIEN GV,THAMGIADT TG
WHERE GV.MAGV = TG.MAGV AND TG.KETQUA = N'Đạt'

	--Xuất ra thông tin giáo viên mà có chữ l
SELECT * FROM GIAOVIEN
WHERE HOTEN LIKE 'l%'

	--Xuất ra thông tin GIÁO VIÊN kết thúc mà có chữ n
SELECT * FROM GIAOVIEN
WHERE HOTEN LIKE '%n'

	--Xuất ra thông tin giáo viên có tồn tại chữ n
SELECT * FROM GIAOVIEN
WHERE HOTEN LIKE '%n%'

	--Xuất ra thông tin giáo viên có tồn tại chữ ế
SELECT * FROM GIAOVIEN
WHERE HOTEN LIKE N'%ế%'

	--inner join -> kiểu cũ -> sau này không được hỗ trợ
	--mọi join cần điều kiện
SELECT * FROM GIAOVIEN GV, BOMON BM
WHERE GV.MABM = BM.MABM

	--INNER JOIN KIỂU MỚI KHUYẾN CÁO DÙNG KIỂU NÀY. ĐÚNG CHUẨN
SELECT * FROM GIAOVIEN GV INNER JOIN BOMON BM
ON GV.MABM = BM.MABM AND BM.TRUONGBM = ' '

	--VIẾT TẮT INNER JOIN THÀNH JOIN
SELECT * FROM KHOA JOIN BOMON
ON KHOA.MAKHOA = BOMON.MAKHOA

	--OUTER JOIN: những dữ liệu không hợp điều kiện, ít dùng.
	--Gom 2 bảng theo điều kiện. Bên nào không có dữ liệu thì đề NULL
SELECT * FROM GIAOVIEN GV FULL OUTER JOIN BOMON BM
ON BM.MABM = GV.MABM

	--CROOS JOIN: Là tổ hợp mỗi record của bảng A với all recored của bảng B
SELECT * FROM GIAOVIEN CROSS JOIN BOMON

	--LEFT JOIN: Bảng bên phải nhập vào bảng bên trái
	--Bảng trái là bảng chính. Bảng phải hãy gom vào bảng bên trái
	--Nếu như thằng nào ở bảng bên trái có mà bảng bên phải GiaoVien không có thì bảng bên phải nó để là Null
	--Nếu như thằng nào ở bên trái không có thì bảng bên phải không trả kết quả
SELECT * FROM BOMON LEFT JOIN GIAOVIEN
ON GIAOVIEN.MABM = BOMON.MABM

	--LEFT JOIN: Bảng bên trái nhập vào bảng bên phải
	--Record nào bên trái không có thì để NULL
	--Record nào bên phải không có thì không hiện KQ.
SELECT * FROM BOMON RIGHT JOIN GIAOVIEN
ON GIAOVIEN.MABM = BOMON.MABM

	--Union
SELECT MAGV FROM GIAOVIEN
WHERE LUONG <2000
UNION
SELECT MAGV FROM NGUOITHAN
WHERE PHAI = N'Nữ'

	--Select Into: dùng cho Backup, tạo bảng mới/nhiềubarng dựa vào bảng mới có sẵn
	--Giải thích: copy hết record bảng giáo viên vào tablea
SELECT * INTO TABLEA
FROM GIAOVIEN
SELECT * FROM TABLEA

SELECT HoTen INTO TABLEB
FROM GIAOVIEN
SELECT * FROM TABLEB

SELECT HoTen INTO TABLEC
FROM GIAOVIEN
WHERE LUONG > 2000
SELECT * FROM TABLEC

	--Insert into Select: Clone một bảng mới nhưng không lấy dữ liệu rồi copy dữ liệu vào bảng đã tồn tại
SELECT * INTO CLONEGV
FROM GIAOVIEN
WHERE 1=0

INSERT INTO CLONEGV
SELECT * FROM GIAOVIEN

SELECT * FROM CLONEGV

	--Truy vấn lồng
	--Kiểm tra giáo viên có phải là giáo viên chủ nhiệm
SELECT * FROM GIAOVIEN
WHERE GIAOVIEN.MAGV = '001'
AND MAGV NOT IN
(
	SELECT GVQLCM FROM GIAOVIEN
)

SELECT * FROM GIAOVIEN, (SELECT * FROM DETAI) AS DT

	--Xuất ra danh sách giáo viên tham gia nhiều hơn một đề tài
SELECT * FROM GIAOVIEN
SELECT * FROM DETAI
SELECT * FROM THAMGIADT

SELECT * FROM GIAOVIEN GV

WHERE 1 < (
	SELECT COUNT(TG.MAGV) FROM THAMGIADT TG
	WHERE TG.MAGV = GV.MAGV
)

	--XUẤT RA THÔNG TIN CỦA KHOA CÓ HƠN 2 GIÁO VIÊN
SELECT * FROM KHOA
SELECT * FROM BOMON
SELECT * FROM GIAOVIEN

SELECT MABM,COUNT(HOTEN) AS DEM FROM GIAOVIEN
GROUP BY MABM

SELECT * FROM KHOA K
WHERE 2 < (
	SELECT COUNT(GV.HOTEN) FROM BOMON BM, GIAOVIEN GV
	WHERE K.MAKHOA = BM.MAKHOA AND BM.MABM = GV.MABM
)

	--XUẤT RA THÔNG TIN GIÁO VIÊN CÓ HƠN 2 NGƯỜI THÂN
SELECT * FROM NGUOITHAN
SELECT * FROM GIAOVIEN

SELECT * FROM GIAOVIEN GV
WHERE 2 <= (
	SELECT COUNT(NT.MAGV) FROM NGUOITHAN NT
	WHERE GV.MAGV = NT.MAGV
)
/*
	XUẤT RA DANH SÁCH GIÁO VIÊN LỚN TUỔI HƠN ÍT NHẤT 5 NGƯỜI CÁC GIẢNG VIÊN TRONG TRƯỜNG
		LẤY RA DANH SÁCH(MAGV,TUOI) AS GVT
		SẮP XẾP GIẢM DẦN ASC
		LẤY RA DANH SÁCH GVT2 VỚI SỐ LƯỢNG PHẦN TỬ = COUNT(*)/2
		KIỂM TRA MÃ GV TỒN TẠI TRONG GVT2 LÀ ĐÚNG
*/
SELECT * FROM GIAOVIEN

SELECT TOP 5 MAGV,NGSINH,YEAR(GETDATE()) - YEAR(NGSINH) AS GVT FROM GIAOVIEN
ORDER BY GVT DESC

/*
Agreeate Function

AVG()	Returns the average value
COUNT()	Returns the number of rows
FIRST()	Returns the first value
LAST()	Returns the last value
MAX()	Returns the largest value
MIN()	Returns the smallest value
ROUND()	Rounds a numeric field to the number of decimals specified
SUM()	Returns the sum
*/


/*
string function

CHARINDEX	Searches an expression in a string expression and returns its starting position if found
CONCAT()	 
LEFT()	 
LEN() / LENGTH()	Returns the length of the value in a text field
LOWER() / LCASE()	Converts character data to lower case
LTRIM()	 
SUBSTRING() / MID()	Extract characters from a text field
PATINDEX()	 
REPLACE()	 
RIGHT()	 
RTRIM()	 
UPPER() / UCASE()	Converts character data to upper case
*/

	--GROUP BY
-- Xuất ra danh sách tên bộ môn và số lượng giáo viên của bộ môn đó
SELECT TENBM,MAKHOA,COUNT(*) FROM BOMON,GIAOVIEN
WHERE BOMON.MABM = GIAOVIEN.MABM
GROUP BY TENBM,MAKHOA

--Lấy ra danh sách giáo viên có lương > lương trung bình giáo viên
SELECT * FROM GIAOVIEN
WHERE LUONG >(
(SELECT SUM(LUONG) FROM GIAOVIEN) /(SELECT COUNT(*) FROM GIAOVIEN)
)

-- Xuất ra tên giáo viên và số lượng công việc giáo viên đó đã làm
SELECT * FROM GIAOVIEN
SELECT * FROM THAMGIADT
SELECT * FROM DETAI
SELECT * FROM CONGVIEC

SELECT * FROM GIAOVIEN

SELECT GV.HOTEN, COUNT(*) AS SOLUONGCV FROM THAMGIADT TGDT, GIAOVIEN GV
WHERE GV.MAGV = TGDT.MAGV
GROUP BY GV.HOTEN

	--Xuất ra tên giáo viên và số lượng người thân của GV đó
SELECT GV.HOTEN, COUNT(NT.MAGV) AS SOLUONGNGUOITHAN FROM GIAOVIEN GV, NGUOITHAN NT
WHERE GV.MAGV = NT.MAGV
GROUP BY GV.HOTEN

	--Xuất ra tên giáo viên và số lượng đề tài đã hoàn thành mà giáo viên đó tham gia
SELECT GV.HOTEN,COUNT(TGDT.MAGV) AS SOLUONGDETAI, TGDT.KETQUA FROM GIAOVIEN GV, THAMGIADT TGDT
WHERE GV.MAGV = TGDT.MAGV AND TGDT.KETQUA = N'Đạt'
GROUP BY GV.HOTEN,TGDT.KETQUA

SELECT * FROM KHOA
SELECT * FROM BOMON
SELECT * FROM GIAOVIEN

SELECT TOP 1 K.TENKHOA FROM KHOA K
WHERE 0 < (
	SELECT COUNT(GV.HOTEN) FROM BOMON BM, GIAOVIEN GV
	WHERE K.MAKHOA = BM.MAKHOA AND BM.MABM = GV.MABM
)
GROUP BY TENKHOA

	--Xuất ra tên khoa có tổng số lượng giáo viên trong khoa là lớn nhất
SELECT TOP 1 K.TENKHOA,COUNT(GV.HOTEN) AS SLGV FROM BOMON BM, GIAOVIEN GV, KHOA K
WHERE K.MAKHOA = BM.MAKHOA AND BM.MABM = GV.MABM
GROUP BY K.TENKHOA

	--Tạo ra một bảng lưu thông tin giáo viên, tên bộ môn và lương của giáo viên đó
SELECT HOTEN,TENBM,LUONG INTO LUONG_GIAOVIEN FROM GIAOVIEN, BOMON
WHERE BOMON.MABM = GIAOVIEN.MABM

SELECT * FROM LUONG_GIAOVIEN

UPDATE GIAOVIEN SET LUONG = 90000
WHERE MAGV = '006'

	--BÀI 21: VIEW: LÀ BẢNG ẢO
	--CẬP NHẬT DỮ LIỆU THEO BẢNG MÀ VIEW TRUY VẤN
	--ĐIỀU CHỈNH LINH HOẠT

--CÂU 1:Tạo ra view TestView từ câu truy vấn

GO
CREATE VIEW TESTVIEW AS
SELECT * FROM GIAOVIEN
GO
	--XÓA VIEW
SELECT * FROM TESTVIEW
DROP VIEW TESTVIEW

GO
	--UPDATE VIEW
ALTER VIEW TESTVIEW AS
SELECT HOTEN FROM GIAOVIEN
GO

CREATE VIEW [GIÁO DỤC MIỄN PHÍ] AS
SELECT * FROM KHOA
GO

SELECT * FROM [GIÁO DỤC MIỄN PHÍ]

	--TẠO INDEX TRÊN BẢNG GIÁO VIÊN
	--TĂNG TỐC ĐỘ TÌM KIẾM <> CHẬM TỐC ĐỘ THÊM XÓA SỬA
	--CHO PHÉP CÁC TRƯỜNG TRÙNG NHAU
CREATE INDEX IndexName ON NGUOITHAN
CREATE INDEX IndexMAGV ON NGUOITHAN(MAGV)

	--KHÔNG CHO PHÉP CÁC TRƯỜNG TRÙNG NHAU
CREATE UNIQUE INDEX IndexNameUnique ON NGUOITHAN(MAGV)

SELECT * FROM NGUOITHAN
	
	--BÀI 25: DECLARE: TẠO RA MỘT BIẾN LƯU LẠI VÀ TÁI SỬ DỤNG
--CÂU 1: Tìm ra mã giáo viên có lương cao nhất
DECLARE @MinSalaryMAGV CHAR(10)
SELECT @MinSalaryMAGV = MAGV FROM GIAOVIEN WHERE LUONG = (SELECT MIN(LUONG) FROM GIAOVIEN)
-- Lấy ra tuổi của Giáo viên với MA GV 001
SELECT YEAR(GETDATE()) - YEAR(NGSINH) FROM GIAOVIEN
WHERE MAGV = @MinSalaryMAGV
-- KHỞI TẠO VỚI KIỂU DỮ LIỆU
DECLARE @I INT
-- KHỞI TẠO VỚI GIÁ TRỊ MẶC ĐỊNH
DECLARE @J INT = 0
--SET DỮ LIỆU CHO BIẾN
SET @I = @I + 1
SET @I+=1
SET @J += @I
--SET THONG QUA CÂU SELECT
DECLARE @MAXLUONG INT
SELECT @MAXLUONG = MAX(LUONG) FROM GIAOVIEN

--CÂU 2: XUẤT RA SỐ LƯỢNG NGƯỜI THÂN CỦA GIÁO VIÊN. LƯU MÃ GIÁO VIÊN 001 LẠI. TÌM RA SỐ LƯỢNG NGƯỜI THÂN TƯƠNG ỨNG ỨNG MÃ GIÁO VIÊN
DECLARE @MAGV CHAR(10) = '003'
SELECT * FROM NGUOITHAN WHERE MAGV = @MAGV

--CÂU 3: XUẤT RA TÊN GIÁO VIÊN CÓ LƯƠNG THẤP NHẤT
DECLARE @MINLUONG INT
DECLARE @TENGV NVARCHAR(100)
SELECT @MINLUONG = MIN(LUONG) FROM GIAOVIEN
SELECT @TENGV = HOTEN FROM GIAOVIEN WHERE LUONG = @MINLUONG
--XUẤT RA GIÁ TRỊ MÀN HÌNH
PRINT @TENGV


	--BÀI 26: IF AND ELSE TRONG TRANSACT
--CÂU 1: KIẾM TRA XEM LƯƠNG CỦA GIÁO VIÊN NHẬP VÀO CÓ LỚN HƠN LƯƠNG TRUNG BÌNH HAY KO
--TẠO 2 BIẾN
DECLARE @LUONGTRUNGBINH INT
DECLARE @SOLUONGGIAOVIEN INT
--TRUY VẤN LUONGTRUNGBINH VA SOLUONGIAOVIEN
SELECT @SOLUONGGIAOVIEN = COUNT(*) FROM GIAOVIEN
SELECT @LUONGTRUNGBINH = SUM(LUONG)/ @SOLUONGGIAOVIEN FROM GIAOVIEN
--TRUY VAN DẾN MAGV CÓ ID 001
DECLARE @MAGV1 CHAR(10) = '001'
DECLARE @LUONGMAGV INT = 0
SELECT @LUONGMAGV = LUONG FROM GIAOVIEN WHERE MAGV = @MAGV1
-- NẾU LƯƠNG CỦA @MAGV > @LUONGTRUNGBINH
-- XUẤT RA LỚN HƠN
-- NGƯỢC LẠI
-- NHỎ HƠN
IF @LUONGMAGV > @LUONGTRUNGBINH
	BEGIN
		PRINT @LUONGMAGV
		PRINT @LUONGTRUNGBINH
		PRINT N'LỚN HƠN'
	END
ELSE
	BEGIN
		PRINT @LUONGMAGV
		PRINT @LUONGTRUNGBINH
		PRINT N'NHỎ HƠN'
	END

--CÂU 2: Update lương của toàn bộ giáo viên nếu lương nhập vào cao hơn lương trung bình. Ngược lại chỉ update giáo viên nữ
GO
DECLARE @LUONGTRUNGBINH INT
DECLARE @SOLUONGGIAOVIEN INT
SELECT @SOLUONGGIAOVIEN = COUNT(*) FROM GIAOVIEN
SELECT @LUONGTRUNGBINH = SUM(LUONG)/ @SOLUONGGIAOVIEN FROM GIAOVIEN
DECLARE @LUONG INT = 2000
IF (@LUONG > @LUONGTRUNGBINH)
	BEGIN
		UPDATE GIAOVIEN SET LUONG = @LUONG
	END
ELSE
	BEGIN
	UPDATE GIAOVIEN SET LUONG = @LUONG
	WHERE PHAI = N'Nữ'
	END
SELECT * FROM GIAOVIEN


	--BÀI 27: VÒNG LẶP TRONG TRANSACT

--CÂU 1: Insert 100 record vào bảng LUONG_GIAOVIEN
--TẠO 2 BIẾN @M VÀ @N
DECLARE @M INT = 0
DECLARE @N INT = 100
--VÒNG LẶP WHILE
WHILE (@M < @N)
BEGIN
INSERT LUONG_GIAOVIEN(HOTEN,TENBM,LUONG) VALUES ('TEST TEN','TEST BO MON',@M) SET @M+=1
END
SELECT * FROM LUONG_GIAOVIEN
--CÂU 2: IN RA MÀN HÌNH TỪ 1 ĐẾN 99
WHILE (@M < @N)
BEGIN
	PRINT @M
	SET @M+=1
END

	--BÀI 28: CUSOR TRONG TRANSACT
	-- Khi có nhu cầu duyệt từng record của bảng. Với mỗi record có kết quả xử lý riêng thì dùng cursor

	-- Declare <Tên con trỏ> cursor for <câu select>
	-- Open<Tên con trỏ>

	-- FETCH NEXT FROM <Tên con trỏ> INTO <Danh sách các biến tương ứng kết quả truy vấn>

	-- WHILE @@FETCH_STATUS = 0
	-- BEGIN
	-- Câu lệnh thực hiện
	-- FETCH NEXT lại lần nữa
	-- FETCH NEXT FROM <Tên con trỏ> INTO <Danh sách các biến tương ứng kết quả truy vấn>
	-- END

	-- CLOSE <tên con trỏ>
	-- DEALLOCATE <tên con trỏ>

	-- Từ tuổi của giáo viên
	-- Nếu lớn hơn 40 thì cho lương là 2500
	-- Nếu nhỏ hơn 40 và lớn 30 cho lương là 2000
	-- Ngược lại thì lương là 1500

	-- Lấy ra danh sách MaGV kèm tuổi đưa vào con trỏ có tên là GiaoVienCursor

	SELECT * FROM GIAOVIEN

	DECLARE GiaoVienCursor CURSOR FOR SELECT MaGV, YEAR(GETDATE()) - YEAR(NGSINH) from GIAOVIEN

	OPEN GiaoVienCursor

	DECLARE @MaGV CHAR(10)
	DECLARE @Tuoi INT

	FETCH NEXT FROM GiaoVienCursor INTO @MaGV, @Tuoi

	WHILE @@FETCH_STATUS = 0
	BEGIN
		IF @Tuoi > 40
		BEGIN
			UPDATE GIAOVIEN SET LUONG = 2500 WHERE MAGV = @MaGV
		END
	ELSE
		IF @Tuoi > 30
		BEGIN
			UPDATE GIAOVIEN SET LUONG = 2000 WHERE MAGV = @MaGV
		END
	ELSE
		BEGIN
			UPDATE GIAOVIEN SET LUONG = 1500 WHERE MAGV = @MaGV
		END

	FETCH NEXT FROM GiaoVienCursor INTO @MaGV, @Tuoi
END
	CLOSE GiaoVienCursor
	DEALLOCATE GiaoVienCursor

	--Bài 29: Stored Procedure
	/*
	Là chương trình hay thủ tục
	Ta có thể dùng Transact - SQL EXCUTE(EXEC) để thực thi các stored procedure
	Stored procedure khác với các hàm xử lý là giá trị trả về của chúng
	Không chứa trong tên và chúng không được sử dụng trực tiếp trong biểu thức
	*/

	/*
	Động: có thể chỉnh sửa khối lệnh, tái sử dụng nhiều lần
	Nhanh hơn: tự phân tích cú pháp cho tối ưu. Và tạo bản sao để lần chạy sau không cần thực thi lại từ đầu
	Bảo mật: giới hạn quyền cho user nào sử dụng user nào không
	Giarm bandwidth: với các gói transaction lớn. Vài ngàn dòng lệnh một lúc thì dùng store sẽ đảm bảo
	*/

	/*
	CREATE PROC <Tên store>
	[Paramter nếu có]
	AS
	BEGIN
		<Code xử lý>
	END
	*/

GO
CREATE PROC USP_Test
@MaGV NVARCHAR(10), @Luong INT
AS
BEGIN
	SELECT * FROM GIAOVIEN WHERE MAGV = @MaGV AND LUONG = @LUONG
END

-- C1
EXEC USP_Test @MaGV = N'', @Luong = 0
-- C2
EXEC USP_Test N'',0
-- C3
EXECUTE USP_Test @MaGV = N'', @Luong = 0
-- C4
EXECUTE USP_Test N'',0

GO
CREATE PROC USP_SelectAllGiaoVien
AS SELECT * FROM GIAOVIEN

EXEC USP_SelectAllGiaoVien

	--Bài 30: Function
--TẠO FUNCTION KHÔNG CÓ PARAMENTER
CREATE FUNCTION UF_SelectAllGiaoVien()
RETURNS TABLE
AS RETURN SELECT * FROM GIAOVIEN
GO

SELECT * FROM UF_SelectAllGiaoVien()

--tẠO FUNCTION CÓ PARAMENTER
go
--CREATE FUNCTION
CREATE FUNCTION dbo.UF_SelectLuongGiaoVien(@MaGV char(10))
RETURNS INT
AS
BEGIN
	DECLARE @LUONG INT
	SELECT @LUONG = LUONG FROM GIAOVIEN WHERE MAGV = @MaGV
	RETURN @LUONG
END
go

--UPDATE FUNCTION
ALTER FUNCTION dbo.UF_SelectLuongGiaoVien(@MaGV char(10))
RETURNS INT
AS
BEGIN
	DECLARE @LUONG INT
	SELECT @LUONG = LUONG FROM GIAOVIEN WHERE MAGV = @MaGV
	RETURN @LUONG
END
go
SELECT dbo.UF_SelectLuongGiaoVien(MAGV) FROM GIAOVIEN

--XÓA PROC HAY FUNCTION
DROP PROC USP_SelectAllGiaoVien
DROP FUNCTION UF_SelectAllGiaoVien

--TẠO FUNCTION TÍNH MỘT SỐ TRUYỀN VÀO PHẢI LÀ SỐ CHẴN HAY KHÔNG
CREATE FUNCTION UF_ISODD(@NUM INT)
RETURNS NVARCHAR(20)
AS
BEGIN
	IF(@NUM %2=0)
		RETURN N'SỐ CHẴN'
	ELSE
		RETURN N'SỐ LẼ'

	RETURN N'KHÔNG XÁC ĐỊNH'
END

SELECT DBO.UF_ISODD(5)
GO
CREATE FUNCTION UF_AGEOFYEAR(@YEAR DATE)
RETURNS INT
AS
BEGIN
	RETURN YEAR(GETDATE()) - YEAR(@YEAR)
END
SELECT DBO.UF_AGEOFYEAR(NGSINH),DBO.UF_ISODD(DBO.UF_AGEOFYEAR(NGSINH)) FROM GIAOVIEN

	--Bài 31: Trigger
	--Can thiệp vào sự kiện update, delete,.. trong table
	--Có sự thay đổi một record kiểm tra dữ liệu có đảm bảo thì mới thực hiện
	--Bắt thông tin sự kiện trước khi lưu
	--Cứ mỗi lần thay đổi thông tin thì tốc độ truy vấn dữ liệu chậm đi

	--Trigget sẽ được gọi mỗi khi có thao tác thay đổi thông tin bảng
	--Lưu ý: Inserted: chứa những trường đã insert \ update vào bảng
	--Deleted: chứa những trường đã bị xóa khỏi bản

CREATE TRIGGER UTG_INSERTGIAOVIEN ON GIAOVIEN FOR INSERT,UPDATE
AS
BEGIN
	--ROLLBACK TRAN --KIEM TRA DỮ LIỆU KHÔNG PHÙ HỢP VỚI NGHIỆP VỤ THÌ HỦY BỘ DỮ LIỆU
	PRINT 'TRIGGER 2'
END

Insert Into GIAOVIEN(MAGV,HOTEN,LUONG,PHAI,NGSINH,DIACHI,GVQLCM)
values ('012',N'Phạm Nam Thanh',1500.0,N'Nam','1960-12-12',N'221 Hùng Vương,Q.5, TP HCM',N'007')

-- BẮT SỰ KIỆN KHÔNG CHO PHÉP XÓA THÔNG TIN CỦA GIÁO VIÊN CÓ TUỔI LỚN HƠN 40
CREATE TRIGGER UTG_ABORTOLDERTHAN40 ON GIAOVIEN FOR DELETE
AS
BEGIN
	DECLARE @COUNT INT = 0

	SELECT @COUNT = COUNT(*) FROM deleted
	WHERE YEAR(GETDATE()) - YEAR(deleted.NGSINH) > 40
	IF(@COUNT > 0)
		BEGIN
			PRINT 'Không được xóa người hơn 40 tuổi'
			ROLLBACK TRAN
		END
END

select  * FROM GIAOVIEN

DELETE GIAOVIEN WHERE MAGV='012'

	--Bài 32: Transction
	--Thực hiện một chuỗi thao tác 1, thao tác 2

SELECT * FROM NGUOITHAN

BEGIN TRANSACTION
DELETE NGUOITHAN WHERE TEN = 'An'
--TRỞ VỀ THAO TÁC BAN ĐẦU
ROLLBACK

BEGIN TRANSACTION
DELETE NGUOITHAN WHERE TEN = 'An'
--CHẤP NHẬN CHUỖI THAO TÁC NÀY
COMMIT

DECLARE @TRANS VARCHAR(20) SELECT @TRANS = 'TRANS1'
BEGIN TRANSACTION @TRANS
DELETE NGUOITHAN WHERE TEN = 'An'
--CHẤP NHẬN CHUỖI THAO TÁC NÀY
COMMIT TRANSACTION @TRANS

BEGIN TRANSACTION
SAVE TRANSACTION TRANS1
DELETE NGUOITHAN WHERE TEN = 'Nam'

SAVE TRANSACTION TRANS2
DELETE NGUOITHAN WHERE TEN= 'An'
ROLLBACK TRANSACTION TRANS1
