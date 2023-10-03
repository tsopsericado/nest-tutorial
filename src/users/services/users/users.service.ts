import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'Anson', email: 'anson@anson.com' },
        { username: 'boris', email: 'cory@gmail.com' },
        { username: 'greg', email: 'greg@gmail.com' }

    ]
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return;
    }

fetchUserById( id: number){
    return { id, username: 'Anson', email: 'anson@gmail.com'};
}
}
