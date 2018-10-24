//BUDGET CONTROLLER
var budgetController = (function () {

});



//UI CONTROLLER
var UIController = (function () {

})();


//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var ctrlAddItem = function () {
    //1.Get the input data.
    //2.Add item to the budget controller
    //3.Add item to UI
    //4.Calculate the budget
    //5.Display the budget on the UI

    console.log('It works');
  }
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})();