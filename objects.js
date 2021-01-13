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
          return "The umbrella is already closed!";
      }
  }

};

var a = umbrella;
a.open();

a.open();

a.close();

a.close();

//Menu Items Object
var breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
console.log(breakfast);

//Bank accounts
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

Facebook Friends
var facebookProfile = {
  name: "Michael",
  friends: 1000,
  messages: ["Hello", "Bro", "Okay", "LOOL"],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
    console.log(facebookProfile.messages);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index, 1);
    console.log(facebookProfile.messages);
  },
  addFriend: function(){
    facebookProfile.friends = facebookProfile.friends + 1;
    console.log(facebookProfile.friends);
  },
  removeFriend: function() {
    if(facebookProfile.friends>0)
        facebookProfile.friends = facebookProfile.friends - 1;
        console.log(facebookProfile.friends);
  }
};

var a = facebookProfile;
a.postMessage("hello");
a.deleteMessage(1);
a.addFriend();
a.removeFriend();
*/

//Donuts revisited() Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
// donut represents a single element of donuts array
    // donut is an object, therefore you can access its properties using a dot notation
donuts.forEach(function(donut) {
  console.log(donut.type+" donuts cost $"+donut.cost+" each");
});