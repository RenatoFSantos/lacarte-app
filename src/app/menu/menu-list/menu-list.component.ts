import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyModel } from 'src/models/company.model';
import { CompanyService } from 'src/services/company.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();
  resourceList: Array<CompanyModel> = new Array<CompanyModel>();
  resourceListFilter: Array<CompanyModel> = new Array<CompanyModel>();
  checked: boolean = false;
  @ViewChild('search') search: ElementRef;

  constructor(
    private companySrv: CompanyService,
    private active: ActivatedRoute,
    private userSrv: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadingResourceList();
    console.log('Entrei no init de cardápio!');
  }

  async loadingResourceList(): Promise<void> {
    console.log('Carregando a lista de empresas');
    // **************************************************************
    // VERSÃO 2 - PROMISE
    // **************************************************************
    this.active.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(async (resolve) => {
        const result = await this.companySrv.getAll();
        console.log('Dentro do subscribe das empresas');
        if (result.success) {
          this.resourceList = result.data as Array<CompanyModel>;
          this.resourceListFilter = this.resourceList;
          // this.search.nativeElement.value = '';
          this.search.nativeElement = '';
        }
        this.checked = this.checkLogin();
      });

    // **************************************************************
    // VERSÃO 2 - PROMISE
    // **************************************************************
    // const result = await this.companySrv.getAll();
    // if (result.success) {
    //   this.resourceList = result.data as Array<CompanyModel>;
    //   this.resourceListFilter = this.resourceList;
    //   // this.search.nativeElement.value = '';
    //   this.search.nativeElement = '';
    // }
    // this.checked = this.checkLogin();
    // console.log('Valor do checked=', this.checked);
  }

  selectCompany(id: any) {
    this.router.navigate(['menu'], id);
  }

  checkLogin(): boolean {
    return this.userSrv.userIsLogged();
  }

  loadingPhoto(imgPhoto: any): any {
    let imgCompany = '';
    if (imgPhoto) {
      imgCompany = `${environment.apiPath}/storage/${imgPhoto}`;
    }
    return imgCompany;
  }

  handleRefresh(event) {
    setTimeout(() => {
      // INSERT FUNCTIONS AND COMPLETE EVENT
      event.target.complete();
    }, 2000);
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    if (event.target.value) {
      this.resourceListFilter = this.resourceList.filter(
        (company) => company.compNmTrademark.toLowerCase().indexOf(query) > -1
      );
    } else {
      this.resourceListFilter = this.resourceList;
    }
  }

  ngOnDestroy(): void {
    console.log('Estou no ngOnDestroy');
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
