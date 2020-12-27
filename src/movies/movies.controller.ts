import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateMovieDTO } from './DTO/update.movei.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // 기본 주소
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {} // service와 연결 코드

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }
}
