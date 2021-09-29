import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class USCounties extends Model {
  @Column
  criteria_id: number;

  @Column
  name: string;

  @Column
  canonical_name: string;

  @Column
  parent_id: number;

  @Column
  country_code: string;

  @Column
  target_type: string;

  @Column
  status: string;
}
