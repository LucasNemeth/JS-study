let app = new Vue({
    //el passes the instance to the element//
    el : "#app",
    data: {
        //data gives the value of the element
        brand:"Vue Mastery",
        product: "socks",
        description: "A pair of warm, fuzzy socks",
        image: "./styles/assets/vmSocks-green-onWhite.jpg",
        anchor:"https://www.dndbeyond.com/profile/SquidsMckenzie/characters/28001123",
        // inventory:0,
        inStock:false,
        onSale:false,
        details: ["75% cotton", "25% asbestos", "Gender-neutral"],
        variants:[
            {
                variantID:2234,
                variantColour:"green",
                variantImage: './styles/assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId:2235,
                variantColour:"blue",
                variantImage:'./styles/assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        // sizes:["Small", "Medium", "Large"],
        cart:0,
    },
    methods:{
        addToCart(){
            this.cart += 1;
        },
        updateProduct(variantImage){
            this.image=variantImage;
        },
        
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
        //this computing method will calculate a value,  as opposed to storing it.
    }
})

//data, methods, and computed are all instances.