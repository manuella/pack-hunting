import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../services/broker.service';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-sell-to-broker',
  templateUrl: './sell-to-broker.component.html',
  styleUrls: ['./sell-to-broker.component.css']
})
export class SellToBrokerComponent implements OnInit {

  constructor(private brokerService : BrokerService) { }

  question : string;
  accountId : number;
  submitted = "false";
  offerId  : Observable<number>;

  onSubmit()
  {
    this.brokerService.offer(this.question, this.accountId).
      subscribe((response : object) => {
          console.log(response);
        });
    this.submitted = "true";
  }

  ngOnInit() {
  }

}
