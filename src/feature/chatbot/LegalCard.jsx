function LegalCard({ riskWarnings }) {
    return (
        <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-2xl flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-bold text-amber-900 block text-sm uppercase tracking-wider">Cảnh báo rủi ro</span>
            </div>
            <ul className="list-disc pl-5 space-y-1.5">
                {riskWarnings.map((warning, idx) => (
                    <li key={idx} className="text-amber-800 text-sm leading-relaxed">
                        <span>{warning}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LegalCard
