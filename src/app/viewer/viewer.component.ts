import { Component, OnInit } from '@angular/core';
import { XmlProcessorService } from "../services/xml-processor.service";
import { FileStateService } from "../services/file-state.service";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  host: {'class': 'h-100 d-flex'}
})
export class ViewerComponent implements OnInit {

  constructor(
    public xmlProcessor: XmlProcessorService,
    public fileStateService: FileStateService,
  ) { }

  ngOnInit(): void {
  }

}
