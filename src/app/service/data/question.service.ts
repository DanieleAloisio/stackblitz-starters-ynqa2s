import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from '../../common/utility/constants';
import { QuestionsFilter } from '../../filters/question-filter';
import { QuestionList } from '../../models/question.list.model';


@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  public getQuestions(filter: QuestionsFilter): Observable<QuestionList> {
    return this.http.get<QuestionList>(endpoint.external.questions, {
      params: this.getQueryParams(filter)
    });
  }

  getQueryParams(data: QuestionsFilter): HttpParams {
    var params: HttpParams = new HttpParams()
    .set('amount', data.amount)
    .set('category', data.category)
    .set('difficulty', data.difficulty)
    .set('type', data.type);

    return params;
  }
}