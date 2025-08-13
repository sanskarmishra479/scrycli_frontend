export const BgAnimation = () => {
    return (
        <div className="h-[1120px] w-320 relative overflow-hidden blur-[20px]">
            <div
                className="absolute h-90 w-90 bottom-60 right-20 rounded-full bg-orange-600 blur-[20px] animate-[animeOne_3s_infinite_alternate_ease-in-out]"
            ></div>
            <div
                className="absolute h-90 w-90 bottom-60 right-32 rounded-full bg-orange-600 blur-[20px] animate-[animeTwo_3s_infinite_alternate_ease-in-out]"
            ></div>
            <div
                className="absolute h-90 w-90 bottom-65 right-40 rounded-full bg-orange-600 blur-[20px] animate-[animeThree_3s_infinite_alternate_ease-in-out]"
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
