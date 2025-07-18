import { Injectable, Query } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { error } from "console";
import { Post } from "src/graphql/models/Post";
import { Tag } from "src/graphql/models/Tag";
import { User } from "src/graphql/models/User.entity";
import { CreatePostData } from "src/graphql/utils/createPost";
import { UpdatePostData } from "src/graphql/utils/updateUserPost";
import { UpdateUserProfileData } from "src/graphql/utils/updateUserProfile";
import { Repository } from "typeorm";


@Injectable()
export class PostService{

    constructor
    (
        @InjectRepository(Post) private postRepository: Repository<Post>, 
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Tag) private tagRepository: Repository<Tag>

    ){};


    getAllPost(){

        return this.postRepository.find({relations: ['author', 'tags']});
    }

    getAllTag(){

        return this.tagRepository.find()
    }

    async getPostById(id: number){

        const newUser = await this.postRepository.find({where: {author:{id}}, relations: ['author', 'tags']});
        
        if(!newUser){
            throw new Error('User not found')
        }
        return newUser;

    }

    async getPostByPostId(id: number){

        const newUser = await this.postRepository.findOne({where:{id}, relations: ['author', 'tags']});
        
        if(!newUser){
            throw new Error('User not found')
        }
        return newUser;

    }

    async createPost(createPostData: CreatePostData){

        const {title, content, author, tags} = createPostData;

        const authorName = await this.userRepository.findOne({where: {username: author}});

        if(!authorName){
            throw new Error('Author not found');
        }

        const tagEntities = await Promise.all(
            tags.map(async (tagName) => {
            let tag = await this.tagRepository.findOne({ where: { name: tagName } });
            if (!tag) {
                tag = this.tagRepository.create({ name: tagName });
                await this.tagRepository.save(tag);
            }
            return tag;
            })
        );

        const newPost = {

            title,
            content,
            author: authorName,
            tags: tagEntities
        }

        const createPost = this.postRepository.create(newPost)

        return await this.postRepository.save(createPost)

    }

    async updatePost(updateUserPost: UpdatePostData) {

        const existingPost = await this.postRepository.findOne({
            where: { id: updateUserPost.id },
            relations: ['author', 'tags'], 
        });

        if (!existingPost) {
            throw new Error('Post not found');
        }

        const { title, content, author, tags } = updateUserPost;

        if (title) {
            existingPost.title = title;
        }

        if (content) {
            existingPost.content = content;
        }

        /*
        // Optional: if author is passed and you're using relation
        if (author) {
            const user = await this.userRepository.findOneBy({ username: author });
            if (!user) throw new Error('Author not found');
            existingPost.author = user;
        } */

        // Optional: if new tags are provided
        if (tags && tags.length > 0) {
            const tagEntities = await Promise.all(
            tags.map(async (tagName) => {
                let tag = await this.tagRepository.findOne({ where: { name: tagName } });
                if (!tag) {
                tag = this.tagRepository.create({ name: tagName });
                await this.tagRepository.save(tag);
                }
                return tag;
            }),
            );
            existingPost.tags = tagEntities;
        }

        // Save the updated post
        return this.postRepository.save(existingPost);

        
    }

    async deletePost(id: number){

        const getPost = await this.postRepository.findOne({where: {id}, relations: ['author', 'tags']});

        if(!getPost){

            throw new Error("No PostID Found");
        }

        const beforeRemove = structuredClone(getPost);

        await this.postRepository.remove(getPost);

        return beforeRemove;


    }


    

}