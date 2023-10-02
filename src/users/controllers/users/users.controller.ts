import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return {  username: "Anson", email: "anson@anson.com"};
    }
}

// export class UsersController {}
