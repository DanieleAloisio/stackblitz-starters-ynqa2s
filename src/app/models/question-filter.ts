import { constants } from 'src/app/filters/question-filter';

export class QuestionsFilter {
  amount!: number;
  category!: number;
  difficulty!: string;
  type!: string;

  constructor() {
    this.amount = 5;
    this.type = "multiple";
    this.difficulty = "";
    this.category = constants.defValues.defaultCategory;
}
