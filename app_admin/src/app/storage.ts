import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Broswer Storage', {
    providedIn: 'root',
    factory: () => localStorage
});
