import { ApiProperty } from "@nestjs/swagger";

export class CreatePlatformDto {
    @ApiProperty({
        description: 'name',
        example: 'string',
      })
      name: string
}
