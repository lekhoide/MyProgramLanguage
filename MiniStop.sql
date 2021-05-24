drop database QuanLyMiniStop
go 
create database QuanLyMiniStop
go
use QuanLyMiniStop
go
create table TaiKhoan
(
UserID nvarchar(50) primary key,
UserPass nvarchar(50),
)
go
create table NhaCungCap
(
MaNhaCungCap varchar(50) primary key,
TenNhaCungCap nvarchar(50),
)
create table NhanVien
(
MaNV varchar (50)  primary key,
HoTen nvarchar(max),
NgaySinh datetime,
NgayDauLam datetime,
DiaChi nvarchar(128),
Luong int,
DienThoai char(12),
Email nvarchar(128),
GioiTinh nvarchar(5),
)
 
drop table SanPham
create table SanPham
(
MaSanPham varchar(50) primary key NOT NULL,
TenSanPham nvarchar(128) NOT NULL,
XuatXu nvarchar(50) NOT NULL,
MoTa nvarchar(128) NOT NULL,
GiaTien smallmoney,
MaNhaCungCap varchar(50) NOT NULL,
foreign key (MaNhaCungCap) references NhaCungCap(MaNhaCungCap)
)

create table ThongTinLienHe
(
TenCuaHang nvarchar(128) primary key,
DiaChi nvarchar(128),
SdtLH nvarchar(128),
EmailLH nvarchar(128),
Website nvarchar(128),
)
drop table HoaDon
create table HoaDon
(
MaHoaDon varchar(10) primary key,
MaKH varchar(50),
MaSanPham varchar(50),
NgayMua datetime,
SoLuong float default 1,
)


delete from HoaDon where MaHoaDon='{0}'
Select MaSanPham,TenSanPham from SanPham
Select MaKH,HoTen from KhachHang
select MaHoaDon,k.HoTen,s.TenSanPham,NgayMua,SoLuong,s.GiaTien, SUM(SoLuong*GiaTien)as [Thành tiền] from KhachHang k, SanPham s, HoaDon h where k.MaKH = h.MaKH and s.MaSanPham = h.MaSanPham group by MaHoaDon,k.HoTen,s.TenSanPham,NgayMua,SoLuong,s.GiaTien
select *from HoaDon
create table KhachHang
(
	MaKH varchar (50)  primary key,
	HoTen nvarchar(max),
	DiaChi nvarchar(128),
	DienThoai char(12),
	Email nvarchar(128),
)

insert into KhachHang values ('KH1',N'Nguyễn Hoài An',N'48 Nguyễn Kiệm P.Ba Vì, Q.Gò Vấp','0122345237','anhoai99@gmail.com')
insert into KhachHang values ('KH2',N'Chu Phương',N'135/2 Cầu Thị Nghè','0129345237','supeerman@gmail.com')
insert into KhachHang values ('KH3',N'Nguyễn Thị Thủy Tiên',N'35 D10 P.15, Q.12','0907832658','123@gmail.com')
insert into KhachHang values ('KH4',N'Nguyễn Công Hoàng Vũ',N'số 19 Phạm Văn Đồng P.4, Q.Thủ Dức','0907832658','anivu98@gmail.com')
insert into KhachHang values ('KH5',N'Trần Quốc Bảo',N'195/14/28 Diện Biên Phủ P.15 Q.Bình Thạnh','03574536778','choduysucvat@gmail.com')
insert into KhachHang values ('KH6',N'Nguyễn Công Hoài Lâm',N'43/2 Lê Văn Sĩ P.4 Q.Phú Nhuận','09034356623','choan123@gmail.com')
insert into KhachHang values ('KH7',N'Nguyễn  Lan Anh',N'123 Phan Xích Long P.12 Q.Gò Vấp','01659513115','chocat123@gmail.com')
insert into KhachHang values ('KH8',N'Văn Thị Bé',N'Số 4 Nguyễn Kiệm P.24 Q.11','01245523552','chobang123@gmail.com')


Insert into TaiKhoan values('Duy Do','duysimple')

insert into NhanVien values ('NV1',N'Đỗ Nguyễn Thanh Duy','12/29/1998','10/20/2017',N'154/10 Nguyễn Kim P6 Q10','4000000','01298310634',N'sieuanhhung98@gmail.com','Nam')
insert into NhanVien values ('NV2',N'Hoài An','08/17/1999','05/26/2018',N'453 Lãnh Binh Thăng P6 Q11','5000000','01298327346',N'hoaian99@gmail.com',N'Nữ')
insert into NhanVien values ('NV3',N'Nguyễn Công Hoàng Vũ','08/13/1998','11/25/2016',N'474 Điện Biên Phủ P10 Q5','10000000','01208702467',N'vucong98@gmail.com','Khác')
insert into NhanVien values ('NV4',N'Châu Gia Cát','12/24/1998','09/13/2016',N'Số 19 Quận Thủ Đức P4','12000000','0985982651',N'cat1998@gmail.com.com','Nam')
insert into NhanVien values ('NV5',N'Lâm Hoàng Tuấn An','11/30/1998','10/15/2016',N'474 Điện Biên Phủ P10 Q5','10000000','01208702467',N'vucong98@gmail.com','Khác')

