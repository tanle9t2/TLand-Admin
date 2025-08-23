import { MoonLoader } from "react-spinners";

function MiniSpinner() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <MoonLoader size={20} color="#ec003f" />
        </div>
    );
};

export default MiniSpinner;
