
-- user
insert into `sprint2_ReBnb`.`user`(`id`, `name`,`email`,`birthday`,`phone_number`, `image`,`joined_date`,`country`,`region`,`city`,`is_deleted`,`language`,`is_identity_verified`,`is_super_host`,`description`) 
value (1,"Nguyen Xuan Anh","nguyenxuananh@gmail.com", "1990-01-01","0901453456","../../assets/img/userImage.png","2020-01-01",null,null,null,0,null,0,0,null);
insert into `sprint2_ReBnb`.`user`(`id`, `name`,`email`,`birthday`,`phone_number`, `image`,`joined_date`,`country`,`region`,`city`,`is_deleted`,`language`,`is_identity_verified`,`is_super_host`,`description`) 
value (2,"Ngo Duc Phuc","ngoducphuc@gmail.com", "1986-01-01","0901456789","../../assets/img/userImage.png","2020-02-02",null,null,null,0,null,0,0,null);
insert into `sprint2_ReBnb`.`user`(`id`, `name`,`email`,`birthday`,`phone_number`, `image`,`joined_date`,`country`,`region`,`city`,`is_deleted`,`language`,`is_identity_verified`,`is_super_host`,`description`) 
value (3,"Bui Hong An","buihongan@gmail.com", "1986-02-02","0901456756","../../assets/img/userImage.png","2021-02-02",null,null,null,0,null,0,0,null);
insert into `sprint2_ReBnb`.`user`(`id`, `name`,`email`,`birthday`,`phone_number`, `image`,`joined_date`,`country`,`region`,`city`,`is_deleted`,`language`,`is_identity_verified`,`is_super_host`,`description`) 
value (4,"Le Phuoc Tuong","lephuoctuongn@gmail.com", "1990-02-02","090156789","../../assets/img/userImage.png","2022-02-02",null,null,null,0,null,0,0,null);

--  role 
insert into `sprint2_ReBnb`.`role`(`id`, `name`) value(1,"Admin");
insert into `sprint2_ReBnb`.`role`(`id`, `name`) value(2,"User");

--  account 
insert into `sprint2_ReBnb`.`account`(`id`,`user_id`, `password`) value(1,1,"$2a$12$KpE0gn.4eEsjExzkz.jxt.6034KUFIwr6Nex9dfCsWQnkbRMX7Vei");
insert into `sprint2_ReBnb`.`account`(`id`,`user_id`, `password`) value(2,2,"$2a$12$VT6AqwoYrCWsI0oeM2zmL.yRvJ4oDyOB4oZDo3uaQRUWeVXJcA0Ny");
insert into `sprint2_ReBnb`.`account`(`id`,`user_id`, `password`) value(3,3,"$2a$12$VT6AqwoYrCWsI0oeM2zmL.yRvJ4oDyOB4oZDo3uaQRUWeVXJcA0Ny");
insert into `sprint2_ReBnb`.`account`(`id`,`user_id`, `password`) value(4,4,"$2a$12$VT6AqwoYrCWsI0oeM2zmL.yRvJ4oDyOB4oZDo3uaQRUWeVXJcA0Ny");

-- account_role 
insert into `sprint2_ReBnb`.`account_role`(`id`, `role_id`,`account_id`) value(1,1,1);
insert into `sprint2_ReBnb`.`account_role`(`id`, `role_id`,`account_id`) value(2,2,2);
insert into `sprint2_ReBnb`.`account_role`(`id`, `role_id`,`account_id`) value(3,2,3);
insert into `sprint2_ReBnb`.`account_role`(`id`, `role_id`,`account_id`) value(4,2,4);

--   type_of_place 
insert into `sprint2_ReBnb`.`type_of_place`(`id`, `name`) value(1,"Entire");
insert into `sprint2_ReBnb`.`type_of_place`(`id`, `name`) value(2,"Private Room");

--   property_type 
insert into `sprint2_ReBnb`.`property_type`(`id`, `name`) value(1,"House");
insert into `sprint2_ReBnb`.`property_type`(`id`, `name`) value(2,"Guest House");
insert into `sprint2_ReBnb`.`property_type`(`id`, `name`) value(3,"Hotel");
insert into `sprint2_ReBnb`.`property_type`(`id`, `name`) value(4,"Villa");

