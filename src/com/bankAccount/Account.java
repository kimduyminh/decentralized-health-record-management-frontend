package com.bankAccount;

public class Account {
    private String name;
    private int accountNumber;
    private double initialBalance=50000;
    private int savingId;
    public Account(String name,int accountNumber,double initialBalance){
        this.name=name;
        this.accountNumber=accountNumber;
        this.initialBalance=initialBalance;
        this.savingId=0;
    }
    protected void changeBalance(String option,double amount){
        if (option=="D"){
            this.initialBalance+=amount;
        }
        if (option=="W"){
            if(amount>initialBalance){
                System.out.println("Your balance is not enough to withdraw");
            }else{
                this.initialBalance-=(amount+5000);
            }
        }
    }
    public void setSavingId(int savingId) {
        this.savingId = savingId;
    }
}
