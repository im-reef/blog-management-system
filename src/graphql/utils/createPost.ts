import { InputType, Field} from "@nestjs/graphql";

@InputType()
export class CreatePostData{

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    author: string;

    @Field(()=> [String])
    tags: string[];
}