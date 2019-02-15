import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../services/broker.service';

@Component({
  selector: 'app-accept-offer',
  templateUrl: './accept-offer.component.html',
  styleUrls: ['./accept-offer.component.css']
})
export class AcceptOfferComponent implements OnInit {

  constructor(brokerService : BrokerService) { }

  offerId: number;
  ngOnInit() {
  }


    onSubmit()
    {
      this.brokerService.accept( this.offerId)
    }



}
