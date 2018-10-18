var vue = new Vue({
  el: '#app',
  data: {
    greeting: 'Welcome! Buy some stuff!',
    product: 'Socks',
    selectedVariant: 0,
    alt: 'socks image',
    link: 'https://en.wikipedia.org/wiki/Sock',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    sizes: ['Small', 'Medium', 'Large'],
    variants: [
      {
        id: 123,
        color: 'Green',
        image: '../assets/socks-green.jpg',
        onSale: true,
        quantity: 10
      },
      {
        id: 124,
        color: 'Blue',
        onSale: false,
        image: '../assets/socks-blue.jpg',
        quantity: 0
      }
    ],
    cart: 0,
    styles: {
      emphasis: { color: 'red', fontWeight: 'bold' }
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) {this.cart -= 1};
    },
    updateImage(index) {
      this.selectedVariant = index;
    },
    isOutOfStock(index) {
      return this.variants[index].quantity === 0;
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    }
  }
});