import { Component } from '@angular/core';
import { saveAs } from 'file-saver';






@Component({
  selector: 'app-expriences',
  templateUrl: './expriences.component.html',
  styleUrls: ['./expriences.component.scss']
})
export class ExpriencesComponent {
  
  
  saveDocument() {
    
    // Assuming documentContent is the content of your document
    const documentContent = 'yes wena Ghost le marete';
  
    // Convert the document content to a Blob
    const blob = new Blob([documentContent], { type: 'text/plain;charset=utf-8' });
  
    // Save the Blob using FileSaver.js
    saveAs(blob, 'document.txt');
  }

}
