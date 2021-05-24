USE [RSS]
GO

Create table [Category]
(
	[Id_Category] Int Identity(1,1) NOT NULL,
	[Name] Nvarchar(100) NULL,
	[Description] Nvarchar(100) NULL,
	[Alias] Varchar(100) NULL,
Primary Key ([Id_Category])
) 
go

Create table [Article]
(
	[Id_Article] Int Identity(1,1) NOT NULL,
	[Title] Nvarchar(100) NULL,
	[Alias] Varchar(1000) NULL,
	[Author] Nvarchar(100) NULL,
	[Description] Nvarchar(1000) NULL,
	[DatePublished] Datetime NULL,
	[Id_Category] Int NOT NULL,
Primary Key ([Id_Article])
) 
go

Alter table [Article] add  foreign key([Id_Category]) references [Category] ([Id_Category])  on update no action on delete no action 
go

SELECT * FROM [Article]