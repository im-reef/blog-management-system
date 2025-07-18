import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserProfile } from "src/graphql/models/UserProfile.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserProfileService{

    constructor(@InjectRepository(UserProfile) private userProfileRepository: Repository<UserProfile>){}

    getUserProfile(id: number){

        return this.userProfileRepository.findOneBy({id})
    }

    createUserProfile({id, bio}){

        const newProfile = this.userProfileRepository.create({id, bio});

        return this.userProfileRepository.save(newProfile);
    }

    async updateUserProfile({id, bio}){

        let userProfileStat = await this.userProfileRepository.findOneBy({id});

        if(!userProfileStat){

            return {"message": "Create a profile first"};
        }

        userProfileStat.bio = bio;

        return await this.userProfileRepository.save(userProfileStat);
    }

}