import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { CONSTANTS } from 'src/shared/constants';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  perfil = '';

  constructor(
    private userSrv: UserService
  ) {
  }

  ngOnInit(): void {
    this.userSrv.userDataAsync.subscribe(async newUser => {
      this.perfil = localStorage.getItem(CONSTANTS.keyStore.profile);
    });
  }
}
