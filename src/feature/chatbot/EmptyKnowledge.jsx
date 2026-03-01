import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
function EmptyKnowledge() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
                <DescriptionOutlinedIcon
                    sx={{ fontSize: 40, color: "#9ca3af" }}
                />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Chưa có tài liệu nào
            </h3>

            <p className="text-sm text-gray-400 max-w-sm">
                Hãy upload tài liệu đầu tiên để hệ thống có thể bắt đầu
                index và trả lời câu hỏi từ dữ liệu của bạn.
            </p>
        </div>
    );
}

export default EmptyKnowledge
