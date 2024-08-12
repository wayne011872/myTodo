export interface TodoItem {
  ID?: string;
  Detail?: string;
  EndTime?: Date;
  StartTime?: Date;
  createTime?: Date;
  updateTime?: Date;
  Title: string;
  Completed: boolean;
  isEdit: boolean;
}
export interface InputResult{
  result:TodoItem
}
export enum TodoStatus {
  All = 0,
  Active = 1,
  Completed = 2
}
