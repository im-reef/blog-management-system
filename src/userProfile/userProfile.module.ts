import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserProfileResolver } from "./UserProfile.resolver";
import { UserProfile } from "src/graphql/models/UserProfile.entity";
import { UserProfileService } from "./userProfile.service";


@Module({
    imports: [
        
        TypeOrmModule.forFeature([UserProfile])
    ],
    providers: [UserProfileResolver, UserProfileService],
})
export class UserProfileModule{

}