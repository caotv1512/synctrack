import {
  IsString,
} from 'class-validator';

export class SupertestDto {
  @IsString()
  tracking_reference: string;

  @IsString()
  accessKeyId: string;

  @IsString()
  secretAccessKey: string;
}
