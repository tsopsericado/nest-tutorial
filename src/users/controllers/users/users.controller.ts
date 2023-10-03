import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseBoolPipe, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { response } from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';


// Handling @get requests for in nested routes
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

    @Get()
    // getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    //         // console.log(sortBy);
    //     return [{  username: "Anson", email: "anson@anson.com"}];
    // }

    // @Get('posts')
    // getUsersPosts() {
    //     return [{  
    //         username: "Anson", 
    //         email: "anson@anson.com",
    //         posts: [
    //         {   id: 1,   
    //             title: 'Post 1'},
    //              {
    //                 id: 2,   
    //                 title: 'Post 2'   
    //             }
    //         ]
    //     }];
    // }

    // @Get('posts/comments')
    // getUsersPostsComments() {
    //     return [
    //         {
    //             id: 1,
    //             title: 'Post 1',
    //             comments: [],
    //         }
    //     ]
    // }


    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.fetchUsers();

    }



//Handling post requests to the server
//posting create and object and enter in the tab the address localhost:3000/users/create

    @Post("create")
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: createUserDto) {
      console.log( typeof userData.age.toPrecision());
     return this.userService.createUser(userData);
    }
     

    // Working with route parameters 
    // @Get(':id/:postId')
    // getUserById(@Param('id') id: string, @Param('postId') postId: string){
    //     console.log(id);
    //     return{id, postId} 
        
    // }


    //Working with query parameters
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        const user = this.userService.fetchUserById(id);
        if(!user) 
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST) 
         return user;
    }
 }  


// export class UsersController {}
