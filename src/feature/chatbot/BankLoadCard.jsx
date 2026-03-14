function BankLoadCard({ loanPackages }) {
    const LoanPackageCard = ({ pkg }) => (
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full p-4 border-gray-100">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800 text-sm tracking-wide">{pkg.bankName}</span>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border border-emerald-100">Gói ưu đãi</span>
                </div>
                <div className="text-emerald-600 font-bold text-lg">
                    {pkg.interestRate}
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Hạn mức vay</span>
                    <span className="text-gray-700 font-medium">{pkg.maxLoanRatio}</span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Thời hạn</span>
                    <span className="text-gray-700 font-medium">{pkg.maxTerm}</span>
                </div>
                {pkg.monthlyEstimate && (
                    <div className="mt-3 pt-3 border-t border-gray-50 text-[13px] text-gray-600 leading-relaxed italic">
                        {pkg.monthlyEstimate}
                    </div>
                )}
            </div>
        </div>
    );
    return (
        <div className="flex flex-col gap-4 mt-3 mb-3">
            <div className="flex items-center gap-2 mb-1 px-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                <span className="text-[13px] font-bold text-emerald-800 uppercase tracking-tight">Đối tác ngân hàng đề xuất</span>
            </div>
            <div className="flex flex-col gap-4">
                {loanPackages.map((pkg, pIdx) => (
                    <LoanPackageCard key={pIdx} pkg={pkg} />
                ))}
            </div>
        </div>
    )
}

export default BankLoadCard
