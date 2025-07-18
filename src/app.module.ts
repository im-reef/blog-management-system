import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileResolver } from './userProfile/UserProfile.resolver';
import { PostResolver } from './Post/Post.resolver';
import { User } from './graphql/models/User.entity';
import { UserProfile } from './graphql/models/UserProfile.entity';
import { Post } from './graphql/models/Post';
import { Tag } from './graphql/models/Tag';
import { UsersModule } from './users/user.module';
import { UserProfileModule } from './userProfile/userProfile.module';
import { PostModule } from './Post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ammar123',
      database: 'blog_graphql',
      entities: [User, UserProfile, Post, Tag],
      synchronize: true,
    }),
    UsersModule,
    UserProfileModule,
    PostModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
