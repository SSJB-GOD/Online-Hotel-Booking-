package com.hotelmanagement.advice;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class MyAspect {
//
//    // This method will be executed before any method in PaymentServiceImp class.
//    @Before(value = "execution(* com.hotelmanagement.service.PaymentServiceImp.*(..))")
//    public void printBefore() {
//        System.out.println("Payment Started");
//    }
//
//    // This method will be executed after any method in PaymentServiceImp class.
//    @After(value = "execution(* com.hotelmanagement.service.PaymentServiceImp.*(..))")
//    public void printAfter() {
//        System.out.println("Payment Successful");
//    }
}
