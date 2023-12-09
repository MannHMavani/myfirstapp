import { Component } from '@angular/core';
import { ApiLaptopService } from '../api-laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  laptop = [{LaptopName: '',LaptopImage: ''}];
  constructor(private _api:ApiLaptopService){}
  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
       this.laptop = res;
      });
 }
}
