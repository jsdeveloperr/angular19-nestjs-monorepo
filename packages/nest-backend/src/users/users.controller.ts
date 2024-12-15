import { Controller, Post, Body, Get, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User successfully registered.' })
  @ApiResponse({ status: 400, description: 'Email already registered.' })
  @Post('register')
  async register(@Body() body: RegisterUserDto): Promise<User> {
    const existingUser = await this.usersService.findByEmail(body.email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }
    return this.usersService.create(body.email, body.password);
  }

  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'List of all users.' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
