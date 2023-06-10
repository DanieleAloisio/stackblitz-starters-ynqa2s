import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../service/data/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit, OnDestroy {

  public loading: boolean = false;

  subscr!: Subscription;

  constructor(private loaderService: LoaderService, private detector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscr = this.loaderService.subjLoader.subscribe(loaderFlg => {
      this.toggleLoader(loaderFlg);
      this.detector.detectChanges();
    });
  }

  toggleLoader(loaderFlg: boolean): void {
    this.loading = loaderFlg;
  }

	ngOnDestroy(): void {
    if(this.subscr){
      this.subscr.unsubscribe();
    }
	}
}