CREATE DATABASE tccTenis;
use tccTenis;

CREATE TABLE tb_usuario (
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(200),
    ds_email		varchar(200),
    ds_senha		varchar(20)
);