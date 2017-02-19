import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
          <div>
              <ul class="menu">
                  <li class="item"><a href="#list">List</a></li>
                  <li class="item"><a href="#">Send</a></li>
                  <li class="item"><a href="#">Repertoire</a></li>
              </ul>
          </div>
        `,
  styles: [`
    a {
        color: #b10058;
        text-decoration: none;
    }
    .menu {
        display: inline-block;
        text-align: center;
        width: 94%;
        margin-bottom: 40px;
    }
    .item {
        display: inline;
        list-style: outside none none;
        margin-left: 20px;
        margin-right: 20px;
    }
  `]
})
export class MenuComponent {}
