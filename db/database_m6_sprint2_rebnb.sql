create database if not exists sprint2_ReBnb;
use sprint2_rebnb;


create table user (
id bigint primary key auto_increment,
name varchar(45) not null,
email varchar(45)  not null unique,
birthday varchar(45) not null,
phone_number varchar(45),
image varchar(225),
joined_date varchar(45),
country varchar(45),
region varchar(45),
city varchar(45),
is_deleted boolean default 0,
language varchar(45),
is_identity_verified boolean default 0,
is_super_host boolean default 0,
description text);
-- account_id bigint,
-- foreign key (account_id) references `account` (id));

create table role (
id int primary key auto_increment,
name varchar(45) not null);

create table account (
id bigint primary key auto_increment,
user_id bigint,
password varchar(255) not null,
foreign key (user_id) references `user` (id));

create table account_role (
id int primary key auto_increment,
role_id int not null,
account_id bigint not null,
foreign key (role_id) references `role` (id),
foreign key (account_id) references `account`(id));

create table type_of_place (
id int primary key auto_increment,
name varchar(225) not null);

create table property_type (
id int primary key auto_increment,
name varchar(225) not null);

create table category (
id int primary key auto_increment,
name varchar(225) not null,
image varchar(225));

create table amenity (
id int primary key auto_increment,
name varchar(225) not null);

create table amenity_detail (
id int primary key auto_increment,
name varchar(225) not null,
description text,
amenity_id int not null,
foreign key (amenity_id) references `amenity` (id));

create table property (
id bigint primary key auto_increment,
title varchar(225) not null,
description text,
country varchar(225) not null,
region varchar(225)not null,
city varchar(225)not null,
type_of_place_id int not null,
property_type_id int not null,
price_per_night double not null,
host_id bigint not null,
max_guest int not null,
bedroom int not null,
bed int not null,
bath int not null,
is_deleted boolean default 0,
map text,
foreign key (type_of_place_id) references `type_of_place` (id),
foreign key (property_type_id) references `property_type` (id),
foreign key (host_id) references `user` (id));

create table property_category (
id int primary key auto_increment,
category_id int not null,
property_id bigint not null,
foreign key (category_id) references `category` (id),
foreign key (property_id) references `property` (id));

create table property_amenity_detail (
id bigint primary key auto_increment,
property_id bigint not null,
amenity_detail_id int not null,
foreign key (property_id) references `property` (id),
foreign key (amenity_detail_id) references `amenity_detail` (id));

create table property_image (
id bigint primary key auto_increment,
property_id bigint not null,
link_image varchar(225) not null,
foreign key (property_id) references `property` (id));


create table service_fee (
id int primary key auto_increment,
rental_night int not null,
tenant_fee double not null,
host_fee double not null);

create table booking_status (
id int primary key auto_increment,
name varchar(45) not null);


create table review_property (
id bigint primary key auto_increment,
review_date date,
content text not null,
score int not null);

create table booking (
id bigint primary key auto_increment,
property_id bigint not null,
tenant_id bigint not null,
service_fee_id int not null,
check_in date not null,
check_out date not null,
deposit double,
total_price double,
review_property_id bigint unique default null,
guest int,
status int default 1,
foreign key (property_id) references `property` (id),
foreign key (tenant_id) references `user` (id),
foreign key (status) references `booking_status` (id),
foreign key (service_fee_id) references `service_fee` (id),
foreign key (review_property_id) references `review_property` (id));


