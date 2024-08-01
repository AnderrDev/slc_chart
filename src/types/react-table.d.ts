// /src/types/react-table.d.ts
import {
    UseGlobalFiltersInstanceProps,
    UseGlobalFiltersOptions,
    UseGlobalFiltersState,
    UsePaginationInstanceProps,
    UsePaginationOptions,
    UsePaginationState,
    UseTableColumnOptions,
    UseTableInstanceProps,
    UseTableOptions,
    UseTableRowProps,
    UseTableState
} from 'react-table';

declare module 'react-table' {
    export interface TableOptions<D extends object> extends UseTableOptions<D>, UsePaginationOptions<D>, UseGlobalFiltersOptions<D> { }

    export interface Hooks<D extends object = {}> extends UseGlobalFiltersOptions<D> { }

    export interface TableInstance<D extends object = {}> extends UseTableInstanceProps<D>, UsePaginationInstanceProps<D>, UseGlobalFiltersInstanceProps<D> { }

    export interface TableState<D extends object = {}> extends UseTableState<D>, UsePaginationState<D>, UseGlobalFiltersState<D> { }

    export interface ColumnInterface<D extends object = {}> extends UseTableColumnOptions<D> { }

    export interface Row<D extends object = {}> extends UseTableRowProps<D> { }
}
