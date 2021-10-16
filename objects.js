/*
//Umbrella Open
var umbrella = { 
  color: "pink",
  isOpen: false,

  open: function() { 
    if (umbrella.isOpen === true) {
      console.log("it set to open");
      return "The umbrella is already opened!";
    } else {
      console.log("it here");
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },

   //Umbrella Close
   close: function() {
     if (umbrella.isOpen === true) {
       umbrella.isOpen = false;
       console.log("it close");
       return "Julia closes the umbrella!";
     } else {
       console.log("it is already closed");
     }
   }
  };

  var a = umbrella;
  a.open();
  a.open();
  a.close();
  a.close();
  */

/*
var breakfast = {
  name: "The Lumberjack",
  price: "9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);
*/
/*
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function() {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
  }
};

console.log(savingsAccount.printAccountSummary());
*/
/*
//Facebook friends
var facebookProfile = {
  name: "Michael",
  friends: 5,
  messages: ["hello everyone", "bro", "dude"],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    // In the following splice() method call,
        // - argument 1 = index from where the element has to be deleted
        // - argument 2 = count of elements to be deleted
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    facebookProfile.friends = facebookProfile.friends + 1;
    //friends += 1; // this statement is equivalent to the above
  },
  removeFriend: function() {
    if(facebookProfile.friends > 0)
    facebookProfile.friends = facebookProfile.friends - 1;
  }
};
*/

//Donuts Revisited
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
  //donut represents a single element of donuts array
  // donut is an object, therefore you can access its properties using a dot notation
  console.log(donut.type+" donuts cost $"+donut.cost+" each");
});