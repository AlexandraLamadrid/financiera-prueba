import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017',
    ),
    MovementsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
