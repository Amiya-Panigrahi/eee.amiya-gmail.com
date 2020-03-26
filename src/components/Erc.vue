<template>
  <div class="erc">
    <img src="../assets/money.png" alt="" class="money-img" />
    <h1>Exchange Rate Calculator</h1>
    <p>Choose the currency and the amounts to get the exchange rate</p>
    <!-- <h3 v-bind:key="currency" v-for="currency in currencies">{{currency}}</h3> -->
    <div class="container">
      <div class="currency"  >
        <select id="currency-one" v-model="currency_one" v-on:change="calculate">
          <option  v-bind:key="currency.id" v-for="currency in currencies" v-bind:value="currency.value">
            {{currency.value}}</option>
        </select>
        <!-- <span>Selected: {{ selected1 }}</span> -->
        <input type="number" v-model="amountEl_one" placeholder="0" value="1" v-on:change="calculate"/>
      </div>
      <div class="swap-rate-container">
        <button class="btn" v-on:click="swap">
          Swap
        </button>
        <div class="rate">{{rateEl}}</div>
      </div>
      <div class="currency">
        <select id="currency-two" v-model="currency_two" v-on:change="calculate">
          <option v-bind:value="currency.value" v-bind:key="currency.id" v-for="currency in currencies">
            {{currency.value}}</option>
        </select>
        <input type="number" v-model="amountEl_two" placeholder="0" value="1" v-on:change="calculate"/>
      </div>
    </div>
  </div>  
</template>

<script>
// import Vue from 'vue/dist/vue'
export default {
  name: 'Erc',
  data() {
    return{

      currency_one: "EUR",
      currency_two: "DOP",
      amountEl_one: 1,
      amountEl_two: 0,
      rate: 0,
      rateEl: "",
      currencies: [
      {id:1, value:"AED", selected:false},{id:2, value:"ARS", selected:false},{id:3, value:"AUD", selected:false},{id:4, value:"BGN", selected:false},{id:5, value:"BRL", selected:false},{id:6, value:"BSD", selected:false},{id:7, value:"CAD", selected:false},{id:8, value:"CHF", selected:false},{id:9, value:"CLP", selected:false},{id:10, value:"CNY", selected:false},{id:11, value:"COP", selected:false},
      {id:12, value:"CZK", selected:false},{id:13, value:"DKK", selected:false},
      {id:14, value:"DOP", selected:false},{id:15, value:"EGP", selected:false},
      {id:16, value:"EUR", selected:false},{id:17, value:"EUR", selected:false},
      {id:18, value:"EUR", selected:false},{id:19, value:"EUR", selected:false},
      {id:20, value:"EUR", selected:false}
      ]
    }
  },
  methods:{
    calculate() {
    console.log("asn sn ")
    fetch(`https://api.exchangerate-api.com/v4/latest/${this.currency_one}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.rates);
        this.rate = data.rates[this.currency_two];
        console.log(this.rate)

        this.rateEl = `1 ${this.currency_one} = ${this.rate} ${this.currency_two}`;

        this.amountEl_two = (this.amountEl_one * this.rate).toFixed(2);
      });
    },
    swap(){
    const temp = this.currency_one;
    this.currency_one= this.currency_two;
    this.currency_two=temp;
    this.calculate();
  }
  },
  created(){
    this.calculate()
  }
  
}

</script>

<style scoped>
 
* {
  box-sizing: border-box;
}

.erc {
  background-color: #f4f4f4;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 20px;
}

h1 {
  color: var(--primary-color);
}

p {
  text-align: center;
}

.btn {
  color: #fff;
  background: var(--primary-color);
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 12px;
}

.money-img {
  width: 150px;
}

.currency {
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.currency select {
  padding: 10px 20px 10px 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #dedede;
  font-size: 16px;
  /*  You may not need these following lines. The arrow did not show for me on MacOS/Chrome so I added it. Just remove it if you would like  */
  background: transparent;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-position: right 10px top 50%, 0, 0;
  background-size: 12px auto, 100%;
  background-repeat: no-repeat;
}

.currency input {
  border: 0;
  background: transparent;
  font-size: 30px;
  text-align: right;
}

.swap-rate-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rate {
  color: var(--primary-color);
  font-size: 14px;
  padding: 0 10px;
}

select:focus,
input:focus,
button:focus {
  outline: 0;
}

@media (max-width: 600px) {
  .currency input {
    width: 200px;
  }
}
</style>