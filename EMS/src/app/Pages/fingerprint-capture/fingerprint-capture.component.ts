import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
// import { FingerprintScanner } from 'fingerprint-scanner-library';


@Component({
  selector: 'app-fingerprint-capture',
  templateUrl: './fingerprint-capture.component.html',
  styleUrls: ['./fingerprint-capture.component.css']
})
export class FingerprintCaptureComponent implements OnInit{
  capturedFingerprint!: string;
  capturedFingerprintImageUrl = false;
  fingerprintForm!: FormGroup;

  constructor(private http: HttpClient, 
    // private fingerprintScanner: FingerprintScanner
    ) { }

  ngOnInit(): void {
    
    this.fingerprintForm = new FormGroup({

      fingerPrint: new FormControl('')
    })
  }

  captureFingerprint() {
    // this.fingerprintScanner.initialize();
    // this.fingerprintScanner.capture()
    //   .then((fingerprintData:any) => {
    //     // Handle the captured fingerprint data
    //     this.capturedFingerprint = fingerprintData;
    //     this.http.post('/api/fingerprint', { fingerprint: this.capturedFingerprint })
    //     .subscribe(
    //       response => {
    //         // Handle the success response from the backend
    //         console.log('Fingerprint captured successfully.');
    //       },error => {
    //         // Handle errors
    //         console.error('Error capturing fingerprint:', error);
    //       }
    //     );
    //   })
  
  }
}
