import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Category } from '../../tables/category';
import { CategoryHttpService } from '../../services/category-http.service';
import { ExistingServicesHttpService } from '../../services/existing-services-http.service'
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExistingServices } from '../../tables/existing-services';
import { UserDetailsService } from '../../services/user-details.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddServiceComponent implements OnInit {
  [x: string]: any;

  avg!: any;
  service: ExistingServices = { CostInPoint: this.avg, Description: '', IdCategory: 0, IdOfferUser: this.userDetailsService.currentUser.UserId, ServiceId: 0 };
  categoriesList: Category[] = [];
  categoryN: any;

  constructor(private categoryHttpService: CategoryHttpService, private existServiceHttp: ExistingServicesHttpService, private fb: FormBuilder,
    private userDetailsService: UserDetailsService, private _snackBar: MatSnackBar) {
    this.getCategories()
  }

  ngOnInit(): void {

  }

  getCategories() {
    this.categoryHttpService.GetAllCtegories().subscribe((x: any) => {
      this.categoriesList = x;
    });
  }

  saveService() {
    this.service.IdCategory = this.categoriesList[this.categoryN].CategoryId
    this.existServiceHttp.addService(this.service).subscribe();
  }

  changeCategoty() {
    let avgC:number=this.categoriesList[this.categoryN].AvgScore;
    var x = "The avg score of this category is " + (avgC ? avgC : 0).toString() + ". You should choose score in this range!😍";
    avgC>0?x="The avg score of this category is " + (avgC ? avgC : 0).toString() + ". You should choose score in this range!😍":
    x="The avg score of this category is " + (avgC ? avgC : 0).toString() + ". No one used in this category!"
    if (confirm(x + ' \n Do you want to change your score to the avg of this category? '))
      this.avg = this.service.CostInPoint = this.categoriesList[this.categoryN].AvgScore;
    // this._snackBar.open(x, {"OK"}, {
    //   verticalPosition: 'top',
    //   horizontalPosition: 'center',
    //   // panelClass: ['snackbar']
    // });
  }


}

