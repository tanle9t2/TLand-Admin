import React, { useState } from "react";
import useChat from "./useChat";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { SyncLoader } from "react-spinners";
import Button from "../../ui/Button";

function ChatWithAI() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const { isPending, createChat } = useChat()
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
        <div className="flex-1 flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto space-y-3">
                {messages.map((msg, idx) => (
                    <Box key={idx} mb={2}>

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
                    disabled={isPending}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask something..."
                    className="flex-1 border rounded-lg px-4 my-2 mr-2 focus:outline-none"
                />
                <Button
                    disabled={isPending}
                    onClick={sendMessage}
                    variant="primary"
                >
                    Gửi
                </Button>
            </div>
        </div>
    )
}

export default ChatWithAI