insert into NhaCungCap values('NC101',N'Công ty TNHH Anh Minh')
insert into NhaCungCap values('NC102',N'Công ty cổ phần Tấn Phát')
insert into NhaCungCap values('NC103',N'Công ty Lê Phát')
insert into NhaCungCap values('NC104',N'Công ty TNHH Minh Thái')
insert into NhaCungCap values('NC105',N'Công ty TNHH FAP TIVI')
insert into NhaCungCap values('NC106',N'Công ty TNHH Duy Do')
insert into NhaCungCap values('NC107',N'Công ty Cổ Phần Hoàng Vũ')
insert into NhaCungCap values('NC108',N'Công ty TNHH Vạn Phúc')
insert into NhaCungCap values('NC109',N'Công ty TNHH Thành Công')
insert into NhaCungCap values('NC110',N'Công ty TNHH Gia Cát')
insert into NhaCungCap values('NC111',N'Công ty TNHH Dân Trí')
insert into NhaCungCap values('NC112',N'Công ty  Duy Đĩ')
insert into NhaCungCap values('NC113',N'Công ty TNHH Thịnh Vượng')
insert into NhaCungCap values('NC114',N'Công ty Sơn Phát')
insert into NhaCungCap values('NC115',N'Công ty TNHH Thịnh Phát')
insert into NhaCungCap values('NC116',N'Công ty Cát Tường')
insert into NhaCungCap values('NC117',N'Công ty TNHH An Dạt')
insert into NhaCungCap values('NC118',N'Công ty Trâm Anh')
insert into NhaCungCap values('NC119',N'Công ty TNHH An Vy')
insert into NhaCungCap values('NC120',N'Công ty TNHH Thành Khang')


insert into SanPham values('SP001',N'Nước Giải Khát',N'Việt Nam',N'Nước uống đủ loại','15.000','NC101')
insert into SanPham values('SP002',N'Thức Ăn Nhanh',N'Việt Nam',N'Đồ ăn trong ngày','20.000','NC102')
insert into SanPham values('SP003',N'Sữa',N'Việt Nam',N'Thức uống Năng Lượng','25.000','NC103')
insert into SanPham values('SP004',N'Dụng Cụ Học Tập',N'Việt Nam',N'Đồ dùng học sinh','5.000','NC104')
insert into SanPham values('SP005',N'Kem',N'Nước Ngoài',N'Ăn vặt','12.000','NC105')
insert into SanPham values('SP006',N'Mĩ Phẩm',N'Nước Ngoài',N'Làm đẹp','63.000','NC106')
insert into SanPham values('SP007',N'Mì gói',N'Việt Nam',N'Thức ăn ưa thích của SV','6.000','NC107')
insert into SanPham values('SP008',N'Xà Phòng',N'Việt Nam',N'Đồ dùng gia đình','30.000','NC108')
insert into SanPham values('SP009',N'Bim Bim',N'Việt Nam',N'Đồ ăn Vặt','7.000','NC109')
insert into SanPham values('SP010',N'Kotex',N'Việt Nam',N'Băng vệ sinh','25.000','NC110')
insert into SanPham values('SP011',N'Durex',N'Việt Nam',N'Bao cao su','45.000','NC111')
insert into SanPham values('SP012',N'Bột giặt',N'Việt Nam',N'Giặt quần áo','120.00','NC112')
insert into SanPham values('SP013',N'Nước mắm',N'Việt Nam',N'Gia vị','20.000','NC113')
insert into SanPham values('SP014',N'Đường',N'Việt Nam',N'Gia vị','12.000','NC114')
insert into SanPham values('SP015',N'Kẹo',N'Việt Nam',N'Đồ ăn Vặt','7.000','NC115')
insert into SanPham values('SP016',N'Bao tay cao su',N'Việt Nam',N'Dụng cụ','23.000','NC116')
insert into SanPham values('SP017',N'Bia',N'Việt Nam',N'Đồ uống','300.00','NC117')
insert into SanPham values('SP018',N'Bánh',N'Việt Nam',N'Đồ ăn Vặt','45.00','NC118')
insert into SanPham values('SP019',N'Đồ chơi',N'Việt Nam',N'Đồ giải trí','100.00','NC119')
insert into SanPham values('SP020',N'Gas mini',N'Việt Nam',N'Dụng cụ','15.00','NC120')

insert into HoaDon values('HD01','KH1','SP001','11/27/2017','1')
insert into HoaDon values('HD02','KH2','SP002','12/12/2017','1')
insert into HoaDon values('HD03','KH3','SP003','08/14/2016','1')
insert into HoaDon values('HD04','KH4','SP004','12/23/2014','1')
insert into HoaDon values('HD05','KH5','SP005','10/22/2016','1')
insert into HoaDon values('HD06','KH6','SP006','12/24/2017','1')
insert into HoaDon values('HD07','KH7','SP007','04/03/2017','1')
insert into HoaDon values('HD08','KH8','SP008','05/21/2017','1')




Update SanPham set MaSanPham ='sp0021',TenSanPham= N'co',XuatXu= N'hong',MoTa= N'kh^^ong',GiaTien=25,MaNhaCungCap='nc107' where MaSanPham ='sp002'




select * from sanpham

select *
from HoaDon