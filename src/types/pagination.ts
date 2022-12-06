interface User {
  id: number;
  name: string;
  email: string;
}

interface PaginationProps {
  limit: number;
  offset: number;
}

interface Pagination extends PaginationProps {
  total: number;
}

interface PaginationData<T extends object> {
  pagination: Pagination;
  data: T[];
}

export type { User, Pagination, PaginationProps, PaginationData };
