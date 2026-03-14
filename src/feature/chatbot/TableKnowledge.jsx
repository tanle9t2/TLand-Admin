
import DeleteIcon from "@mui/icons-material/Delete";
import useGetKnowledges from "./useGetKnowledges";
import EmptyKnowledge from "./EmptyKnowledge";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import useDeleteKnowledge from "./useDeleteKnowledge";
import toast from "react-hot-toast";



function TableKnowledge() {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5,
    });

    const [sortModel, setSortModel] = useState([
        { field: "id", sort: "desc" },
    ]);

    const { isLoading, knowledges, totalElements } = useGetKnowledges()
    const { isPending, deleteKnowledge } = useDeleteKnowledge()
    if (!knowledges?.length) return <EmptyKnowledge />
    const columns = [
        {
            field: "filename",
            headerName: "Tên file",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "totalChunks",
            headerName: "Tổng chunk",
            width: 200,

        },
        {
            field: "docType",
            headerName: "Loại tài liệu",
            width: 200,
        },
        {
            field: "createdAt",
            headerName: "Ngày upload",
            width: 300,

        },
        {
            field: "actions",
            headerName: "Hành động",
            width: 120,
            sortable: false,
            renderCell: (params) => (
                <IconButton
                    size="small"
                    sx={{
                        color: "#ef4444",
                        "&:hover": { backgroundColor: "#fee2e2" },
                    }}
                    onClick={() => handleDelete(params.row.id)}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            ),
        },
    ];
    function handleDelete(id) {
        deleteKnowledge({ id }, {
            onSuccess: () => toast.success("Xóa thành công"),
            onError: (err) => toast.error(err.message)
        })
    }
    function handleOnRowDoubleClick(params) {
        const url = params.row.fileUrl;
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (
        <Paper sx={{ height: 500, width: "100%" }}>
            <DataGrid
                rows={knowledges || []}
                columns={columns}
                loading={isLoading}

                rowCount={totalElements || 0}

                paginationMode="server"
                sortingMode="server"

                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}

                sortModel={sortModel}
                onSortModelChange={setSortModel}

                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick
                onRowDoubleClick={handleOnRowDoubleClick}
            />
        </Paper>
    )
}

export default TableKnowledge