--   category 
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(1,"Amazing Views","https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(2,"BeachFront","https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(3,"Creative spaces","https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(4,"Tiny homes","https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(5,"National parks","https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(6,"Amazing pools","https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(7,"A-frames","https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(8,"Surfing","https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(9,"Private rooms","https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(10,"OMG!","https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(11,"Boats","https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(12,"Trending","https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(13,"Desert","https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(14,"Camping","https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(15,"Countryside","https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(16,"Tropical", "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(17,"Lakefront","https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(18,"Luxe","https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg");
insert into `sprint2_ReBnb`.`category`(`id`, `name`, `image`) value(19,"Farms","https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg");

--   amenitiy 
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(1,"Bathroom");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(2,"Bedroom and laundry");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(3,"Heating and cooling");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(4,"Home safety");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(5,"Internet and office");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(6,"Kitchen and dining");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(7,"Location features");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(8,"Outdoor");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(9,"Parking and facilities");
insert into `sprint2_ReBnb`.`amenity`(`id`, `name`) value(10,"Services");

--   amenity_detail 
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(1,"Hair dryer",null, 1);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(2,"Cleaning products",null, 1);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(3,"Outdoor shower",null, 1);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(4,"Body soap",null, 1);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(5,"Hot water",null, 1);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(6,"Shower gel",null, 1);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(7,"Essentials","Towels, bed sheets, soap, and toilet paper", 2);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(8,"Hangers",null, 2);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(9,"Extra pillows and blankets",null, 2);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(10,"Iron",null, 2);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(11,"Clothing storage",null, 2);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(12,"Air conditioning",null, 3);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(13,"Indoor fireplace",null, 3);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(14,"Security cameras on property",null, 4);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(15,"Smoke alarm",null, 4);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(16,"Fire extinguisher",null, 4);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(17,"Lock on bedroom door","Private room can be locked for safety and privacy", 4);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(18,"First aid kit",null, 4);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(19,"Wifi",null, 5);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(20,"Dedicated workspace",null, 5);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(21,"Refrigerator",null, 6);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(22,"Dishes and silverware","Bowls, chopsticks, plates, cups, etc.", 6);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(23,"Coffee maker",null, 6);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(24,"Patio or balcony",null, 8);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(25,"Fire pit",null, 8);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(26,"Outdoor dining area",null, 8);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(27,"BBQ grill",null, 8);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(28,"Free parking on premises",null, 9);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(29,"Pool",null, 9);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(30,"Hot tub",null, 9);
insert into `sprint2_ReBnb`.`amenity_detail`(`id`, `name`,`description`, `amenity_id`) value(31,"Pets allowed",null, 10);

-- property
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (1,"Mountain bungalow","Homestay is surrounded on 4 sides by mountains located in the ecological complex of Trang An and Tam Coc Bich Dong , in the middle of the tourist center of Ninh Binh, so it is very convenient for traveling and resting, supporting rooms for guests to check in early. She checks out late and does not charge a fee so that visitors have more comfortable time when traveling to Ninh Binh
Room rate includes free breakfast, filtered water, in-room coffee, swimming pool, bicycle", "Vietnam","Ninh Binh","Ninh Xuan",2,1,19,1,2,1,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (2,"Turtle Bay HuaHin eco luxeTurt Villa in Lotus Bay","Turtle Eco Luxe Villa - Rare find OMG.A unique Turtle Shape villa located in natural lotus pond surrounding by nature Khao Tao Valley and Sai Noi beach. Private one bed room studio villa comprising spacious bathroom and outdoor waterside living deck.
We have our unique design cafe and restaurant you can order breakfast lunch and dinner at Turtle Bay
Wining Global Design Award - Turtle bay is a unique interpretation living in Hua Hin.
The idyllic floating Turtle Shape villa cover 25 SQM for bedroom and large bathroom. This compound also has common areas for our guest such as guest living room, café, botanic garden. The room includes several added amenities just like luxury resort with your own amenity.
Guests of the Turtle Bay will enjoy food and drinks at Turtle Bay Café and Restaurant", "Thailand","Praachuap Khiri Khan","Hua Hin District",1,1,99,1,2,1,1,1,0,'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.7552114310406!2d99.9522466895815!3d12.614769155403996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fdabbcf4317a81%3A0x66c8cd5d7b57af91!2sNusara%20Garden%202!5e0!3m2!1sen!2s!4v1682306572716!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (3,"Cozy Modern Beach House w/ Pool, Hot Tub & More!","Welcome to our beautiful beach house on the shores of Lake Erie, where relaxation and fun come together in a private, secluded area. This family-friendly home is designed for your ultimate comfort, with a range of onsite amenities including a sparkling pool, inviting hot tub, cozy fire pit, and custom-built pool table.",
 "Canada","Ontario","Wheatley",1,1,458,1,16,5,9,2,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (4,"Nacpan Beach Glamping, Ocean View Room","Nacpan Glamping is located on one of the top rated beaches in Asia, ‘Nacpan Beach’, El Nido, Palawan. Stretching 4.2km, this white sand beach is fast becoming a World renowned must see destination in the Philippines.
Nacpan Glamping offers the unique, one and only experience of staying in a state of the art 6m wide glamping tent meters from the beach",
 "Philippines","El Nido","",1,1,189,1,1,1,2,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (5,"Pool Villa by Humble","A mini pool villa for a couple who look for a nice and quiet vacation. Located in the Heart of Bang MaKham, local of Koh Samui. The sunset of Bang MaKham will be your best experience of your vacation.",
 "Thailand","Surat Thaini","Ko Samui",2,3,55,1,2,1,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (6,"Coconut Island 5 Bedroom Beachfront Pool Villa","The space
5 Bedroom Grand Beach Front Pool Villa – 2 Masters (King) 1 Double (King) and 2 twins
Located directly on a 500m stretch of private beach, one can find our flagship accommodation type in the form of the Grand Beach Front Villas.",
 "Thailand","Phuket","Tambon Kamala",1,3,962,1,13,5,7,5,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (7,"Udaipur Rosie's Retreat Lake Facing Apartment","Please read the listing information before booking.
Rosie's Retreat is not a hotel and does not offer hotel services.
Rosie's Retreat is not suitable  for children.",
 "India","Rajasthan","Udaipur",1,1,44,1,2,1,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (8,"Adorable Lake-view Hut rooms with single bed.","Located right by the lake in the peaceful area of city. Cute rooms and beautiful vibes.",
 "Nepal","Gandaki","Pokhara",2,1,10,1,2,2,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (9,"A Cozy Wooden Cabin & Attic | Itsy Bitsy","A cozy stay in a unique A-Frame Cabin built on the top of the mountain. It offers a beautiful mountain view and you can see the stars from the glass roof at night. Apart from it, this space has everything you would want for a vacation home. Enjoy the views of the snow-covered peaks and pine trees right from your bed. Soak in the sun all day in your living area as it offers a glass roof. Prepare a delicious meal in our little kitchen or try something special from our menu.",
 "India","Himachal Pradesh","Jari",1,1,112,1,4,2,2,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (10,"1 Bedroom Apartment Pool large kitchen parking 6B","I Double bedroom Apartment with on-suite  Air Condition, super-fast Internet.   You’ll love my place because of the neighborhood and the coziness. My place is good for couples, solo adventurers, business travelers, families (with kids), and big groups. We Hire Cars and Motor Bikes and do Tours.  You are welcome to cook in Our large Kitchen and BBQ area at the pool Fishing lake BBQ   Monthly Discounts -50% ",
 "Thailand","Udon Thani","Phen",1,1,15,1,2,2,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (11,"SCARLET PEARL HALONG CRUISE - BEST&Balcony&JACUZZI","I am Scarlet Pearl's Partner - Sammy Chan from VietBlue Tours would love to help you reserve
SCARLET PEARL CRUISE-UNIQUE cruise and tours(daily tours-multi days tours-outdoor activities-kayaking & canoeing-cruises, sailing and water tours) with luxury, high-end options. With thousands of customers were satisfied, we are self-confident about arranging the best holidays for you to Halong Bay or any place in Vietnam .",
 "Vietnam","Quang Ninh","Ha Long",2,1,338,1,2,1,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
insert into `sprint2_ReBnb`.`property`(`id`, `title`,`description`,`country`,`region`, `city`,`type_of_place_id`,`property_type_id`,`price_per_night`,`host_id`,`max_guest`,`bedroom`,`bed`,`bath`,`is_deleted`, `map`) 
value (12,"Jeju-i - pretty sunset <White Room>","JEJU_I Pension is located in a quiet village famous for its beautiful sunsets and windmills.
Our couple lives on the first floor, and the second and third floors are reserved exclusively for guests.",
 "South Korea","Jeju","Jeju-si",1,1,68,1,2,1,1,1,0, '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.0277970432837!2d105.93613778346415!3d20.25137546210263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367b408f14681b%3A0xc15ad8a056ce0919!2sTrang%20An%20Elegant%20Homestay!5e0!3m2!1sen!2s!4v1682306393744!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');


--  property_category 
insert into `sprint2_ReBnb`.`property_category`(`id`, `category_id`,`property_id`) value(1,3,1);
insert into `sprint2_ReBnb`.`property_category`(`id`, `category_id`,`property_id`) value(2,5,1);
insert into `sprint2_ReBnb`.`property_category`(`id`, `category_id`,`property_id`) value(3,1,2);
insert into `sprint2_ReBnb`.`property_category`(`id`, `category_id`,`property_id`) value(4,5,2);
insert into `sprint2_ReBnb`.`property_category`(`id`, `category_id`,`property_id`) value(5,1,1);
insert into `sprint2_ReBnb`.`property_category`(`id`, `category_id`,`property_id`) value(6,16,2);

--   property_amenity_detail 
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(1,1,1);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(2,1,3);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(3,1,5);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(4,1,12);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(5,1,18);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(6,1,20);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(7,1,25);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(8,1,28);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(9,2,1);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(10,2,3);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(11,2,5);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(12,2,8);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(13,2,12);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(14,2,20);
insert into `sprint2_ReBnb`.`property_amenity_detail`(`id`, `property_id`,`amenity_detail_id`) value(15,2,28);

--   property_image 
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(1,1,"https://a0.muscache.com/im/pictures/miso/Hosting-742622306357457020/original/414a328c-0146-424f-92fa-862420459593.jpeg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(2,1,"https://a0.muscache.com/im/pictures/miso/Hosting-742622306357457020/original/9c6317c3-ec7f-4697-b550-e8cb09874190.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(3,1,"https://a0.muscache.com/im/pictures/miso/Hosting-742622306357457020/original/d21083fd-534b-4fa3-9a84-b69373f996df.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(4,1,"https://a0.muscache.com/im/pictures/miso/Hosting-862778622028740408/original/d9d0c5f4-a3e5-49bd-9541-1adcc6b32460.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(5,1,"https://a0.muscache.com/im/pictures/miso/Hosting-862778622028740408/original/013d08b4-9c10-464f-a5f8-c18cbdc453d3.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(6,2,"https://a0.muscache.com/im/pictures/miso/Hosting-53163431/original/5ad94cf3-24eb-4eba-b23e-6926a66738be.jpeg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(7,2,"https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(8,2,"https://a0.muscache.com/im/pictures/77c3c61e-930a-4e7c-ab4d-59413c1f0b87.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(9,2,"https://a0.muscache.com/im/pictures/3aa0637d-2fe6-4b64-8c06-b9165c393937.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(10,2,"https://a0.muscache.com/im/pictures/26229a9b-9c2c-4e36-bb6c-bf2ee22b1514.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(11,3,"https://a0.muscache.com/im/pictures/miso/Hosting-690654510873991953/original/f09b85c3-1d69-4512-9b12-6b3f6b5709db.png?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(12,3,"https://a0.muscache.com/im/pictures/miso/Hosting-690654510873991953/original/8521483e-ffa5-437f-9b5c-27741e00f10e.png?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(13,3,"https://a0.muscache.com/im/pictures/miso/Hosting-690654510873991953/original/7c15b49f-24f7-4573-9c13-57f4b84cacd4.png?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(14,3,"https://a0.muscache.com/im/pictures/miso/Hosting-690654510873991953/original/7aab3650-1105-4b8b-826e-0d4e5d2542ff.png?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(15,3,"https://a0.muscache.com/im/pictures/miso/Hosting-690654510873991953/original/80d1e023-4046-4866-8a26-56f545e5cffa.png?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(16,4,"https://a0.muscache.com/im/pictures/a2467f35-2869-4d3d-ac4c-81c553a3e643.jpg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(17,4,"https://a0.muscache.com/im/pictures/5e902b1f-feb7-4adf-9334-9016561ff338.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(18,4,"https://a0.muscache.com/im/pictures/c3fcd3f6-3a5c-421e-99d7-82acbc6d9708.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(19,4,"https://a0.muscache.com/im/pictures/0c5d6a7e-3203-42d4-af92-3adc65e39969.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(20,4,"https://a0.muscache.com/im/pictures/3648aed7-f383-4b74-ab5d-f444e20a85f2.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(21,5,"https://a0.muscache.com/im/pictures/982ef679-2ce5-45f5-96c9-f66b34244be7.jpg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(22,5,"https://a0.muscache.com/im/pictures/miso/Hosting-28298543/original/2f63e7c9-1133-49ac-b75d-dff79b61920e.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(23,5,"https://a0.muscache.com/im/pictures/81423324-52d0-49d9-9f2d-6ce2f817808d.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(24,5,"https://a0.muscache.com/im/pictures/a279ba4f-eb9a-4743-b9fe-3d042fe9fb84.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(25,5,"https://a0.muscache.com/im/pictures/ecc983b2-1a6a-4fbe-b062-6778c7118066.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(26,7,"https://a0.muscache.com/im/pictures/9f69a80a-a5e0-4e50-9e6b-54cd3fc1ea0a.jpg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(27,7,"https://a0.muscache.com/im/pictures/b6e22bf2-6531-43a8-9c81-0be03ce76ca3.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(28,7,"https://a0.muscache.com/im/pictures/4cbbecd7-cdd2-44ee-8179-9acb2f6db052.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(29,7,"https://a0.muscache.com/im/pictures/bffeeaf2-4463-4e27-83b5-cc2014b5bf33.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(30,7,"https://a0.muscache.com/im/pictures/0c8d33c4-f9f2-4114-8243-2d91451746f5.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(31,8,"https://a0.muscache.com/im/pictures/miso/Hosting-736584044082645128/original/8ad1f06c-10b8-4f27-9ba0-697f621f4c99.jpeg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(32,8,"https://a0.muscache.com/im/pictures/miso/Hosting-736584044082645128/original/53f4200f-695b-471e-aa44-1fce7e612b18.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(33,8,"https://a0.muscache.com/im/pictures/miso/Hosting-736584044082645128/original/1cd7a5f0-5422-4752-ac2f-80e2ae7bc09b.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(34,8,"https://a0.muscache.com/im/pictures/miso/Hosting-736584044082645128/original/5615cc4e-5c1a-4442-b141-29da9aab2dd5.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(35,8,"https://a0.muscache.com/im/pictures/miso/Hosting-736584044082645128/original/b745bfc9-dd2e-4ad3-95a3-69f6c88fd787.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(36,9,"https://a0.muscache.com/im/pictures/miso/Hosting-52248610/original/25b0b926-a6e9-499d-b8b5-7b49671b94d5.jpeg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(37,9,"https://a0.muscache.com/im/pictures/miso/Hosting-52248610/original/f1a2dac7-d8c9-49d1-b8e5-6fdb41be946a.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(38,9,"https://a0.muscache.com/im/pictures/miso/Hosting-52248610/original/13ef344d-d88f-4267-97d8-d0ef3e9996d2.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(39,9,"https://a0.muscache.com/im/pictures/miso/Hosting-52248610/original/be012c95-b1cb-46f0-a70c-c56fa1f32c1d.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(40,9,"https://a0.muscache.com/im/pictures/miso/Hosting-52248610/original/b9fa5a19-aed1-4bf8-a431-fb22abb19fa3.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(41,10,"https://a0.muscache.com/im/pictures/86a32b27-0365-4fe6-a428-8418e62f8d77.jpg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(42,10,"https://a0.muscache.com/im/pictures/miso/Hosting-15720025/original/8f47064b-5cc4-4ae3-9610-c58180fb101b.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(43,10,"https://a0.muscache.com/im/pictures/2de03ecd-7228-4733-a0f1-64999aa5bac6.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(44,10,"https://a0.muscache.com/im/pictures/82d7de94-a212-42b6-b91d-8c924a6dab67.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(45,10,"https://a0.muscache.com/im/pictures/8b2704d7-4374-49b9-aa07-52da0339cc9a.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(46,11,"https://a0.muscache.com/im/pictures/df6f2fe0-6a5a-4780-b580-3402e6e8d350.jpg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(47,11,"https://a0.muscache.com/im/pictures/3d1619d3-8ded-46fc-84d7-4347040f9242.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(48,11,"https://a0.muscache.com/im/pictures/c9c23b11-eeb9-4ccb-ad0d-9f8e1c6f12c5.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(49,11,"https://a0.muscache.com/im/pictures/54a449f5-9552-41a5-a231-53d8daa0acb4.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(50,11,"https://a0.muscache.com/im/pictures/267d6397-e33d-433f-9648-853e45ff13c6.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(51,12,"https://a0.muscache.com/im/pictures/fc0efcc2-5f90-46bc-8272-05fdda4d105d.jpg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(52,12,"https://a0.muscache.com/im/pictures/6c9a0893-cdbb-4ad3-8420-175fce99a07e.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(53,12,"https://a0.muscache.com/im/pictures/500da374-839d-4312-a400-64e6d33a6109.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(54,12,"https://a0.muscache.com/im/pictures/f9cf4675-478a-44d6-8d8b-62a367c7c7dd.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(55,12,"https://a0.muscache.com/im/pictures/df74bb98-b3b0-4b9f-9ec6-4fafcc8bcc80.jpg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(56,6,"https://a0.muscache.com/im/pictures/miso/Hosting-692425838804976221/original/8d900092-bb2a-467c-aa55-610f43b63d99.jpeg?im_w=960");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(57,6,"https://a0.muscache.com/im/pictures/miso/Hosting-692425838804976221/original/4ccd6a6a-3d21-4ff5-8cc6-12117bd7c5d2.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(58,6,"https://a0.muscache.com/im/pictures/miso/Hosting-692425838804976221/original/32b47552-f721-4f39-b40c-13f190624517.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(59,6,"https://a0.muscache.com/im/pictures/miso/Hosting-692425838804976221/original/4ef9c167-e542-46a1-a913-8cefcb1b5bcd.jpeg?im_w=720");
insert into `sprint2_ReBnb`.`property_image`(`id`, `property_id`,`link_image`) value(60,6,"https://a0.muscache.com/im/pictures/miso/Hosting-692425838804976221/original/4e5a3e05-43f0-482b-835b-f1bc24a939ad.jpeg?im_w=720");
--   service_fee 
insert into `sprint2_ReBnb`.`service_fee`(`id`, `rental_night`,`tenant_fee`, `host_fee`) value(1,3,0.12, 0.2);
insert into `sprint2_ReBnb`.`service_fee`(`id`, `rental_night`,`tenant_fee`, `host_fee`) value(2,7,0.10, 0.18);
insert into `sprint2_ReBnb`.`service_fee`(`id`, `rental_night`,`tenant_fee`, `host_fee`) value(3,14,0.08, 0.15);
insert into `sprint2_ReBnb`.`service_fee`(`id`, `rental_night`,`tenant_fee`, `host_fee`) value(4,28,0.05, 0.10);

--   booking_status 
insert into `sprint2_ReBnb`.`booking_status`(`id`, `name`) value(1,"UnPaid");
insert into `sprint2_ReBnb`.`booking_status`(`id`, `name`) value(2,"Paid");
insert into `sprint2_ReBnb`.`booking_status`(`id`, `name`) value(3,"Completed Trip");
insert into `sprint2_ReBnb`.`booking_status`(`id`, `name`) value(4,"Canceled");

--   review_property 
insert into `sprint2_ReBnb`.`review_property`(`id`, `review_date`, `content`, `score`) value(1,"2023-04-01","Facility was new, modern. Host was friendly", 5);
insert into `sprint2_ReBnb`.`review_property`(`id`, `review_date`, `content`, `score`) value(2,"2023-04-01","Facility was ok. Host was friendly", 4);
insert into `sprint2_ReBnb`.`review_property`(`id`, `review_date`, `content`, `score`) value(3,"2023-04-12","Facility was new, modern. Host was friendly", 5);


-- booking
insert into `sprint2_ReBnb`.`booking`(`id`, `property_id`,`tenant_id`,`service_fee_id`,`check_in`, `check_out`,`deposit`,`total_price`,`review_property_id`,`status`,`guest`) 
value (1,1,2,1,"2023-03-25","2023-03-27",0,89,1,3,2);
insert into `sprint2_ReBnb`.`booking`(`id`, `property_id`,`tenant_id`,`service_fee_id`,`check_in`, `check_out`,`deposit`,`total_price`,`status`,`guest`) 
value (2,2,2,1,"2023-05-25","2023-05-27",0,0,1,2);
insert into `sprint2_ReBnb`.`booking`(`id`, `property_id`,`tenant_id`,`service_fee_id`,`check_in`, `check_out`,`deposit`,`total_price`,`review_property_id`,`status`,`guest`)  
value (3,1,2,1,"2023-03-28","2023-03-30",0,89,2,3,2);
insert into `sprint2_ReBnb`.`booking`(`id`, `property_id`,`tenant_id`,`service_fee_id`,`check_in`, `check_out`,`deposit`,`total_price`,`review_property_id`,`status`,`guest`) 
value (4,2,2,1,"2023-04-02","2023-04-04",0,0,3,3,2);
