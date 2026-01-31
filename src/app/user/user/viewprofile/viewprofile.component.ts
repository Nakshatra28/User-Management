
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './viewprofile.component.html',
  styleUrl: './viewprofile.component.css'
})
export class ViewprofileComponent {

   user: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.user = res.find(u => u.id === id);
      });
  }

}
