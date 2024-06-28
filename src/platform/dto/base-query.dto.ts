import {
	IsOptional,
	IsInt,
	ValidatorConstraint,
	Validate,
	ValidationArguments,
	ValidatorConstraintInterface,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';

@ValidatorConstraint({ name: 'LimitOffsetCheck', async: false })
export class LimitOffsetCheck implements ValidatorConstraintInterface {
	validate(limit: number, args: ValidationArguments) {
		const offset = args.object['offset'] || 0;

		return limit >= 0 && offset >= 0 && limit >= offset && limit <= offset + 30;
	}

	defaultMessage() {
		return `Limit must be a non-negative integer and greater than or equal to offset, and not exceed offset + 30`;
	}
}
export class BaseQuery {
	@ApiPropertyOptional()
	@IsOptional()
	keyword: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsInt({ message: 'Limit must be an integer' })
	@Type(() => Number)
	@Transform(({ value }) => parseInt(value))
	@Validate(LimitOffsetCheck)
	limit: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsInt({ message: 'Offset must be an integer' })
	@Type(() => Number)
	@Transform(({ value }) => parseInt(value))
	@Validate(LimitOffsetCheck)
	offset: number;
}
