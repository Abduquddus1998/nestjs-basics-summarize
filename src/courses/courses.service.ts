import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
import { CourseInterface } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  private courses: CourseInterface[] = COURSES;

  getCourses(): CourseInterface[] {
    return this.courses;
  }

  getCourse(courseId: number): CourseInterface {
    const id = Number(courseId);
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new HttpException('Course does not exist', 404);
    }

    return course;
  }

  addCourse(course: CourseInterface): CourseInterface[] {
    this.courses.push(course);
    return this.courses;
  }

  deleteCourse(courseId: number): CourseInterface[] {
    const id = Number(courseId);
    const index = this.courses.findIndex((course) => course.id === id);

    if (index === -1) {
      throw new HttpException('Course does not exist', 404);
    }

    this.courses.splice(index, 1);
    return this.courses;
  }
}
