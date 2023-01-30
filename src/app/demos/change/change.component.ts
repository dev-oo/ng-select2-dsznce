import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Select2OptionData } from 'ngSelect2';
import { log } from 'console';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css'],
})
export class ChangeComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;

  private value: string;
  // get value(): string {
  //   return this._value;
  // }
  // set value(value: string) {
  //   console.log('Set value: ' + value);
  //   this._value = value;
  // }

  testArr: Select2OptionData[] = [
    {
      id: '0',
      text: 'my',
    },
    {
      id: 'my1',
      text: 'my2',
    },
    {
      fieldId: 'my2',
    },
  ];
  public placeholder = 'placeholder';

  constructor(private service: DataService) {}

  ngOnInit() {
    // this.exampleData = this.service.getChangeList();
    this.exampleData = this.testArr;
  }

  public changeValue() {
    console.log(this.testArr);
    // this.value = 'car2';
  }

  public changeData() {
    this.exampleData = this.service.getChangeListAlternative();
  }

  public changePlaceholder() {
    this.placeholder = 'placeholder2';
  }
}
