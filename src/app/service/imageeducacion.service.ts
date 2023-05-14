import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageeducacionService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadImageE($event:any, name: string){ 
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `imagenE/` + name)
    uploadBytes(imgRef, file)
    .then(response => [this.getImagesE()])
    .catch(error => console.log(error)
    )
  }

  getImagesE(){
    const imagesRef = ref(this.storage, 'imagenE')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la URL es: " + this.url);
        
      }
    })
    .catch(error => console.log(error)
    )
  }
}
