import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  color = 'F4610B';
  mode: ProgressSpinnerMode = 'determinate';
  value = 90;
  constructor() {}

  ngOnInit(): void {}
}
