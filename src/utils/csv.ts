// src/utils/csv.ts: Helpers for CSV import/export
import { parse } from 'csv-parse/browser/esm/sync';
import { stringify } from 'csv-stringify/browser/esm/sync';

export function parseCSV(data: string) {
  return parse(data, {
    columns: true,
    skip_empty_lines: true
  });
}

export function stringifyCSV(records: any[], columns: string[]) {
  return stringify(records, {
    header: true,
    columns
  });
}
