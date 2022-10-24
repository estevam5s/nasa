import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'src/users/service/users.service';
// import { AuthResponse } from './dto/auth-response.dto';
// import { LoginDto } from './dto/login-user.dto';
// import { CreateUserDto } from './dto/register-user.dto';


@Injectable()
export class AuthService {

    constructor(private readonly prismaService: PrismaService, private jwtService: JwtService, private readonly usersService: UsersService) { }

    // async login(loginDto:LoginDto): Promise<AuthResponse> {
    //     const { username, password } = loginDto;

    //     const user = await this.prismaService.user.findUnique({
    //         where: { username }
    //     });

    //     if(!user) {
    //         throw new NotFoundException('user not found');
    //     }

    //     const validatePassword = await bcrypt.compare(password, user.password);

    //     if (!validatePassword) {
    //         throw new UnauthorizedException('invalid password');
    //     }

    //     return {
    //         token: this.jwtService.sign({
    //             username
    //         }),
    //         user
    //     }
    // }

    // async register(createUserDto: CreateUserDto): Promise<AuthResponse> {
    //     const user = await this.usersService.createUser(createUserDto);
    //     return {
    //         token: this.jwtService.sign({ username: user.username }),
    //         user
    //     }
    // }
}
