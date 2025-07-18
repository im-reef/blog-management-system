import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateUserInput{

    @Field()
    username: string;

    @Field()
    password: string;

}