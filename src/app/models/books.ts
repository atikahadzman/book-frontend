export interface Book {
  id?: string;
  title: string;
  status: string;
  author: string;
  category: string;
  description: string;
  cover_image: string;
  total_pages: BigInteger;
  created_at: string;
  book_url: string;
}
