import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-dropdown-dropdown-button',
  template: `
    <div style="height: 28px;">
      <nz-dropdown-button (nzClick)="log($event)">
        DropDown
        <ul nz-menu>
          <li nz-menu-item>1st menu item</li>
          <li nz-menu-item>2nd menu item</li>
          <li nz-submenu>
            <span title>sub menu</span>
            <ul>
              <li nz-menu-item>3rd menu item</li>
              <li nz-menu-item>4th menu item</li>
            </ul>
          </li>
        </ul>
      </nz-dropdown-button>
      <nz-dropdown-button nzDisabled>
        DropDown
        <ul nz-menu>
          <li nz-menu-item>
            <a>1st menu item</a>
          </li>
          <li nz-menu-item>
            <a>2nd menu item</a>
          </li>
          <li nz-menu-item>
            <a>3rd menu item</a>
          </li>
        </ul>
      </nz-dropdown-button>
      <nz-dropdown>
        <button nz-button nz-dropdown><span>Button</span> <i class="anticon anticon-down"></i></button>
        <ul nz-menu>
          <li nz-menu-item>
            <a>1st menu item</a>
          </li>
          <li nz-menu-item>
            <a>2nd menu item</a>
          </li>
          <li nz-menu-item>
            <a>3rd menu item</a>
          </li>
        </ul>
      </nz-dropdown>
    </div>
  `,
  styles  : []
})
export class NzDemoDropdownDropdownButtonComponent {
  log(e) {
    console.log('click dropdown button');
  }
}
