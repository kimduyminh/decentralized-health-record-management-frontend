package com.bankAccount;

import java.util.ArrayList;
import java.util.Random;

public class Customer {
    private ArrayList<Account> customerList=new ArrayList<>();
    private ArrayList<Saving> savingList=new ArrayList<>();
    public void createAccount(String name,int accountNumber,double initialBalance){
        Account acc =new Account(name, accountNumber, initialBalance);
        customerList.add(acc);
    }
    public void changeBalance(Account acc,double amount,String option){
        acc.changeBalance(option,amount);
    }
    int a=1;
    int b=99;
    int lastId=1;
    public void createSavingAccount(Account acc,double amount){
        Random rd=new Random();
        int id= rd.nextInt(a+lastId,b);
        lastId=id;
        acc.setSavingId(id);
        Saving sv=new Saving(id,amount);
        savingList.add(sv);
    }
}
