Vue.component('productDetails', {
  props: {
    details: {
      type: Array,
      required: true
    },
    variants: {
      type: Array,
      required: true
    },
    updateImage: {
      type: Function,
      required: true
    }
  },
  template: `
    <div class="product-details">
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
  </div>    
  `,
  methods: {
    isOutOfStock(index) {
      return this.variants[index].quantity === 0;
    }
  }
});