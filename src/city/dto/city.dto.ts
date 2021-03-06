import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CityDto {
  @IsNumber()
  criteria_id: number;

  @IsString()
  city: string;

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
