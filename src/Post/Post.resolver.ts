import { Args, Context, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "../graphql/models/Post";
import { mockPosts } from "src/mockUsers/mockPosts";
import { CreatePostData } from "../graphql/utils/createPost";
import { UpdatePostData } from "../graphql/utils/updateUserPost";
import { Tag } from "../graphql/models/Tag";
import { mockTags } from "src/mockUsers/mockTag";
import { PostService } from "./post.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";



@Resolver(()=> Post)
export class PostResolver{

    constructor(private postService: PostService){}

    @Query(()=> [Post])
    @UseGuards(JwtAuthGuard)
    getAllPost(){

        return this.postService.getAllPost();
    }

    @Query(()=> [Post], {nullable: true})
    @UseGuards(JwtAuthGuard)
    getPostById(@Args('id', {type: ()=> Int}) id: number, @Context() context){

        const user = context.req.user;

        if(id !== user.userId){

            throw new Error("You have no authorization to post ")
        }
        const newPost = this.postService.getPostById(id);
        return newPost;
    }

    @Mutation(() => Post)
    @UseGuards(JwtAuthGuard)
    async createPost(@Args('createPost') createPostData: CreatePostData, @Context() context) {

        const user = context.req.user;

        const {author, ...rest} = createPostData;

        console.log(author)
        console.log(user.username)

        if(author !== user.username){

            throw new Error("You have no authorization to post ")
        }
    
        const newPost = await this.postService.createPost(createPostData);

        //console.log(newPost);

        return newPost;
    }

    @Query(()=>[Tag])
    getAllTag(){

        return this.postService.getAllTag();
    }


    
    @Mutation(()=> Post)
    @UseGuards(JwtAuthGuard)
    async updatePost(@Args('updatePost') updatePostData: UpdatePostData, @Context() context){

        const user = context.req.user;

        //check if post actually exits
        const post = await this.postService.getPostByPostId(updatePostData.id);

        console.log(post.author.id)
        console.log(user.userId)

        //check if post is users
        if(!post){
            throw new Error("No existing post with that ID");
        }

        if(post.author.id !== user.userId){

            throw new Error("You have no authorization to update this post ")
        }
        const postUpdate = this.postService.updatePost(updatePostData);

        return postUpdate;
    }

    @Mutation(()=> Post)
    @UseGuards(JwtAuthGuard)
    async deletePost(@Args('input', {type: ()=>Int}) id: number, @Context() context){

        const user = context.req.user;

        const post = await this.postService.getPostByPostId(id);

        if(post.author.id !== user.userId){

            throw new Error("You have no authorization to delete this post ")
        }

        const deletedObj = this.postService.deletePost(id);

        return deletedObj;


    }

}


