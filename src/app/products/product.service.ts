import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCTS: Product[] = [
    { id: 1, name: 'Smartphone', description: '6GB RAM, 128GB Storage', price: 29999, imageUrl: 'https://www.designinfo.in/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-128GB-Black-Titanium-8-485x485-optimized.webp' },
    { id: 2, name: 'Laptop', description: '15-inch display, i5 processor', price: 59999, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/silver/touch/notebook-laptop-xps-16-9640-t-silver-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3475&hei=2110&qlt=100,1&resMode=sharp2&size=3475,2110&chrss=full&imwidth=5000' },
    { id: 3, name: 'Tablet', description: '10-inch display, 4GB RAM', price: 19999, imageUrl: 'https://m.media-amazon.com/images/I/618Acjb5AhL._AC_UF1000,1000_QL80_.jpg' },
    { id: 4, name: 'Smartwatch', description: 'Water-resistant, Fitness tracking', price: 9999, imageUrl: 'https://m.media-amazon.com/images/I/71pj1+SCfvL.jpg' },
    { id: 5, name: 'Headphones', description: 'Noise-cancelling, Bluetooth', price: 7999, imageUrl: 'https://cdns3.thecosmicbyte.com/wp-content/uploads/white-bg-3.png.webp' },
    { id: 6, name: 'Smart TV', description: '4K UHD, 55-inch', price: 49999, imageUrl: 'https://images-cdn.ubuy.co.in/666993291616391cc9417153-vizio-75-class-v-series-4k-uhd-led.jpg' },
    { id: 7, name: 'Keyboard', description: 'Wireless, Mechanical keys', price: 2499, imageUrl: 'https://images-cdn.ubuy.co.in/66e88894018e431f2374741a-snpurdiri-60-wired-gaming-keyboard-rgb.jpg' },
    { id: 8, name: 'Mouse', description: 'Wireless, Ergonomic design', price: 1299, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/pointing-devices/ms300/ms300-kbm-04-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4141&hei=3475&qlt=100,1&resMode=sharp2&size=4141,3475&chrss=full&imwidth=5000' },
    { id: 9, name: 'Monitor', description: '24-inch, Full HD', price: 8999, imageUrl: 'https://d1q3zw97enxzq2.cloudfront.net/images/Slide5_Ttl6rNn.width-1000.format-webp.webp' },
    { id: 10, name: 'Portable Speaker', description: 'Bluetooth, Waterproof', price: 3499, imageUrl: 'https://x.imastudent.com/content/0037550_jbl-charge-5-portable-bluetooth-speaker_500.png' },
    { id: 1, name: 'Smartphone', description: '6GB RAM, 128GB Storage', price: 29999, imageUrl: 'https://www.designinfo.in/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-128GB-Black-Titanium-8-485x485-optimized.webp' },
    { id: 2, name: 'Laptop', description: '15-inch display, i5 processor', price: 59999, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/silver/touch/notebook-laptop-xps-16-9640-t-silver-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3475&hei=2110&qlt=100,1&resMode=sharp2&size=3475,2110&chrss=full&imwidth=5000' },
    { id: 3, name: 'Tablet', description: '10-inch display, 4GB RAM', price: 19999, imageUrl: 'https://m.media-amazon.com/images/I/618Acjb5AhL._AC_UF1000,1000_QL80_.jpg' },
    { id: 4, name: 'Smartwatch', description: 'Water-resistant, Fitness tracking', price: 9999, imageUrl: 'https://m.media-amazon.com/images/I/71pj1+SCfvL.jpg' },
    { id: 5, name: 'Headphones', description: 'Noise-cancelling, Bluetooth', price: 7999, imageUrl: 'https://cdns3.thecosmicbyte.com/wp-content/uploads/white-bg-3.png.webp' },
    { id: 6, name: 'Smart TV', description: '4K UHD, 55-inch', price: 49999, imageUrl: 'https://images-cdn.ubuy.co.in/666993291616391cc9417153-vizio-75-class-v-series-4k-uhd-led.jpg' },
    { id: 7, name: 'Keyboard', description: 'Wireless, Mechanical keys', price: 2499, imageUrl: 'https://images-cdn.ubuy.co.in/66e88894018e431f2374741a-snpurdiri-60-wired-gaming-keyboard-rgb.jpg' },
    { id: 8, name: 'Mouse', description: 'Wireless, Ergonomic design', price: 1299, imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/pointing-devices/ms300/ms300-kbm-04-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4141&hei=3475&qlt=100,1&resMode=sharp2&size=4141,3475&chrss=full&imwidth=5000' },
    { id: 9, name: 'Monitor', description: '24-inch, Full HD', price: 8999, imageUrl: 'https://d1q3zw97enxzq2.cloudfront.net/images/Slide5_Ttl6rNn.width-1000.format-webp.webp' },
    { id: 10, name: 'Portable Speaker', description: 'Bluetooth, Waterproof', price: 3499, imageUrl: 'https://x.imastudent.com/content/0037550_jbl-charge-5-portable-bluetooth-speaker_500.png' }
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.PRODUCTS;
  }

  getProductById(id: number): Product | undefined {
    return this.PRODUCTS.find(product => product.id === id);
  }
}
