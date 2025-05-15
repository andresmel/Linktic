import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncriptService {

  constructor() { }

  private key = 'axxxzzzvvvffftttt';

  encryptInfo(text: string): string {
    return CryptoJS.AES.encrypt(text, this.key).toString();
  }

  decryptInfo(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
