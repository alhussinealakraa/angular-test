import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  loading = true;

  constructor(private loadingService: LoaderService) {
    loadingService.loaderSubject.subscribe(res => Promise.resolve(null).then(() => this.loading = res));
    //loadingService.loaderSubject.subscribe(res => this.loading = res);
  }
}
