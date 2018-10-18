Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
          <!-- :property is shorthand for v-bind:property -->
          <img :src="image" :alt="alt"/>
      </div>
      <div class="product-info">
          <h2>{{ product }}</h2>
          <a :href="link">What are socks?</a>
          <p v-show="onSale"
             :style="styles.emphasis"
          >On Sale!</p>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock!</p>
          <p>Product details:</p>
              <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <p>Colours available: </p>
          <div v-for="(variant, index) in variants"
               class="color-box"
               :class="{ variantOutOfStock: isOutOfStock(index) }"
               :key="variant.id"
               :style="{backgroundColor: variant.color}"
               @click="updateImage(index)"
          >
          </div>

          <!-- @event is shorthand for v-on:event -->
          <button @click="addToCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }"
          >Add to Cart</button>
          <button @click="removeFromCart">Remove from Cart</button>
          <div class="cart">
              <p>Cart ({{cart}})</p>
          </div>
          <p>Shipping: {{ shipping }} </p>

      </div>
  </div>
`,
  data() {
    return {
      product: 'Socks',
      alt: 'socks image',
      selectedVariant: 0,
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
    },
    shipping() {
      return this.premium ? 'Free!' : '2.99GBP'
    }
  }
});