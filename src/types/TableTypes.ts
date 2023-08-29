export interface TableItem {
  title: string;
  publishDate: string | null;
  pages: string[];
  lastModified: string;
  status: string;
  liveFrom: string | null;
  ends: string | null;
}
