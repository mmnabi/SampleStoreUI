export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    phone: string;
}

export interface CustomerListViewModel {
    customers: Customer[];
    pagingInfo: PagingInfo;
}

export interface PagingInfo {
    totalItems: string;
    itemsPerPage: string;
    currentPage: string;
    totalPages: string;
}