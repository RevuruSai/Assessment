import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postDocter(data: any) {
    return this.http.post<any>("http://localhost:8080/doctors", data)
      .pipe(map((res: any) =>{
        return res;
      }))
  }
  postPatient(data: any) {
    return this.http.post<any>("http://localhost:8090/patient", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getPatient() {
    return this.http.get<any>("http://localhost:8090/patients")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getDocter() {
    return this.http.get<any>("http://localhost:8080/doctors")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updatePatient(data: any, id: number) {
    return this.http.put<any>("http://localhost:8090/paitents/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateDocter(data: any, id: number) {
    return this.http.put<any>("http://localhost:8080/doctors/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  postDocterNames(data: any) {
    return this.http.post<string>("http://localhost:3000/profile", data.docterName)
      .pipe(map((res: string) => {
        return res;
      }))
  }
  getDocterName() {
    return this.http.get<any>("http://localhost:3000/posts/")
      .pipe(map((res: any) => {
        return res.docterName;
      }))
  }

  deletePatient(id: number) {
    return this.http.delete<any>("http://localhost:8090/patients/"+id)
      //.pipe(map((res: any) => {
      //  return res;
     // }))
  }
  deleteDocter(id: number) {
    return this.http.delete<any>("http://localhost:8080/doctors/"+id)
      //  return res;
     // }))
  }


}
