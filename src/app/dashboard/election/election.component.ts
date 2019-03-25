import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  startDate = new FormControl((new Date()).toISOString());
  endDate = new FormControl((new Date()).toISOString());
  candidate: string;
  candidates: any[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      electionName: ['', Validators.required],
      electionDescription: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      candidate: ['', Validators.required],
      candidates: this._formBuilder.array([{}])
    });
    this.fourthFormGroup = this._formBuilder.group({
    });
    this.fifthFormGroup = this._formBuilder.group({
    });
  }

  addCandidate(val){
    this.candidates.push(val);
  }

  deleteCandidate(index){
    this.candidates.splice(index, 1)
  }
}
