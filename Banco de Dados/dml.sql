use tccTenis;

-- usuario login
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
	VALUES ('andre', 'dede@gmail.com', '1234');
    
-- efetuar login
select id_usuario		id,
	   nm_usuario		nome,
       ds_email			email
  from tb_usuario
   where ds_email	    = 'dede@gmail.com'
	 and ds_senha		= '1234';