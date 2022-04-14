import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

  showLoader(){
    this.loaderService.showLoader();

    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 2000);
  }

  hideLoader(){
    this.loaderService.hideLoader();
  }
}
