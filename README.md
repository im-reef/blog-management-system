# Project Overview

### Download this repo at 
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Objective
This is a blog management system that I created based on the task by Webby. This system allow users to register, log in securely, craete and manage posts with tags. This is a backend system that utilizes graphQL API and NestJS framework that prioritize the use of OOP for scalable code.

## Tech Stack
- Backend framework: NestJS (TypeScript)
- API: GraphQL (code-first approach)
- Authentication: JWT
- Database: PostgreSQL
- ORM: TypeORM

## Project Status
- [ ] Add delight to the experience when all tasks are complete :tada:

## Setup instruction
- <p align="center">Install <a href="http://nodejs.org" target="_blank">Node.js</a>.</p>
- Install Nest CLI globally using npm:
```bash
$ npm install -g @nestjs/cli
```
- <p align="center">Install <a href="https://www.postgresql.org/download/" target="_blank">PostgreSQL</a>.</p>
- Create a database called blog_graphql:
```bash
#Your default username is postgress
$ psql -U postgress

#Create your database (don't forget your semicolon)
CREATE DATABASE blog_graphql;
```

## How to run locally
```bash
# watch mode
$ npm run start:dev
```
<p align="center">Open graphql playground at<a href="http://localhost:3000/graphql" target="_blank">localhost:3000/graphql</a>.</p>

> [!IMPORTANT]
> Don't forget to authenticate with JWT before create/view/edit/delete post.
> ```bash
> {
> "Authorization": "Bearer eyJhbGciOiJIU..."
> }
> ```
## Sample GraphQL queries and mutations
```bash
# Create User
mutation{
  	createUser(createUserInput: {
      username: "Ammar",
      password: "ammar123"
    }) {
    id
    username
  }
}

#Login
mutation{
  login(loginUserInput: {
    username: "Ammar",
    password: "ammar123"
  }){
    
    user{
      username
    }
    access_token
  }
}

#View user profile
 getUserProfile(id: 1){
    bio
}

#Update user profile
mutation{
  updateUserProfile(updateUserProfile:{
    id: 1,
    bio: "Hello World!"
  }){
    id
    bio
  }
}

#Create post by author name and authenticate by user token
mutation{
  createPost(createPost: {
    title: "My first time here",
    content: "Feel free to reach out to me",
    author: "Ammar",
    tags: ["Princess Bride", "Inigo Montoya"]
  }){
    id
    title
    content
    tags{
      id
      name
    }

  }
}

#View Post by user id
query{
  getPostById(id: 1){
    id
    title
    content
    author{
      id
    }
    tags{
      id
      name
    }
  }
}

#Update post with postID and authenticate by user token
mutation{
  updatePost(updatePost: {
    id: 1,
    title: "My name is inigo montoya",
    content: "You kill my father prepare to die"
    tags: ["Princess Bride", "Inigo Montoya"]
  } ){
    id
    title
    author{
      username
    }
    tags{
      name
    }
  }
}

#Delete post with postID and user token
mutation{
  deletePost(input: 10){
    id
    title
    content
    author{
      username
    }
  }
}

#Get all tags
query{
  getAllTag{
    name
  }
}
```

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
