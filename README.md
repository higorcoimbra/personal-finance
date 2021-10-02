# Personal Finance Application

## Goals
* Development of React/Redux skills;
* Development of React/Redux **test** skills;
* Restrict to **simple** use-cases for easy maintenance and understanding;

## Use Cases
1. The user should be able to register financial incomes;
2. The user should be able to register financial outcomes;
3. The user should be able to visualize a log of incomes;
4. The user should be able to visualize a log of outcomes;
5. The user should be able to visualize his current balance;

## Use Cases Details
### Use Case 1 - Register financial incomes
* To register a financial income, the user must inform: 
    * Value: bigger than zero.
    * Date: cannot be bigger than the current day.
    * Source: cannot be empty.
    
### Use Case 2 - Register financial outcomes:
* To register a financial outcome, the user must inform: 
    * Value: bigger than zero.
    * Date: cannot be bigger than the current day.
    * Source: cannot be empty.

### Use Case 3 - Visualize a log of incomes/outcomes:
* There must be a way to list all incomes and outcomes with the following fields:
    * Value
    * Date
    * Source
* The log should be able to show a register of income or outcome right after the user perform this action.

### Use Case 3 - Visualize current balance:
* There must be a way to visualize the current balance with the following criteria:
    * Negative or zero balance must be highlited for users;
    * The balance must be recalculated right after a register of income or outcome;