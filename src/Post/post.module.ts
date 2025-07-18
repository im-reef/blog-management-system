import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "src/graphql/models/Post";
import { PostResolver } from "./Post.resolver";
import { PostService } from "./post.service";
import { Tag } from "src/graphql/models/Tag";
import { UsersModule } from "src/users/user.module";
import { User } from "src/graphql/models/User.entity";


@Module({
    imports: [
        
        TypeOrmModule.forFeature([Post, Tag, User]),
        UsersModule
    ],
    providers: [PostResolver, PostService],
})
export class PostModule{

}