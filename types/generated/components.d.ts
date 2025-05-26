import type { Schema, Struct } from '@strapi/strapi';

export interface CityName extends Struct.ComponentSchema {
  collectionName: 'components_city_names';
  info: {
    displayName: 'name';
  };
  attributes: {
    Experience_list: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'city.name': CityName;
    }
  }
}
