import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BaseDeDonneeDataSource} from '../datasources';
import {Produit, ProduitRelations} from '../models';

export class ProduitRepository extends DefaultCrudRepository<
  Produit,
  typeof Produit.prototype.id,
  ProduitRelations
> {
  constructor(
    @inject('datasources.baseDeDonnee') dataSource: BaseDeDonneeDataSource,
  ) {
    super(Produit, dataSource);
  }
}
