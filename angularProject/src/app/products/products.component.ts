import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Jeans Jacket',
      price: '39$',
      color: 'Blue',
      available: 'Not Available',
      image: '/assets/products/jeansJacket.jpg',
    },
    {
      id: 1,
      name: 'Black Hoddy',
      price: '29$',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/blackHoody.jpg',
    },
    {
      id: 1,
      name: 'Men Sneakers',
      price: '129$',
      color: 'Multicolor',
      available: 'Available',
      image: '/assets/products/sneakers.jpg',
    },
    {
      id: 1,
      name: 'Woman Shoes',
      price: '139$',
      color: 'Red-ish',
      available: 'Available',
      image: '/assets/products/womanShoes.jpg',
    },
    {
      id: 1,
      name: 'New Era Cap',
      price: '59$',
      color: 'Teal',
      available: 'Available',
      image: '/assets/products/newEra.jpg',
    },
    {
      id: 1,
      name: 'New Gen Phone',
      price: '999$',
      color: 'White',
      available: 'Not Available',
      image: '/assets/products/newPhone.jpg',
    },
  ];
}
