// import { Pagination } from './pagination';


export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
     totalPages: number;
}

export class PaginatedResult<T> {
    data: T;
    pagination: Pagination;

    constructor(data: T, paginaiton: Pagination) {
        this.data = data;
        this.pagination = paginaiton;
    }
}

export class PagingParams {
    pageNumber;
    pageSize;

    constructor(pageNumber = 1, pageSize = 2) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }
}
