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
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //create new id
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; 
            }else {
                ID = 0;
            }
            

            //create new item based on inc or exp type
            if (type ==='exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
 
            //push into our data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;

        },

        testing: function() {
            console.log(data);
        }
    }

})();







//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type) {

            //Create HTML string with placeholder text
            var html, newHTML, element;
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }


            //REplace the placeholder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);


            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

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
        var input, newItem;

        //1. Get field input data
        input = UICtrl.getInput();
        

        //2. Add item to budget controler
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add new item to uI as well
        UICtrl.addListItem(newItem, input.type);

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

























































































































































































