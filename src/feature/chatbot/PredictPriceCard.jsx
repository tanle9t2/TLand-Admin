function PredictPriceCard({ priceEvaluation }) {
    const { predictedPrice, diffPercent, listedPrice, verdict, analysis } = priceEvaluation
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-6 rounded-3xl mt-4 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">

            <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5">

                <div className="flex items-center gap-3">
                    <div className="bg-indigo-600 p-2 rounded-xl shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <span className="font-extrabold text-indigo-950 text-sm tracking-wide uppercase">
                        Phân tích Giá Tham Khảo
                    </span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-indigo-100/50 rounded-2xl p-5 flex flex-col justify-center shadow-sm relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-bl-3xl" />

                    <div className="text-[11px] text-indigo-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Khoảng giá thị trường
                    </div>

                    <p className="text-xl sm:text-4xl font-black text-indigo-700">
                        {predictedPrice}
                    </p>

                    <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-indigo-400 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Giá được AI ước tính từ dữ liệu bất động sản tương tự trên thị trường, có thể dao động khoảng ±15%
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3.5 border border-indigo-50 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Giá Niêm Yết</span>
                            <span className="text-lg font-bold text-gray-800">{listedPrice}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                        </div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3.5 border border-indigo-50 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Độ Lệch</span>
                            <span className={`text-lg font-bold ${diffPercent > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                                {diffPercent > 0 ? 'Cao hơn' : 'Thấp hơn'} {diffPercent}
                            </span>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${diffPercent > 0 ? 'bg-rose-100 text-rose-500' : 'bg-emerald-100 text-emerald-500'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {diffPercent > 0 ?
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /> :
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                }
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-50">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 bg-indigo-100 p-1.5 rounded-lg text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <div className="text-indigo-900 text-sm font-bold leading-tight mb-2">
                                {verdict}
                            </div>
                            <div className="text-gray-600 text-sm leading-relaxed">
                                {analysis}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PredictPriceCard
