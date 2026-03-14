import React, { useState } from "react";
import useChat from "./useChat";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { SyncLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import AIAvatar from "./AIAvatar";
import PredictPriceCard from "./PredictPriceCard";
import BankLoadCard from "./BankLoadCard";
import FinancialAdviceCard from "./FinancialAdviceCard";
import PropertyCard from "./PropertyCard";
import LegalCard from "./LegalCard";

function ChatWithAI() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const { isPending, createChat } = useChat();

    const sendMessage = async () => {
        if (!input.trim()) {
            toast.error("Vui lòng nhập nội dung")
            return;
        };
        createChat({ input, messages }, {
            onSuccess: (data) => {
                let aiResponse = data;

                if (data.answer) {
                    if (typeof data.answer === 'string') {
                        try {
                            aiResponse = JSON.parse(data.answer);
                        } catch (e) {
                            aiResponse = data.answer;
                        }
                    } else {
                        aiResponse = data.answer;
                    }
                }

                const updated = [...messages, { human: input, ai: aiResponse }];
                setMessages(updated);
                setInput("");
            }
        });
    };

    const mdComponents = {
        p: ({ children }) => <p className="m-0 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-4 mt-1.5 space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-4 mt-1.5 space-y-1">{children}</ol>,
        strong: ({ children }) => <strong className="font-semibold text-rose-700">{children}</strong>,
    };

    return (
        <div className="flex-1 flex flex-col bg-white">
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {messages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                        <Typography variant="h5" color="textSecondary" fontWeight="500">
                            Hôm nay bạn cần hỗ trợ gì?
                        </Typography>
                        <span className="text-sm">Hãy thử hỏi về thông tin bất động sản, thị trường...</span>
                    </div>
                )}
                {messages.map(({ ai, human }, idx) => (
                    <div key={idx} className="flex flex-col space-y-6">

                        <div className="flex justify-end">
                            <div className="max-w-[75%] bg-gray-100 rounded-2xl rounded-tr-sm px-5 py-3 text-gray-800 text-sm leading-relaxed shadow-sm">
                                {human}
                            </div>
                        </div>

                        <div className="flex items-end gap-2.5">
                            <AIAvatar />
                            <div className="bg-white text-gray-800 px-5 py-4 rounded-3xl rounded-tl-sm max-w-[85%] sm:max-w-[80%] break-words shadow-sm border border-gray-100 leading-relaxed">
                                {typeof ai === 'string' ? (
                                    <ReactMarkdown components={mdComponents}>
                                        {ai}
                                    </ReactMarkdown>
                                ) : (
                                    <div className="space-y-4">
                                        {ai.message && (
                                            <ReactMarkdown components={mdComponents}>{ai.message}</ReactMarkdown>
                                        )}
                                        {ai.property && (
                                            <div className="mt-3 mb-3">
                                                <PropertyCard property={ai.property} />
                                            </div>
                                        )}

                                        {ai.properties && ai.properties.length > 0 && (
                                            <div className="flex flex-col gap-4 mt-3 mb-3">
                                                {ai.properties.map((prop, pIdx) => (
                                                    <PropertyCard key={prop.propertyId || pIdx} property={prop} />
                                                ))}
                                            </div>
                                        )}

                                        {ai.priceEvaluation && (
                                            <PredictPriceCard priceEvaluation={ai.priceEvaluation} />
                                        )}

                                        {ai.agentAnalysis && (
                                            <div className="bg-blue-50/80 border border-blue-100 p-4 rounded-2xl flex items-start gap-3 mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                                <div>
                                                    <span className="font-bold text-blue-900 block text-sm mb-1 uppercase tracking-wider">Phân tích từ chuyên gia AI</span>
                                                    <div className="text-blue-800 text-sm leading-relaxed">
                                                        {ai.agentAnalysis}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {ai.loanPackages && ai.loanPackages.length > 0 && (
                                            <BankLoadCard loanPackages={ai.loanPackages} />
                                        )}


                                        {ai.financialAdvice && (
                                            <FinancialAdviceCard financialAdvice={ai.financialAdvice} />
                                        )}

                                        {ai.legalPoints && ai.legalPoints.length > 0 && (
                                            <div className="bg-emerald-50/80 border border-emerald-100 p-4 rounded-2xl flex flex-col gap-3 mt-2">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                                    </svg>
                                                    <span className="font-bold text-emerald-900 block text-sm uppercase tracking-wider">Căn cứ pháp lý</span>
                                                </div>
                                                <div className="space-y-3">
                                                    {ai.legalPoints.map((point, idx) => (
                                                        <div key={idx} className="bg-white rounded-xl p-3 border border-emerald-100 shadow-sm">
                                                            <h4 className="font-semibold text-emerald-800 text-sm mb-1">{point.title}</h4>
                                                            <p className="text-gray-700 text-sm leading-relaxed">{point.content}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {ai.riskWarnings && ai.riskWarnings.length > 0 && (
                                            <LegalCard riskWarnings={ai.riskWarnings} />
                                        )}
                                        {ai.followUpQuestion && (
                                            <div className="pt-2 border-t border-gray-100">
                                                <ReactMarkdown components={mdComponents}>{ai.followUpQuestion}</ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}


                {isPending && (
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-end">
                            <div className="bg-rose-500 text-white text-sm px-5 py-3 rounded-3xl rounded-tr-sm max-w-[80%] break-words shadow-sm opacity-80 leading-relaxed">
                                {input}
                            </div>
                        </div>
                        <div className="flex items-end gap-2.5">
                            <AIAvatar />
                            <div className="bg-white px-5 py-4 rounded-3xl rounded-tl-sm shadow-sm border border-gray-100 flex items-center gap-1">
                                <SyncLoader size={7} color="#e11d48" margin={2} />
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className="p-4 border-t border-gray-100 bg-white">
                <div className=" w-full relative">
                    <input
                        disabled={isPending}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Nhập câu hỏi của bạn..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-24 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm disabled:opacity-50"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <button
                            disabled={isPending || !input.trim()}
                            onClick={sendMessage}
                            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 py-2 rounded-full font-medium text-sm transition-colors shadow-sm"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatWithAI
