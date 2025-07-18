import { ObjectType, Int, Field } from "@nestjs/graphql";
import { UserProfile } from "./UserProfile.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Post } from "./Post";


@Entity({name: 'users'})
@ObjectType()
export class User {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    username: string;

    @Column()
    password: string;

    @OneToOne(()=> UserProfile, ()=> profile => profile.user)
    @JoinColumn()
    @Field(()=> UserProfile, {nullable: true})
    profile?: UserProfile;

    @OneToMany(()=> Post, post=> post.author)
    @JoinColumn()
    @Field(()=> [Post], {nullable: true})
    posts?: Post[];

}