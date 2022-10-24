import { User } from '.prisma/client';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/common/decorators/auth-user.decorator';
import { AuthService } from './auth.service';
// import { AuthResponse } from './dto/auth-response.dto';
// import { LoginDto } from './dto/login-user.dto';
// import { CreateUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService) { }

    // @Post('/login')
    // login(@Body() loginDto:LoginDto): Promise<AuthResponse> {
    //     return this.authService.login(loginDto);
    // }

    // @Post('/register')
    // register(@Body() createUserDto:CreateUserDto): Promise<AuthResponse> {
    //     return this.authService.register(createUserDto);
    // }

    @UseGuards(AuthGuard('jwt'))
    @Get('/profile')
    getLoggedUser(@AuthUser() user: User): User {
        return user;
    }

}
