// Here is an example of how to calculate macronutrients for a 2,000-calorie diet consisting of 40% carbs, 30% protein and 30% fat.
// In this scenario, your ideal daily intake would be 200 grams of carbs, 150 grams of protein and 67 grams of fat
// So, to lose weight, you should be eating between 1500 and 2000 calories per day, divided as follows. between 200 and 400 calories for breakfast,
// 500-700 calories for lunch, and 500-700 calories for dinner.
//                                                                                                                                                                                                           You could also incorporate a morning and evening snack for a total of about 400-500 more calories.
new Vue({
    el: '#app',
    data: {

        aliments: [
            {
                name: "iaurt",
                calories: 32.9,
                proteine: 3.9,
                lipide: 0.2,
                carbs: 0.7,
                fiber: 0
            },
            {
                name: "sunca porc Sissi",
                calories: 77,
                proteine: 14,
                lipide: 2,
                carbs: 0.7,
                fiber: 0
            },
            {
                name: "albus de ou",
                calories: 52,
                proteine: 10.9,
                lipide: 0.2,
                carbs: 0.7,
                fiber: 0
            },
            {
                name: "avocado",
                calories: 167,
                proteine: 2,
                lipide: 15.4,
                carbs: 8.6,
                fiber: 6.8
            },
            {
                name: "branza mozzarella Campana Metro",
                calories: 278,
                proteine: 17,
                lipide: 23,
                carbs: 0.5,
                fiber: 0
            },
            {
                name: "unt german 82% Lidl",
                calories: 742,
                proteine: 0.5,
                lipide: 82,
                carbs: 0.6,
                fiber: 0
            }
        ],
        selectedItem: null,
        selectedGrams:0,
        caloriesPer100g:[],
        selectedFoods: [
        ],
        selectedParagraph:0,
        targetParagraph: null,



    },
    methods: {

        addSelectedAliment(type) {

            let itemsCopy = JSON.parse(JSON.stringify(this.aliments))
            for (let i = 0; i < itemsCopy.length; i++) {
                if (this.selectedItem === i) {
                    itemsCopy[i].grams = this.selectedGrams;
                    itemsCopy[i].type= type;
                    this.selectedFoods.push(itemsCopy[i]);
                }
            }
        },
        multiply(a, b) {
            return  (a * b) / 100;
        },
        sumProducts() {
            let sum = 0;
            for (let i = 0; i < this.selectedFoods.length; i++) {
                sum += this.multiply(this.selectedFoods[i].calories, this.selectedFoods[i].grams);
            }
            return sum.toFixed(2);
        },
        sumCarbs(){
            let sum = 0;
            for (let i = 0; i < this.selectedFoods.length; i++) {
                sum += this.multiply(this.selectedFoods[i].grams, this.selectedFoods[i].carbs);
            }
            return sum.toFixed(2);
        },
        sumProtein(){
            let sum = 0;
            for (let i = 0; i < this.selectedFoods.length; i++) {
                sum += this.multiply(this.selectedFoods[i].grams, this.selectedFoods[i].proteine);
            }
            return sum.toFixed(2);
        },
        sumFat(){
            let sum = 0;
            for (let i = 0; i < this.selectedFoods.length; i++) {
                sum += this.multiply(this.selectedFoods[i].grams, this.selectedFoods[i].lipide);
            }
            return sum.toFixed(2);
        },

    }



});