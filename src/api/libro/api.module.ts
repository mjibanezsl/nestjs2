
import { LibroController } from './libro.controller';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libro.schema';
import { LibroService } from './libro.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Libro3', schema: LibroSchema }]),
  ],

  //imports: [MongooseModule.forFeature([{ name: 'Libro3', schema: LibroSchema }])],
  controllers: [LibroController],
  providers: [LibroService]
})
export class ApiModule {}
