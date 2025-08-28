import React, { useRef, useState } from "react";
import useChat from "./useChat";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useUploadKnowledge from "./useUploadKnowledge";
import { SyncLoader } from "react-spinners";
import Button from "../../ui/Button";

export default function FeedChatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const { isPending, createChat } = useChat()
    const { isPending: uploadingKnowlegde, uploadKnowledge } = useUploadKnowledge()
    const fileRef = useRef(null)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return
        (uploadKnowledge({ file }, {
            onSuccess: () => {
                toast.success("Dữ liệu mới đã được thêm vào")
            }

        })
        )
    };
    const sendMessage = async () => {
        if (!input.trim()) {
            toast.error("Vui lòng nhập nội dung")
            return;
        };
        createChat({ input, messages }, {
            onSuccess: (data) => {
                const { answer } = data;
                const updated = [...messages, { human: input, ai: answer }];
                setMessages(updated);
                setInput("")
            }
        })
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left: Upload Panel */}
            <div className="w-1/3 bg-white shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    📂 Thêm dữ liệu mới chatbot
                </h2>

                <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
                >
                    <span className="text-gray-500">
                        "Click or drag & drop a file"
                    </span>
                    <input
                        ref={fileRef}
                        id="file"
                        type="file"
                        className="hidden"
                        accept=".pdf,.docx,.md,.txt,.html"
                        onChange={handleFileChange}
                    />
                </label>

                <Button
                    onClick={() => fileRef.current?.click()}
                    disabled={uploadingKnowlegde}
                    variant="primary"
                >
                    {uploadingKnowlegde ? "Uploading..." : "Upload"}
                </Button>
            </div>

            {/* Right: Chat Panel */}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 p-6 overflow-y-auto space-y-3">
                    {messages.map((msg, idx) => (
                        <Box key={idx} mb={2}>
                            {/* User message */}
                            <Box display="flex" justifyContent="flex-end" mb={0.5}>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        bgcolor: "#E0E0E0",
                                        p: 1,
                                        borderRadius: "8px",
                                        maxWidth: "70%",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    Bạn: {msg.human}
                                </Typography>
                            </Box>

                            {/* AI message */}
                            <Box display="flex" justifyContent="flex-start" mb={0.5}>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        bgcolor: "#E0E0E0",

                                        p: 1,
                                        borderRadius: "8px",
                                        maxWidth: "70%",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    Trợ lý ảo: {msg.ai.split("\n").map((item, index) => item.trim() !== "" && <>
                                        <br />  <span key={index}>{item}</span>
                                    </>)}
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 1 }} />
                        </Box>
                    ))}
                    {isPending && <>
                        <Box display="flex" justifyContent="flex-end" mb={0.5}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    bgcolor: "#E0E0E0",
                                    p: 1,
                                    borderRadius: "8px",
                                    maxWidth: "70%",
                                    wordBreak: "break-word",
                                }}
                            >
                                Bạn: {input}
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="flex-start" mb={0.5}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    bgcolor: "#E0E0E0",
                                    display: "flex",
                                    p: 1,
                                    borderRadius: "8px",
                                    maxWidth: "70%",
                                    wordBreak: "break-word",
                                }}
                            >
                                Trợ lý ảo: <SyncLoader size={8} />
                            </Typography>
                        </Box>

                        <Divider sx={{ my: 1 }} />
                    </>}
                </div>

                <div className="p-4 border-t flex">
                    <input
                        disabled={uploadingKnowlegde || isPending}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Ask something..."
                        className="flex-1 border rounded-lg px-4 my-2 mr-2 focus:outline-none"
                    />
                    <Button
                        disabled={uploadingKnowlegde || isPending}
                        onClick={sendMessage}
                        variant="primary"
                    >
                        Gửi
                    </Button>
                </div>
            </div>
        </div>
    );
}
