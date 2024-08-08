import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { environmentCommon } from '../environment/environment.common';
import { Observable } from 'rxjs';
import { Line } from '../model/line.model';


@Injectable({
  providedIn: 'root'
  })
export class LineService {

  private api = environmentCommon.api;

  constructor(private http: HttpClient){
  }

  public getAllLines(): Observable<Array<Line>>{
    return this.http.get<Array<Line>>(environmentCommon.api.line.GET_ALL_LINES);
    }




}
