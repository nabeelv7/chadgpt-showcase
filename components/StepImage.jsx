// "use client";
import Image from "next/image";
// import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
// import { useState } from "react";

export default function StepImage({ link, id }) {
    // const [loading, setLoading] = useState(true);

    return (
        <div>
            <div className="flex items-center justify-between py-5 w-full">
                <h1 className="text-2xl font-medium">{id}.</h1>
                <Button asChild>
                    <a href={link} download>Download</a>
                </Button>
            </div>

            <div className="relative w-full aspect-video">
                {/* {loading && (
                    <div className="absolute inset-0">
                        <ImageSkeleton />
                    </div>
                )} */}
                <Image
                    src={link}
                    alt={`Step number ${id}`}
                    width={1920}
                    height={1080}
                    className="object-cover rounded transition-opacity duration-500"
                // className={`object-cover rounded transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
                //     }`}
                // onLoad={() => setLoading(false)}
                />
            </div>
        </div>
    );
}

// export function ImageSkeleton() {
//     return <Skeleton className="w-full h-full rounded" />;
// }
