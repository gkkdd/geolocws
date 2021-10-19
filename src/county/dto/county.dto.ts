import { IsNumber, IsString } from 'class-validator';

export class CountyDto {
  @IsNumber()
  criteria_id: number;

  @IsString()
  county: string;

  @IsString()
  state: string;

  @IsNumber()
  parent_id: number;

  @IsString()
  country_code: string;

  @IsString()
  target_type: string;

  @IsString()
  status: string;
}
