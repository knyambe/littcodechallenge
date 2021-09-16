import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
import { Depthreading } from '../models/depthreading.model';

@Pipe({
  name: 'depthAccuracy'
})
export class DepthAccuracyPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { } 

  transform(value: boolean, reading: Depthreading): SafeHtml {
    let button:string = '';
    if(value){
      button = '<button class="btn btn-success btn-sm btn-block">Good</button>'
    }else{
      button = '<button class="btn btn-danger btn-sm btn-block">Poor</button>'
    }
    return this.sanitizer.bypassSecurityTrustHtml(button);
  }

}
