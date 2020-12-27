import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true }) // each: true 는 요소 하나하나 검사
  readonly genres: string[];
}
