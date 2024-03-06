import { useStore } from "@/store/store";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

const Success = () => {
    const { resetAll } = useStore();

    useEffect(() => {
        resetAll();
    }, []);

    return (
        <div className="min-h-screen bg-light flex flex-col items-center justify-center">
            <p className="text-primary tracking-wide leading-7 text-lg">
                Your request has been successful!
            </p>
            <Link href="/" className="flex items-center gap-4">
                <span className="text-lg underline text-blue-500">
                    Back to home{" "}
                </span>
            </Link>
        </div>
    );
};

export default Success;
