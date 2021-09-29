import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class USCounties extends Model {
  @Column
  criteria_id: number;

  @Column
  county: string;

  @Column
  state: string;

  @Column
  parent_id: number;

  @Column
  country_code: string;

  @Column
  target_type: string;

  @Column
  status: string;
}
