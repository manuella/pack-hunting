import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Offer } from '../models/offer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    // authtoken goes here
  })
}

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private httpService : HttpClient) { }
  brokerUrl =  "http://localhost:8082/broker/";


  public offer(question: string, accountId:number) : Observable<Offer>
  {
    var model =
    {
        "question": question,
        "accountId": accountId,
        "createUser": "user",
        "updateUser": "user"
    }

    return this.httpService.post<Offer>(this.brokerUrl, model, httpOptions);
  }

//  public accept(offerId : number) : Observable<Offer>
//  {


//  }
}
