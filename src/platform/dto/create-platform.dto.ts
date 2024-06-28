import { ApiProperty } from "@nestjs/swagger";

export class CreatePlatformDto {
    @ApiProperty({
        description: 'name',
        example: 'string',
      })
      name: string;

    @ApiProperty({
      description: 'name',
      example: 'string',
    })
    icon: string
}
