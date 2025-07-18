import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({

    signOptions: {expiresIn: '60s'},
    secret: 'Mundus-Vult-Decipi' //should hide this
  }
  )],
  providers: [AuthService, AuthResolver, UserService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
