<script>
export default{
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Whatch",
          image: "pizza-1.JPG",
          price: "20",
          calories: "80 kl",
          fat:"20 kg"
          
        },

          {
          id: 2,
          name: "speaker",
          image: "pizza-2.jpg",
          price: "500",
          calories: "80 kl",
          fat:"20 kg"
          
        },

            {
          id: 3,
          name: "mouse",
          image: "pizza-3.png",
          price: "90",
          calories: "80 kl",
          fat:"20 kg"
          
        },

              {
          id: 4,
          name: "bluethod-speaker",
          image: "pizza-4.png",
          price: "100",
          calories: "80 kl",
          fat:"20 kg"
          
        },

                {
          id: 5,
          name: "wrist-Whatch",
          image: "pizza-5.JPEG",
          price: "70",
          calories: "80 kl",
          fat:"20 kg"
          
        },
                        {
          id: 6,
          name: "shoes",
          image: "pizza-6.JPEG",
          price: "100",
          calories: "80 kl",
          fat:"20 kg"
          
        },
                 {
          id: 7,
          name: "pizza goo",
          image: "pizza-7.JPEG",
          price: "100",
          calories: "80 kl",
          fat:"20 kg"
          
        },               
      ],
      cart:[
          
      ]
    }
  },
  methods: {
    addpizza(id) {
      const pizza = this.menu.find((pizza) => pizza.id == id);
      const index = this.cart.findIndex((pizza) => pizza.id == id);
      if (index !==-1) {
        this.cart[index].quantity++;
      }
      else {
        this.cart.push({ ...pizza, quantity: 1 });
      }
    
    }
  }

}


</script>
<template>
<body>
  <div id="pizza-restaurant" class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-9 p-4">
        <div class="text-center title-holder">
          <span class="subtitle">
            CHOOSE YOUR FLAVOR
          </span>
          <h1 class="title">
            THE BEST ONLINE STORE  IN TOWN
          </h1>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et
            malesuada fames ac.
          </p>
        
        </div>
        <div class="row row-cols-4 mt-4">
          <div class="col justify-content-center text-center" v-for="(item,index) in menu" >
            <div class="d-flex flex-column item">
              <img class="w-100" :src="`./images/${item.image}`" :alt="item.name">
              <div class="p-3">
                <h5 class="item-name">{{item.name}}</h5>
                <h6 class="item-price">${{item.price}}</h6>
                <button @click="addpizza(item.id)" type="button" class="add-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-3 cart p-4">
        <h3 class="title">
          Your Basket
        </h3>

        <div class="order-items" v-if="cart.length>0">
          <div class="order-item mb-4" v-for="(item,index) in cart" :key="index">
            <img class="order-item-image" :src="`./images/${item.image}`">
            <div class="order-item-content">
              <h5>
                {{item.name}}
              </h5>
              <p>
                <button type="button" class="add">+</button>
                {{item.quantity}}
                
                <button type="button" class="remove">-</button>
              </p>


              <div class="order-item-details">
                <span>
                  <strong>price:</strong> ${{item.price}}
                </span>
                <span>
                  <strong>Calories:</strong> {{item.calories}}
                </span>
                <span>
                  <strong>Fats:</strong>{{item.fat}}
                </span>
              </div>
            </div>
            <button class="remove-icon" type="button" >x</button>
          </div>
        </div>
        <div class="cart-empty" v-else >
          <p class="text-center">
            Your basket is empty
          </p>
        </div>

        <div class="total-section">
          <h6 class="total-title">Total payment:</h6>
          <span class="amount">
            
          </span>
        </div>
      </div>
    </div>
  </div>

  

</body>


</template>


<style>
html {
  height: 100%;
}

body {
  background-color: white;
  color: black;
  height: 100%;
  font-family: Oswald, sans-serif;
  font-size: 18px;
}

button {
  background-color: transparent;
  outline: none;
  border: none;
  padding: 10px;
  margin-top: 10px;
}

p {
  text-transform: uppercase;
  font-weight: 500;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.429em;
  letter-spacing: 0.05em;
  margin: 0;
  color: #fff;
}

.item {
  padding-left: 0;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
}
.item img {
  transition: all 0.4s linear;
}
.item:hover .add-cart {
  visibility: visible;
  transform: translateY(0px);
  opacity: 1;
}
.item:hover img {
  transform: rotate(90deg);
}
.item .add-cart {
  visibility: hidden;
  color: #fff;
  background-color: #d2401e;
  overflow: hidden;
  border: none;
  padding-left: 0;
  padding-right: 0;
  border: 2px solid transparent;
  transition: all 0.4s linear;
  transform: translateY(10px);
  opacity: 0;
  text-transform: uppercase;
  width: 100%;
}
.item .add-cart:hover {
  background-color: #fff;
  border: 2px solid #d2401e;
  color: #d2401e;
}
.item .item-price {
  position: relative;
  display: block;
  margin: 10px 0 17px;
  word-wrap: break-word;
  line-height: 1.389em;
  letter-spacing: 0.05em;
  color: #d2401e;
  font-size: 20px;
}
.item .item-name {
  margin: 25px 0 10px;
  color: #b7903c;
}

.cart {
  background-color: #000000;
}
.cart .title {
  text-transform: uppercase;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 1.375em;
  letter-spacing: 0.05em;
  margin: 3px 0 15px;
  padding-bottom: 12px;
  color: #fff;
  border-bottom: 2px dotted #b7903c;
}
.cart .total-section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 8px;
  border-top: 2px dotted #b7903c;
}
.cart .total-section .amount {
  text-transform: uppercase;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 1.429em;
  letter-spacing: 0.05em;
  margin: 0;
  color: #fff;
}
.cart .total-section .total-title {
  margin: 0;
  font-size: 20px;
  color: #fff;
}
.cart .order-items {
  max-height: 75vh;
  overflow-y: scroll;
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
}
.cart .order-items .order-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 50px;
}
.cart .order-items .order-item:first-child {
  margin-top: 0;
}
.cart .order-items .order-item .order-item-image {
  display: block;
  flex-shrink: 0;
  width: 90px;
  margin-right: 20px;
}
.cart .order-items .order-item .order-item-details {
  margin-top: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 15px;
}
.cart .order-items .order-item .order-item-content {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  padding-right: 20px;
}
.cart .order-items .order-item .order-item-content h5 {
  margin: 0;
  color: #fff;
}
.cart .order-items .order-item .order-item-content p {
  font-size: 18px;
}
.cart .order-items .order-item .order-item-content button {
  color: white;
  margin-top: 0px;
}
.cart .order-items .order-item .remove-icon {
  position: absolute;
  top: -2px;
  right: 0;
  font-size: 20px;
  line-height: 1;
  color: #fff;
}
.cart .cart-empty {
  margin: 40px 0;
}

.title-holder .subtitle {
  font-size: 12px;
  line-height: 1.375em;
  letter-spacing: 0.2em;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 0 14px;
  color: #d2401e;
  display: block;
}
.title-holder .title {
  text-transform: uppercase;
  font-weight: 500;
  margin: 25px 0;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
}
.title-holder .text {
  font-size: 18px;
  line-height: 1.556em;
  color: #989898;
  display: block;
  margin: 21px 0 0;
}

</style>