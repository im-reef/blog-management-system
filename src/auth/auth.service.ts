import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { User } from 'src/graphql/models/User.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService){};

    async validateUser(username: string, password: string){

        const user = await this.userService.getUserByUsername(username);

        if(user && user.password === password){

            const {password, ...result} = user;

            return result;
        }

        return null;
    }

    async login(user: User){

        const {password, ...result} = user;

        return {
            access_token: this.jwtService.sign({username: user.username, sub: user.id}),
            user
        }
    }
}
