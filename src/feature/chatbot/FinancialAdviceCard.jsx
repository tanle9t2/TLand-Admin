function FinancialAdviceCard({ financialAdvice }) {
    return (
        <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl mt-2">
            <div className="flex items-center gap-2 mb-2 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="font-bold text-[13px] uppercase tracking-wider">Lời khuyên tài chính</span>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">
                {financialAdvice}
            </div>
        </div>
    )
}

export default FinancialAdviceCard
