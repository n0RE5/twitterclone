import { Body, Controller, Get, Param, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { AuthGuard } from 'src/auth/auth-guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { User } from './users.model';
import { UsersService } from './users.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({summary: "Get All Users"})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(AuthGuard, RolesGuard)
    @Roles("ADMIN")
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: "Get User"})
    @ApiResponse({status: 200, type: [User]})
    @Get('/:id')
    get(@Param('id') id: number) {
        return this.userService.getUserById(id)
    }

    @ApiOperation({summary: "Update User"})
    @ApiResponse({status: 200, type: User})
    @UseInterceptors(FilesInterceptor('files'))
    @UseGuards(AuthGuard)
    @Post('/update')
    updateUser(@Body() dto: CreateUserDto, @UploadedFiles() files, @Req() req) {
        return this.userService.editUser(dto, files, req)
    }
}
