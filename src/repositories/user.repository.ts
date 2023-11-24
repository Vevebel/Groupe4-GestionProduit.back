import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BaseDeDonneeDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId,
  UserRelations
> {
  constructor(
    @inject('datasources.baseDeDonnee') dataSource: BaseDeDonneeDataSource,
  ) {
    super(User, dataSource);
  }
}
