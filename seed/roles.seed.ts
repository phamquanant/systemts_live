// src/db/seeds/user.seeder.ts
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm'
import { Role } from 'src/entities/role.entity';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(Role);
    await repository.insert({
      name:"admin"
    });
  }
}
