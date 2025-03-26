import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './module/user/user.module'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { isProduction } from './helper/environment'
import { RepositoryConfigFactory } from './repository.config.factory'

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.ENV}`,
      ignoreEnvFile: isProduction
    }),
    MongooseModule.forRootAsync({
      useClass: RepositoryConfigFactory
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
