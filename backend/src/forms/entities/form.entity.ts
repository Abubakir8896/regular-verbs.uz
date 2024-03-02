import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('form')
export class form {
  @PrimaryGeneratedColumn('increment')
  form_id: number;

  @Column({type: 'text'})
  verb1: string;

  @Column({type:'text'})
  verb2:string

  @Column({type:'text'})
  verb3:string
}