import { InputType, Field, Int} from "@nestjs/graphql";
import { ArrayMinSize, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class UpdatePostData{
    @Field(type=> Int)
    id: number;

    @Field({nullable: true})
    title?: string;

    @Field({nullable: true})
    content?: string;

    @Field({nullable: true})
    author?: string;

    @Field(() => [String], { nullable: true })
    tags?: string[];
}



