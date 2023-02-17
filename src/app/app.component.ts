import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, Style} from '@capacitor/status-bar';
import { Network } from '@capacitor/network';
import { SplashScreen } from '@capacitor/splash-screen';
import { isPlatform, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/services/alert.service';
import { CONSTANTS } from 'src/shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  disconnectSubscription: Subscription = new Subscription();

  constructor(
    private platform: Platform,
    private router: Router,
    private alertService: AlertService,
  ) {
    this.initializeApp();
  }

  // Add or remove the "dark" class based on if the media query matches
  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      StatusBar.setOverlaysWebView({overlay: false}).catch(() => {});
      StatusBar.setStyle({style: Style.Default}).catch(() => {});
      if(isPlatform('android')) {
        StatusBar.setBackgroundColor({color: '#b71c1c'}).catch(() => {});
      }
      SplashScreen.hide();
      // Verificando conexão com a internet
      Network.addListener('networkStatusChange', status => {
        console.log('Valor do status da rede = ', status);
        if(!status.connected) {
          this.alertService.alert('Sem conexão', 'Não consigo acessar a internet. Por favor verifique!');
        } else {
          this.alertService.alert('Conectado!!!', 'Ufa! Conexão restabelecida!');
        }
      });
    });
  }

  async logout(): Promise<void> {
    const result = await this.alertService.confirm('Sair do App', 'Deseja sair do Lacarte?', this.desconecta);
    if(result.role === 'Ok') {
      this.router.navigateByUrl('/tabs/profile');
    }
  }

  desconecta(res: any) {
    if(res) {
      localStorage.removeItem(CONSTANTS.keyStore.user);
      localStorage.removeItem(CONSTANTS.keyStore.profile);
      localStorage.removeItem(CONSTANTS.keyStore.token);
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.disconnectSubscription.unsubscribe();
  }


}
