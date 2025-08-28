import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid, GridActionsCellItem, gridClasses } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import { useDialogs } from '../admin/hooks/useDialogs/useDialogs';
import PageContainer from '../admin/components/PageContainer';
import { convertDate } from '../../utils/helper';
import Chip from '@mui/material/Chip';
import { BiSolidHide } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { PAGE_SIZE, POST_STATUS, TYPE_NAME } from '../../utils/constant';
import { CLIENT_BASE_URL } from '../../utils/Url';
import toast from 'react-hot-toast';
import useHidePost from './useHidePost';


export default function PostListOverview({ isLoading, post, rowCount }) {
    const { pathname } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const dialogs = useDialogs();
    const { isPending, hidePost } = useHidePost()


    const [paginationModel, setPaginationModel] = React.useState({
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 0,
        pageSize: searchParams.get('pageSize')
            ? Number(searchParams.get('pageSize'))
            : PAGE_SIZE,
    });
    const [filterModel, setFilterModel] = React.useState(
        searchParams.get('filter')
            ? JSON.parse(searchParams.get('filter') ?? '')
            : { items: [] },
    );
    const [sortModel, setSortModel] = React.useState(
        searchParams.get('sort') ? JSON.parse(searchParams.get('sort') ?? '') : [],
    );

    const [error, setError] = React.useState(null);

    const handlePaginationModelChange = React.useCallback(
        (model) => {
            setPaginationModel(model);

            searchParams.set('page', String(model.page));
            searchParams.set('pageSize', String(model.pageSize));

            const newSearchParamsString = searchParams.toString();

            navigate(
                `${pathname}${newSearchParamsString ? '?' : ''}${newSearchParamsString}`,
            );
        },
        [navigate, pathname, searchParams],
    );

    const handleFilterModelChange = React.useCallback(
        (model) => {
            setFilterModel(model);

            if (
                model.items.length > 0 ||
                (model.quickFilterValues && model.quickFilterValues.length > 0)
            ) {
                searchParams.set('filter', JSON.stringify(model));
            } else {
                searchParams.delete('filter');
            }

            const newSearchParamsString = searchParams.toString();

            navigate(
                `${pathname}${newSearchParamsString ? '?' : ''}${newSearchParamsString}`,
            );
        },
        [navigate, pathname, searchParams],
    );

    const handleSortModelChange = React.useCallback(
        (model) => {
            setSortModel(model);

            if (model.length > 0) {
                searchParams.set('sort', JSON.stringify(model));
            } else {
                searchParams.delete('sort');
            }

            const newSearchParamsString = searchParams.toString();

            navigate(
                `${pathname}${newSearchParamsString ? '?' : ''}${newSearchParamsString}`,
            );
        },
        [navigate, pathname, searchParams],
    );

    const handleRefresh = React.useCallback(() => {
        setSearchParams({});
    }, [setSearchParams]);

    const handleRowClick = React.useCallback(
        ({ row }) => {
            window.location.href = `${CLIENT_BASE_URL}/post/${row.id}`
        },
        [],
    );

    const handleCreateClick = React.useCallback(() => {
        navigate('/employees/new');
    }, [navigate]);



    const handleRowHide = React.useCallback(
        (post) => async () => {
            console.log("ok")
            const confirmed = await dialogs.confirm(
                `Bạn thật sự muốn từ ẩn bài đăng ${post.title}? Điều này có thể ảnh hương đến khách hàng`,
                {
                    title: `Ẩn bài viết?`,
                    severity: 'error',
                    okText: 'Từ chối',
                    cancelText: 'Hủy',
                },
            );

            if (confirmed) {

                hidePost({ postId: post.id }, {
                    onSuccess: () => toast.success("Bài viết đã bị từ chối"),
                    onError: (error) => {
                        const { detail } = error.response.data
                        toast.error(detail)
                    }
                })
            }
        },
        [dialogs, hidePost],
    );

    const initialState = React.useMemo(
        () => ({
            pagination: { paginationModel: { pageSize: PAGE_SIZE } },
        }),
        [],
    );

    const columns = React.useMemo(
        () => [
            { field: 'id', headerName: 'ID', flex: 1 },
            { field: 'title', headerName: 'Tiêu đề', flex: 1 },
            { field: 'price', headerName: 'Giá', type: 'number' },
            {
                field: 'createdAt',
                headerName: 'Ngày tạo',
                type: 'date',
                valueFormatter: (params) => {
                    if (!params) return '';
                    return convertDate(params);
                },
                width: 140,
            },
            {
                field: 'userInfo',
                headerName: 'Người đăng',
                valueFormatter: ({ firstName, lastName }) => {
                    return `${firstName} ${lastName}`;
                },
                width: 160,
            },
            {
                field: 'type', headerName: 'Loại hình',
                valueFormatter: (type) => {
                    return TYPE_NAME[type];
                },
            },
            {
                field: 'status', headerName: 'Trạng thái', renderCell: (params) => {
                    const value = params.row.status;
                    const color = POST_STATUS[value].color || 'default'
                    const label = POST_STATUS[value].label || 'undefined'

                    return <Chip label={label} color={color} size="small" />;
                },
            },
            {
                field: 'actions',
                type: 'actions',
                flex: 1,
                align: 'right',
                getActions: ({ row }) => [
                    <GridActionsCellItem
                        key="delete-item"
                        icon={<BiSolidHide size={18} />}
                        label="Delete"
                        onClick={handleRowHide(row)}
                    />,
                ],
            },
        ],
        [handleRowHide],
    );

    const pageTitle = 'Bài đăng yêu cầu';

    return (
        <PageContainer
            title={pageTitle}
            breadcrumbs={[{ title: pageTitle }]}
            actions={
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Tooltip title="Reload data" placement="right" enterDelay={1000}>
                        <div>
                            <IconButton size="small" aria-label="refresh" >
                                <RefreshIcon onClick={() => handleRefresh()} />
                            </IconButton>
                        </div>
                    </Tooltip>
                    <Button
                        variant="contained"
                        onClick={handleCreateClick}
                        startIcon={<AddIcon />}
                    >
                        Create
                    </Button>
                </Stack>
            }
        >
            <Box sx={{ flex: 1, width: '100%' }}>
                {error ? (
                    <Box sx={{ flexGrow: 1 }}>
                        <Alert severity="error">{error.message}</Alert>
                    </Box>
                ) : (
                    <DataGrid
                        rows={post}
                        rowCount={rowCount}
                        columns={columns}
                        pagination
                        sortingMode="server"
                        filterMode="server"
                        paginationMode="server"
                        paginationModel={paginationModel}
                        onPaginationModelChange={handlePaginationModelChange}
                        sortModel={sortModel}
                        onSortModelChange={handleSortModelChange}
                        filterModel={filterModel}
                        onFilterModelChange={handleFilterModelChange}
                        disableRowSelectionOnClick
                        onRowClick={handleRowClick}
                        loading={isLoading}
                        initialState={initialState}
                        showToolbar
                        pageSizeOptions={[3, PAGE_SIZE, 25]}
                        sx={{
                            [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
                                outline: 'transparent',
                            },
                            [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]:
                            {
                                outline: 'none',
                            },
                            [`& .${gridClasses.row}:hover`]: {
                                cursor: 'pointer',
                            },
                        }}
                        slotProps={{
                            loadingOverlay: {
                                variant: 'circular-progress',
                                noRowsVariant: 'circular-progress',
                            },
                            baseIconButton: {
                                size: 'small',
                            },
                        }}
                    />
                )}
            </Box>
        </PageContainer>
    );
}
