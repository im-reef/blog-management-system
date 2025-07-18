import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateUserProfileData{

    @Field(()=> Int)
    id: number;
   
    @Field()
    bio: string;
}