import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UpdateUserInput): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

    async remove(id: number): Promise<User> {
        return await this.prisma.user.delete({
        where: {
            id,
        },
        });
    }

//   buscar um usuário no prisma

    async getUser(name: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: {
                email: name
                }
            })
        }

    // agora vamos criar um método para criar um usuário no prisma

    async createUser(data: CreateUserInput): Promise<User> {
        const exists = await this.getUser(data.email);
        if (exists) {
            throw new Error('User already exists');
        }

        // const hashedPassword = await crypto.getRandomValues(data.password, 10);

        const user = await this.prisma.user.create({
            data: {
                ...data,
                // password: hashedPassword
            }
        });

        delete user.password;
        return user;
    }
}
