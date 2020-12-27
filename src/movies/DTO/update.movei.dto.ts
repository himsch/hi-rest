import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDTO } from './create-movie.dto';

// partialtype 으로 상속 느낌?
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
