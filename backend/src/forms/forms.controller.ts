import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('form')
export class FormsController {
  constructor(private readonly formsService: FormService) {}

  @Post('create')
  createForm(@Body() createFormDto: CreateFormDto) {
    return this.formsService.createForm(createFormDto);
  }

  @Get('all')
  getAllForm() {
    return this.formsService.getAllForm();
  }

  @Get('one/:id')
  getOneForm(@Param('id') id: string) {
    return this.formsService.getOneForm(+id);
  }

  @Delete('remove/:id')
  removeForm(@Param('id') id: string) {
    return this.formsService.removeForm(+id);
  }

  @Get('searche/:verb')
  searche_form(
    @Param('verb') verb: string
  ): Promise<Object> {
    return this.formsService.searche_form(verb);
  }
}
