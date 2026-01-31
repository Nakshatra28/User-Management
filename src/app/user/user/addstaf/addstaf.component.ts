import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addstaf',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './addstaf.component.html',
  styleUrl: './addstaf.component.css'
})
export class AddstafComponent {

}
