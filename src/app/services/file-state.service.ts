import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileStateService {
  isOpened: boolean = false;

  constructor() { }
}