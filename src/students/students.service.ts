import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './schema/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const model = new this.studentModel({ ...createStudentDto });
    return await model.save();
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find();
  }

  async findOne(_id: string): Promise<Student> {
    return await this.studentModel.findById(_id);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return await this.studentModel.findOneAndUpdate(
      { _id: id },
      { ...updateStudentDto },
      { new: true },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
