import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(` ${value.age} is not a number!`);
      throw new HttpException(
        'Invalid Data Type for property age, Expected Number',
        HttpStatus.BAD_REQUEST,
      );
      
    }
    return { ...value, age: parseAgeToInt}
  }
}
