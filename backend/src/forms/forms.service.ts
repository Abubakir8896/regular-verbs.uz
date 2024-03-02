import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpStatus, Injectable } from '@nestjs/common';

import { form }  from './entities';
import { CreateFormDto, UpdateFormDto } from './dto';


@Injectable()
export class FormService {
  constructor( 
    @InjectRepository(form)private formRepository: Repository<form>,
    ){}

  async createForm(createFormDto: CreateFormDto): Promise<Object> {    
    const newVerb = await this.formRepository.save(createFormDto);

    return {
            message: 'Create successfully',
            verbs: newVerb,
            status: HttpStatus.OK
           };
  }

  async getAllForm(): Promise<Object> {
    const forms = await this.formRepository.find();

    if(forms.length === 0) return {
                                      message: 'Forms Not Found',
                                      status: HttpStatus.NOT_FOUND
                                    };
    return {
            forms,
            status: HttpStatus.OK
           };
  }

  async getOneForm(id: number): Promise<Object> {
    const [ form ] = await this.formRepository.find({where:{form_id:id}});
    if (!form) return {
                          message: 'Fomr Not Found',
                          status: HttpStatus.NOT_FOUND
                        };
    return {
            form,
            status: HttpStatus.OK
           };
  }

  async removeForm(id: number): Promise<HttpStatus | Object> {
    const [ form ] = await this.formRepository.findBy({ form_id: id });
    if (!form) return {
                          message: 'Form Not Found',
                          status: HttpStatus.NOT_FOUND
                        };

    await this.formRepository.delete({ form_id: id });

    return HttpStatus.OK;
  }

  async searche_form(name: string): Promise<Object> {
    const forms = await this.formRepository.find({
      where : {
        verb1 : Like(`%${name}%`)
      },
    });

    if (forms.length === 0) {
      return {
        message: 'Form Not Found',
        status: HttpStatus.NOT_FOUND
      };
    }

    return {
      status: HttpStatus.OK,
      forms
    };
  }
}