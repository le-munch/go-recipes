import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  title = 'Recipe Management';

  ngOnInit(): void {

  }
}
