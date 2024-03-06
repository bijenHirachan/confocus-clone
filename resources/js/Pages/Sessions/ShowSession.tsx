import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Session } from "../Seminars/SeminarIndex";

type ShowSessionProps = {
    auth: {
        user: User;
    };
    session: Session;
};

const ShowSession = ({ auth, session }: ShowSessionProps) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Session: {session.name}
                </h2>
            }
        >
            <Head title={session.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative text-gray-700 text-sm tracking-wide overflow-x-auto border-gray-400 border my-6 rounded-md grid grid-cols-12">
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-gray-50 border-b p-2 font-semibold">
                                    <p>Seminar</p>
                                </div>
                                <div className="col-span-6 border-gray-400 border-l border-b p-2">
                                    <Link
                                        className="font-semibold"
                                        href={`/seminars/${session.seminar.slug}`}
                                    >
                                        {session.seminar.name}
                                    </Link>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Speaker</p>
                                </div>
                                <div className="col-span-6 border-l flex gap-4 border-gray-400 border-b p-2">
                                    <span className="font-semibold">
                                        {session.speaker.name}{" "}
                                    </span>
                                    <span className="text-blue-500 underline">
                                        {session.speaker.email}{" "}
                                    </span>
                                    <span className="font-semibold">
                                        {session.speaker.phone}{" "}
                                    </span>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Start Time</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.start_time}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>End Time</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.end_time}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Min Participants</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.min_participants}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Max Participants</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.max_participants}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Sector</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.sector?.name}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Functie</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.functie?.name}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Specialisation</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.specialisation?.name}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 border-b border-gray-50 p-2 font-semibold">
                                    <p>Excerpt</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 border-b p-2">
                                    <p>{session.excerpt}</p>
                                </div>
                                <div className="col-span-6 bg-gray-400 text-gray-50 p-2 font-semibold">
                                    <p>Price</p>
                                </div>
                                <div className="col-span-6 border-l border-gray-400 p-2">
                                    <p>$ {session.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default ShowSession;
