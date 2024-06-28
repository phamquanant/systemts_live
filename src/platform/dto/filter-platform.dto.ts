// platform-filter.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class PlatformFilterDto {
  @ApiProperty({ required: false })
  search?: string;

  @ApiProperty({ required: false })
  offset?: number;

  @ApiProperty({ required: false })
  limit?: number;

  @ApiProperty({ required: false })
  language?: string;
}