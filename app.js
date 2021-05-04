//BUDGET CONTROLLER
var budgetController = (function () {

   var Expense = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
   };

   var Income = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        
    }

})();







//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDomstrings: function() {
            return DOMstrings;
        }
    };


})();






//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDomstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); 

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
    
        });
    
    };

    

    var ctrlAddItem = function() {

        //1. Get field input data
        var input = UICtrl.getInput();
        

        //2. Add item to budget controler

        //3. Add new item to uI as well

        //4. CAlculate the budget

        //5. Display the budget on UI

    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    };
    

})(budgetController, UIController);


controller.init();

























































































































































































