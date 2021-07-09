import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularBai5';
  name: string = "";
  isLogin: boolean = false;
  
  login(username: string, password: string) {
    if (username == "cybersoft" && password == "cybersoft") {
      localStorage.setItem('login', JSON.stringify(username));
    }
  }
  
  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem('login')!);
    console.log(this.name);
    
  }
}
