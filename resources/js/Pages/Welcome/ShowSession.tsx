import { Head, Link } from "@inertiajs/react";
import { Seminar, Session } from "../Seminars/SeminarIndex";
import { useState } from "react";
import { useStore } from "@/store/store";

const ShowSession = ({
    session,
    seminar,
    sessions,
}: {
    session: Session;
    seminar: Seminar;
    sessions: Session[];
}) => {
    const {
        sessions: storeSessions,
        toggleSession,
        handleAllSessions,
    } = useStore();

    const handleInputs = (session: Session) => {
        toggleSession(session);
    };

    const handleAllInputs = () => {
        handleAllSessions(sessions);
    };

    return (
        <div className="mx-16 my-4">
            <Head title={session.name} />
            <h3>{seminar.name}</h3>
            <p>{seminar.description}</p>
            <div>store</div>
            {JSON.stringify(storeSessions.map((s) => s.name))}
            {sessions.length > 0 && (
                <div>
                    <div className="my-4">
                        <button
                            onClick={handleAllInputs}
                            className="border text-primary tracking-wide leading-7 hover:bg-light transition-all delay-75 border-primary px-2 py-1"
                        >
                            {storeSessions.some((session) =>
                                sessions.map((s) => s.id).includes(session.id)
                            )
                                ? "Remove all sessions"
                                : "Add all sessions"}
                        </button>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="tracking-wide leading-7 font-semibold col-span-5 border  p-2 border-primary">
                            Sessie
                        </div>
                        <div className="tracking-wide leading-7 font-semibold col-span-5 border-t border-r border-b p-2 border-primary">
                            Details
                        </div>
                        <div className="tracking-wide text-center leading-7 font-semibold col-span-2 border-t border-r border-b p-2 border-primary">
                            Inschrijven
                        </div>
                    </div>
                    {sessions.map((session) => (
                        <div key={session.slug} className="grid grid-cols-12">
                            <div className="col-span-5 tracking-wide leading-7 border-l border-b border-r  p-2 border-primary">
                                {session.name}
                            </div>
                            <div className="col-span-5 space-y-1 tracking-wide leading-7 border-r border-b p-2 border-primary">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-3 font-semibold">
                                        Type
                                    </div>
                                    <div className="col-span-9">
                                        {session.training_type.type}
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-3 font-semibold">
                                        Location
                                    </div>
                                    <div className="col-span-9">
                                        {session.location.name},{" "}
                                        {session.location.city}
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-3 font-semibold">
                                        Time
                                    </div>
                                    <div className="col-span-9">
                                        {session.start_time} -{" "}
                                        {session.end_time}
                                    </div>
                                </div>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-3 font-semibold">
                                        Price
                                    </div>
                                    <div className="col-span-9">
                                        $ {session.price}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 flex items-center justify-center tracking-wide leading-7 border-r border-b p-2 border-primary">
                                <input
                                    checked={storeSessions
                                        .map((s) => s.id)
                                        .includes(session.id)}
                                    onChange={() => handleInputs(session)}
                                    type="checkbox"
                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="my-4 flex justify-end">
                        <Link
                            href="/register/trainees"
                            className="border text-primary tracking-wide leading-7 hover:bg-light transition-all delay-75 border-primary px-2 py-1"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowSession;
