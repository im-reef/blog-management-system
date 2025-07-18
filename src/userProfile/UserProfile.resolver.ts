import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserProfile } from "../graphql/models/UserProfile.entity";
import { CreateUserProfileData } from "../graphql/utils/createUserProfile";
import { UpdateUserProfileData } from "../graphql/utils/updateUserProfile";
import { UserProfileService } from "./userProfile.service";



@Resolver(()=> UserProfile)
export class UserProfileResolver{

    constructor(private userProfileService: UserProfileService){}

    @Query(()=> UserProfile, {nullable: true})
    getUserProfile(@Args('id', {type: ()=> Int}) id: number){

        return this.userProfileService.getUserProfile(id)
    }

    @Mutation(()=> UserProfile)
    createUserProfile(@Args('createUserProfile') createUserProfileData: CreateUserProfileData){



        const newUserProfile = this.userProfileService.createUserProfile(createUserProfileData)

        return newUserProfile;

    }

    @Mutation(()=> UserProfile, {nullable: true})
    updateUserProfile(@Args('updateUserProfile') updateUserProfileData: UpdateUserProfileData){

        const updateUserProfile = this.userProfileService.updateUserProfile(updateUserProfileData)

        return updateUserProfile;
    }
}