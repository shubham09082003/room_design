import {integer, serial, varchar,  pgTable } from "drizzle-orm/pg-core";


export const User = pgTable('users',{
    id : serial('id').primaryKey(),
    name : varchar('name',{length:255}).notNull(),
    email : varchar('email',{length:255}).notNull().unique(),
    imageUrl : varchar('image_url',{length:255}).notNull(),
    credits : integer('credits').default(3),

});

export const AiGeneratedImages = pgTable('ai_generated_images',{
    id : serial('id').primaryKey(),
    roomType : varchar('room_type',{length:255}).notNull(),
    designType : varchar('design_type',{length:255}).notNull(),
    additionalReq : varchar('additional_req',{length:255}).notNull(),
    imageUrl : varchar('image_url',{length:255}).notNull(),
    aiImage : varchar('ai_image',{length:255}).notNull(),
    userEmail : varchar('user_email',{length:255}),
});

