import { Component, Input } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";

@Component({
    selector: 'sc-report-table',
    templateUrl: 'table.component.html'
})

export class TableComponent {

    data: Object[] = [];

    constructor(http: HttpClient) {
        http
          .get<Object[]>('http://localhost:8080/financial/account/v1/report')
          .subscribe(data => {
              console.log(data);
              this.data = data
          });
    }
}