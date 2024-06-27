import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description:"firstname",
        example:"string"
    })
    firstname: string

    @ApiProperty({
        description:"lastname",
        example:"string"
    })
    lastname: string
}
