# PeerCraft_wed
# create database 
    create table 
    CREATE TABLE `peercraft`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `gmail` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

# cách chạy 
   FE => đứng ở file my-app run npm start  + tạo terminal mới run npx @tailwindcss/cli -i ./src/styles/index.css -o ./public/output.css --watch
   