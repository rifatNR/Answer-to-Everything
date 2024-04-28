"use client";
/* eslint-disable @next/next/no-img-element */
import yes from "/public/yes.png";
import no from "/public/no.png";
import { useEffect, useMemo, useState } from "react";
import random from "random";

const ShouldI = () => {
    const [isShowAns, setIsShowAns] = useState(false);

    // const isYes = useMemo(() => Math.random() <= 0.5, []);
    const isYes = random.boolean();

    useEffect(() => {
        console.log(`
┳┓┏┓┳┓╹┏┳┓  ┏┓┓┏┏┓┏┓┏┳┓
┃┃┃┃┃┃  ┃   ┃ ┣┫┣ ┣┫ ┃ 
┻┛┗┛┛┗  ┻   ┗┛┛┗┗┛┛┗ ┻ 
        `);
    }, []);

    return (
        <div className="h-screen w-screen bg-pink-100">
            {!isShowAns && (
                <div
                    onClick={() => setIsShowAns(true)}
                    className="w-full absolute-center text-center font-indie-flower-regular text-[10vh] cursor-pointer"
                >
                    Should I?
                </div>
            )}
            <div className="absolute-center">
                {isShowAns && (
                    <img
                        className="w-[40vh] h-auto"
                        src={isYes ? yes.src : no.src}
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};

export default ShouldI;
