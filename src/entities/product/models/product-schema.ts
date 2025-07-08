import { Realm } from 'realm';
import { ProductDTO } from '../api';

export class ProductSchema extends Realm.Object {
  id!: number;
  title!: string;
  description!: string;
  thumbnail!: string;
  images!: string[];
  recommendations!: Realm.List<ProductSchema>;

  static generate(dto: ProductDTO) {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      thumbnail: dto.thumbnail,
      images: dto.images,
      recommendations: [],
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'Product',
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
      thumbnail: 'string',
      images: 'string[]',
      recommendations: { type: 'list', objectType: 'Product' },
    },
  };
}
