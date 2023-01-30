import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ngSelect2';
import { Options } from 'select2';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public options: Options;
  public _value: string[];

  get value(): string[] {
    return this._value;
  }
  set value(value: string[]) {
    console.log('Set value: ' + value);
    this._value = value;
  }

  ngOnInit() {
    this.exampleData = [
      {
        id: 'multiple1',
        text: 'Multiple 1'
      },
      {
        id: 'multiple2',
        text: 'Multiple 2'
      },
      {
        id: 'multiple3',
        text: 'Multiple 3'
      },
      {
        id: 'multiple4',
        text: 'Multiple 4'
      }
    ];

    this._value = ['multiple2', 'multiple4'];

    this.options = {
      width: '300',
      multiple: true,
      tags: true
    };
  }
}
