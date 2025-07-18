import { ObjectType, Int, Field } from "@nestjs/graphql";
import { Entity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { User } from "./User.entity";

@Entity({name: 'user-profile'})
@ObjectType()
export class UserProfile {

    @PrimaryColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    bio: string;

    @OneToOne(()=> User, user=> user.profile, {nullable: true})
    @Field(()=> User)
    user: User;
}