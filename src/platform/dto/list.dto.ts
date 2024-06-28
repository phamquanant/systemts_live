
import { Platform } from 'src/entities/platform.entity';
import { Paginate } from './pagination.dto';
import { BaseQuery } from './base-query.dto';

export class ListPlatformDTO extends BaseQuery {}

class PlatformInfoDTO {
	id: number;
	name: string;
	icon: string;
	createdAt: Date;

	constructor(entity: Platform) {
		this.id = entity.id;
		this.name = entity.name;
		this.icon = entity.icon;
	}
}

export class ListPlatform extends Paginate(PlatformInfoDTO) {}
