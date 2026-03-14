import { POST_PAGE_URL } from "../../utils/Url";

function PropertyCard({ property }) {

    const { propertyId, title, price, location, specs, description, legalStatus, furnitureState, agentNote, highlights } = property;
    const handleOnClickPost = (id) => {
        if (!id) return;
        window.open(`${POST_PAGE_URL}/${id}`)
    }
    return (

        <div
            onClick={() => handleOnClickPost(propertyId)}
            className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full cursor-pointer"
        >
            <div className="p-4 sm:p-5 flex flex-col gap-3.5">
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4">
                    <h4 className="font-bold text-gray-800 text-base leading-snug">
                        {title}
                    </h4>
                    <div className="bg-rose-50 text-rose-700 font-bold px-3 py-1.5 rounded-lg text-sm whitespace-nowrap self-start">
                        {price}
                    </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="truncate" title={location}>{location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    <span className="font-medium">{specs}</span>
                </div>

                {description && (
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="flex flex-wrap gap-2">
                    {legalStatus && legalStatus !== "Chưa rõ" && (
                        <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-[12px] font-medium border border-blue-100">
                            Pháp lý: {legalStatus}
                        </span>
                    )}
                    {furnitureState && furnitureState !== "Chưa rõ" && (
                        <span className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md text-[12px] font-medium border border-orange-100">
                            Nội thất: {furnitureState}
                        </span>
                    )}
                </div>

                {highlights && highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {highlights.map((hlt, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-[13px] font-medium border border-emerald-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                {hlt}
                            </div>
                        ))}
                    </div>
                )}

                {agentNote && (
                    <div className="mt-1 text-sm bg-blue-50/60 hover:bg-blue-50 transition-colors text-blue-800 p-3.5 rounded-xl flex items-start gap-2.5 border border-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <div className="leading-relaxed">
                            <span className="font-semibold block mb-0.5 text-blue-900">Ghi chú từ môi giới</span>
                            {agentNote}
                        </div>
                    </div>
                )}
            </div>
        </div>


    )
}

export default PropertyCard
