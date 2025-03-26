import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './repository/user.schema'
import { UserRepository } from './repository/user.repository'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  exports: [UserRepository],
  providers: [UserRepository],
  controllers: []
})
export class UserModule {}
