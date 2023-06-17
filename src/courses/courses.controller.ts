import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseInterface } from './interfaces/course.interface';
import { CreateCourseDto } from './dto/course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Get()
  async getCourses(): Promise<CourseInterface[]> {
    try {
      return this.courseService.getCourses();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':courseId')
  async getByCourseId(@Param('courseId') courseId): Promise<CourseInterface> {
    try {
      return this.courseService.getCourse(courseId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post()
  async createNewCourse(
    @Body() createCourseDTO: CreateCourseDto,
  ): Promise<CourseInterface[]> {
    try {
      return this.courseService.addCourse(createCourseDTO);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Delete()
  async deleteCourse(
    @Query() query: { courseId: number },
  ): Promise<CourseInterface[]> {
    try {
      return this.courseService.deleteCourse(query.courseId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
