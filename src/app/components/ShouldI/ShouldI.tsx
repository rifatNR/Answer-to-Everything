/* eslint-disable @next/next/no-img-element */
import yes from "/public/yes.png";
import no from "/public/no.png";
import { useMemo } from "react";

const ShouldI = () => {
    const isYes = useMemo(() => Math.random() <= 0.5, []);

    return (
        <div className="h-screen w-screen bg-pink-100">
            <div className="w-full pt-20">
                <div className="text-center font-indie-flower-regular text-[10vh] font-extrabold">
                    Should I?
                </div>
                <div className="flex justify-center items-center mt-10">
                    {isYes && (
                        <img className="w-[40vh] h-auto" src={yes.src} alt="" />
                    )}
                    {!isYes && (
                        <img className="w-[40vh] h-auto" src={no.src} alt="" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShouldI;
