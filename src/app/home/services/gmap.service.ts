// gmap.service.ts
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class GmapService {
  private googleMaps: any
  private apiKey: string = "AIzaSyBhmqlpAsZamAFs2DI0-1gKJBTxrporCrY"
  constructor() {}

  loadGoogleMaps(): Promise<any> {
    if (this.googleMaps) {
      return Promise.resolve(this.googleMaps)
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`
      script.async = true
      script.defer = true
      script.onload = () => {
        this.googleMaps = window["google"]["maps"]
        resolve(this.googleMaps)
      }
      script.onerror = (error) => reject(error)
      document.head.appendChild(script)
    })
  }
}
