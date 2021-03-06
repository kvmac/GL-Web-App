import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { GroceryItem } from './item/GroceryItem';
import { GroceryService } from './Grocery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = "Kodee's Grocery List App";
  list: Array<GroceryItem>;

  constructor(
    private http: HttpClient,
    private _GroceryService: GroceryService
  )
  {
    _GroceryService.GetGroceryList()
      .subscribe((res) => { this.list = res});
  }

  ngOnInit() {
    return 
  }

  private getGroceryList(): any {

    this._GroceryService.GetGroceryList()
      .subscribe((res) => { this.list = res});
    // this.http.get("localhost:2481/api/groceries")
      // .map((res: Response) => {
        // var data = res.json();
      //   // return data;
      // }
//      .subscribe((results) => {
//        var data = results;
          
//        })
//      });


  }
  

  public submit() {



  }
}
