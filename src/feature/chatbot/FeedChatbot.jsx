import { useRef } from "react";
import toast from "react-hot-toast";
import useUploadKnowledge from "./useUploadKnowledge";
import Button from "../../ui/Button";

import TableKnowledge from "./TableKnowledge";

export default function FeedChatbot() {
    const { isPending: uploadingKnowlegde, uploadKnowledge } = useUploadKnowledge()
    const fileRef = useRef(null)
    const handleFileChange = (e) => {
        console.log(e.target.files)
        const file = e.target.files[0];
        if (!file) return
        (uploadKnowledge({ file }, {
            onSuccess: () => {
                toast.success("Dữ liệu mới đã được thêm vào")
            }

        })
        )
    };
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto">


                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Quản lý dữ liệu Chatbot
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Upload và quản lý tài liệu để chatbot học thêm kiến thức
                    </p>
                </div>


                <div className="bg-white rounded-2xl shadow-sm border p-8">


                    <div className="mb-8">
                        <label
                            htmlFor="file"
                            className={`flex flex-col items-center justify-center h-40 rounded-xl border-2 border-dashed transition-all duration-200
              ${uploadingKnowlegde
                                    ? "bg-gray-100 cursor-not-allowed"
                                    : "hover:border-red-400 hover:bg-red-50 cursor-pointer"
                                }`}
                        >
                            <span className="text-gray-600 font-medium">
                                Kéo thả file PDF vào đây
                            </span>
                            <span className="text-sm text-gray-400 mt-1">
                                hoặc click để chọn file
                            </span>

                            <input
                                ref={fileRef}
                                id="file"
                                type="file"
                                className="hidden"
                                disabled={uploadingKnowlegde}
                                accept=".pdf"
                                onChange={(handleFileChange)}
                            />
                        </label>

                        <Button
                            onClick={() => fileRef.current?.click()}
                            disabled={uploadingKnowlegde}
                            variant="primary"
                            className="mt-4 ml-auto flex px-6"
                        >
                            {uploadingKnowlegde ? "Đang upload..." : "Upload File"}
                        </Button>
                    </div>


                    <div className="border-t my-6"></div>


                    <TableKnowledge />
                </div>
            </div>
        </div>
    );
}
