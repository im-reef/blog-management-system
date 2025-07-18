import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User.entity";
import { CreateUserInput } from "src/graphql/utils/createUsers";
import { Repository } from "typeorm";


@Injectable()
export class UserService{

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

        getUsers(){
            return this.userRepository.find();
        }

        getUserById(id: number){
            return this.userRepository.findOneBy({id})
        }

        getUserByUsername(username: string){
            return this.userRepository.findOne({where:{username}, relations: ['posts']});
        }

        createUser(createUserData: CreateUserInput){

            const newUser = this.userRepository.create(createUserData);

            return this.userRepository.save(newUser)
        }


}