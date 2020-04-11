import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ],
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private REF_DOCUMENT, public settings: SettingsService) { }

  ngOnInit(): void {
    this.setCheck();
  }

  changeColor(theme: string) {
    this.settings.applyTheme(theme);
    this.setCheck();
  }

  setCheck() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this.settings.setting.theme;

    for (const ref of selectors) {
      ref.classList.remove('working');

      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
      }
    }
  }
}
