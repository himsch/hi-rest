import { Module } from '@nestjs/common';
import { MoviesController } from 'hi-rest/src/movies/movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
