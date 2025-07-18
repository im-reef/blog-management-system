import { Module } from "@nestjs/common";
import { UserResolver } from "src/users/User.resolver";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User.entity";


@Module({
    imports: [
        
        TypeOrmModule.forFeature([User])
    ],
    providers: [UserResolver, UserService],
    exports:[TypeOrmModule]
})
export class UsersModule{

}