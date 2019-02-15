import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../services/broker.service';


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
    this.offerId = this.brokerService.offer(this.question, this.accountId);
    this.submitted = "true";
  }

  ngOnInit() {
  }

}
