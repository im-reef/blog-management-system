import { ObjectType, Int, Field } from "@nestjs/graphql";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User.entity";
import { Tag } from "./Tag";

@Entity({name: 'post'})
@ObjectType()
export class Post {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    content: string;

    @ManyToOne(()=> User, user=> user.posts)
    @Field(()=> User)
    author: User;

    @ManyToMany(()=> Tag, tag=> tag.post, {cascade: true})
    @JoinTable()
    @Field(()=> [Tag], {nullable: true})
    tags: Tag[];
}