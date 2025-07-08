import { RealmProvider } from '@realm/react';
import { ProductSchema } from '@entities/product/models';
import { Routes } from './routes';

export const App = () => {
  return (
    <RealmProvider schema={[ProductSchema]} deleteRealmIfMigrationNeeded={true}>
      <Routes />
    </RealmProvider>
  );
};
