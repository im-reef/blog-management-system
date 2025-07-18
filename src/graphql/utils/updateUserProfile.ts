import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class UpdateUserProfileData{

    @Field(()=> Int)
    id: number;
   
    @Field()
    bio: string;
}