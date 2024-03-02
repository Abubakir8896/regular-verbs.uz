import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { form } from './entities';
import { FormsController } from './forms.controller';
import { FormService } from './forms.service';



@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        form
      ]
    ),
  ],
  controllers: [FormsController],
  providers: [FormService],
})
export class FormModule {}