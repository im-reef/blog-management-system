import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "../graphql/models/User.entity";
import { mockUsers } from "src/mockUsers/mock";
import { UserProfile } from "../graphql/models/UserProfile.entity";
import { mockUserProfiles } from "src/mockUsers/mockUserProfile";
import { CreateUserInput } from "../graphql/utils/createUsers";
import { UserService } from "./user.service";

@Resolver(()=> User)
export class UserResolver{

    constructor(private userService: UserService){}

    @Query(() => User, {nullable: true})
    getUserById(@Args('id', {type: ()=> Int}) id: number){

        return this.userService.getUserById(id);
    }

    @Query(() => User, {nullable: true})
    getUserByUsername(@Args('username') username: string){

        return this.userService.getUserByUsername(username);
    }

    @Query(() => [User])
    getUsers(){

        return this.userService.getUsers();
    }
    
    @ResolveField(()=> UserProfile, {name: 'profile', nullable: true})
    getUserProfile(@Parent() user: User){
        console.log(user)

        const allProfiles = mockUserProfiles.find(profile=> profile.id === user.id)
        console.log(allProfiles)
        return allProfiles
    }

    @Mutation(()=> User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput){

        return this.userService.createUser(createUserInput)
    }

}