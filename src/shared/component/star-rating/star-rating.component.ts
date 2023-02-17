import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/services/alert.service';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})

export class StarRatingComponent implements OnInit {

  @Input('rating') private rating: number = 3;
  @Input('starCount') private starCount: number = 5;
  @Input('color') private color: string = 'primary';
  @Input('vote') private vote: boolean = false;
  @Output() private ratingUpdated = new EventEmitter();

  private ratingArr = [];

  constructor(private alertSrv: AlertService) {
  }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    this.alertSrv.toast('Sua classificação ' + rating + '/' + this.starCount, 'middle');
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star-outline';
    }
  }

}

