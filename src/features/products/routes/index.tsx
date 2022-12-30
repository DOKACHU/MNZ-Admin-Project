import { Route, Routes, Navigate } from 'react-router-dom';
import Products from './Products';
import ProductDetail from './ProductDetail';

export function ProductsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Products />} />
      <Route path=":id" element={<ProductDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
