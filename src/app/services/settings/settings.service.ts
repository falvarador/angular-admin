import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting: AccountSettings = {
    url: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };

  constructor() {
    this.getSettings();
  }

  saveSettings() {
    localStorage.setItem('themeSettings', JSON.stringify(this.setting));
  }

  getSettings() {
    const settingSaved = localStorage.getItem('themeSettings');

    if (settingSaved) {
      this.setting = JSON.parse(settingSaved);

      this.applyTheme(this.setting.theme);
    } else {
      this.applyTheme(this.setting.theme);
    }
  }

  applyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    document.getElementById('theme').setAttribute('href', url);

    this.setting.theme = theme;
    this.setting.url = url;

    this.saveSettings();
  }
}

interface AccountSettings {
  url: string;
  theme: string;
}
