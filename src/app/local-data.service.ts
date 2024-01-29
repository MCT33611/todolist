import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  saveData(key: string, data: {task:string,IsCompleted:boolean}): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Retrieve data from local storage
  getData(key: string): any {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  getAllData(): any[] {
    const allData: any[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const data = this.getData(key);
        allData.push({ key, data });
      }
    }
    return allData;
  }

  // Clear data from local storage
  clearData(key: string): void {
    localStorage.removeItem(key);
  }
}
