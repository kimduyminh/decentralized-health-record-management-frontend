package com.bankAccount;

public class Saving {
    private int id;
    private double amount;
    public Saving(int id,double amount){
        this.id=id;
        this.amount=amount;
    }
    public double getInterest() {
        return this.amount * 5 / 100;
    }
}
