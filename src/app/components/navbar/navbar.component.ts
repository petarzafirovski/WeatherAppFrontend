import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isLoggedIn: boolean = true; // Set this flag based on user login status
  cityName: string = '';
  type: string = '';
  dataLoaded: boolean = false;
  fetchedData: any[] = [];

  fetchData() {
    // Replace the URL with your backend API endpoint
    const apiUrl =
      'https://your-backend-api-url.com/api/data?city=' +
      this.cityName +
      '&type=' +
      this.type;

    // Make an HTTP request to fetch the data from the API
    // You can use HttpClient module to perform the request
    // Example:
    // this.http.get(apiUrl).subscribe((response: any) => {
    //   this.fetchedData = response.data;
    //   this.dataLoaded = true;
    // });

    // For this example, let's assume we have some dummy data
    this.fetchedData = [
      { name: 'Data 1' },
      { name: 'Data 2' },
      { name: 'Data 3' },
    ];

    this.dataLoaded = true;
  }
}
