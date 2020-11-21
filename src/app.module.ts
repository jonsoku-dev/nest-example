import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}