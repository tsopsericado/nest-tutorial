import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';


// Handling @get requests for in nested routes
@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [{  username: "Anson", email: "anson@anson.com"}];
    }

    @Get('posts')
    getUsersPosts() {
        return [{  
            username: "Anson", 
            email: "anson@anson.com",
            posts: [
            {   id: 1,   
                title: 'Post 1'},
                 {
                    id: 2,   
                    title: 'Post 2'   
                }
            ]
        }];
    }

    @Get('posts/comments')
    getUsersPostsComments() {
        return [
            {
                id: 1,
                title: 'Post 1',
                comments: [],
            }
        ]
    }



//Handling post requests to the server



    @Post()
    createUser(@Req() request: Request, @Res() response: Response) {
     console.log(request.body);
     response.send('created')
     
    }

 }  


// export class UsersController {}
