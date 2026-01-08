import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
