import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _baseUrl = "http://localhost:3000"
  private _getUrl = "/api/videos"
  private _postUrl = "/api/video"
  private _putUrl = "/api/video/"
  private _deleteUrl = "/api/video/"

  constructor(private _http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'jwt-token'
    })
  }

  getVideos(){
    return this._http.get(this._baseUrl+this._getUrl)
  }
  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._baseUrl+this._postUrl, video, this.httpOptions)
               .pipe()
  }

  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._putUrl+video._id, video, this.httpOptions)
                .pipe()
  }

  deleteVideo(video:Video):Observable<Video>{
    return this._http.delete<Video>(this._deleteUrl+video._id)
               .pipe()
  }
}
