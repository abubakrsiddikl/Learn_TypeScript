"use strict";
{
    //
    // Learnign Function
    // Normal Function
    // Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(1, 2);
    const addArrow = (num1, num2) => num1 + num2;
    // Object --> function --> method
    const poorUser = {
        name: "Limon",
        balance: 0,
        addBalance(balance) {
            return `My new balance : ${this.balance + balance}`;
        },
    };
    const arr = [1, 23, 34];
    const newArray = arr.map((ele) => ele * ele);
}
