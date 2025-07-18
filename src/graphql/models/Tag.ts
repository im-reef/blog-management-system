import { ObjectType, Int, Field } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Post } from "./Post";

@Entity({name: 'tags'})
@ObjectType()
export class Tag {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({unique: true})
    @Field()
    name: string;

    @ManyToMany(()=> Post, post => post.tags)
    @Field(()=> [Post], {nullable: true})
    post: Post[];
}