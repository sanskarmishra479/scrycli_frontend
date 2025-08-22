export const BgAnimation = () => {
    return (
        <div className="h-130 w-130 relative">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-90 md:w-90 h-60 w-60 rounded-full bg-orange-600 blur-[20px] animate-[animeOne_3s_infinite_alternate_ease-in-out] "
            ></div>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-90 md:w-90 h-60 w-60 rounded-full bg-orange-600 blur-[20px] animate-[animeTwo_3s_infinite_alternate_ease-in-out] "
            ></div>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-90 md:w-90 h-60 w-60 rounded-full bg-orange-600 blur-[20px] animate-[animeThree_3s_infinite_alternate_ease-in-out] "
            ></div>
            <style>
            {`
                @keyframes animeOne {
                    0% { transform: translate(-10%, -10%); }
                    100% { transform: translate(10%, 10%); }
                }

                @keyframes animeTwo {
                    0% { transform: translate(10%, -13%); }
                    100% { transform: translate(-10%, 15%); }
                }

                @keyframes animeThree {
                    0% { transform: translate(-5%, 10%); }
                    100% { transform: translate(5%, -5%); }
                }
            `}
            </style>
        </div>
    );
};
