import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuidShareService {

  private guidSource = new Subject();
  currentGuid = this.guidSource.asObservable();

  constructor() { }

  changeGuid(guid: string) {
    this.guidSource.next(guid)
  }
}
