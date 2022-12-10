/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

/* eslint-disable prettier/prettier */

export type StudentDocument = Student & Document;
@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  marks: number;
  @Prop()
  roll: number;
  @Prop()
  dob: Date;
  @Prop()
  city: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
