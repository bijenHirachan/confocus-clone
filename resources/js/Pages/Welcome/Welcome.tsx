import { Head, Link, router } from "@inertiajs/react";
import { User } from "@/types";
import { TrainingType } from "../TrainingTypes/TrainingTypeIndex";
import { SectorType } from "../TargetGroups/Sectors/SectorIndex";
import { Session } from "../Seminars/SeminarIndex";
import { GoClock } from "react-icons/go";
import { RxCaretRight } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { ChangeEventHandler, useEffect, useState } from "react";

type WelcomeProps = {
    auth: {
        user: User;
    };
    training_types: TrainingType[];
    sectors: SectorType[];
    sessions: {
        data: Session[];
        total: number;
        current_page: number;
        last_page: number;
    };
    trainingTypesString: string;
    sectorString: string;
    functieString: string;
    specialisationString: string;
};

export default function Welcome({
    training_types,
    sectors,
    sessions,
    trainingTypesString,
    sectorString,
    functieString,
    specialisationString,
}: WelcomeProps) {
    const [page, setPage] = useState(sessions.current_page);
    const [trainingTypes, setTrainingTypes] = useState<string[]>(() => {
        return trainingTypesString.split(",") || [];
    });
    const [selectedSector, setSelectedSector] = useState(sectorString || "");
    const [selectedFunctie, setSelectedFunctie] = useState(functieString || "");
    const [selectedSpecialisation, setSelectedSpecialisation] = useState(
        specialisationString || ""
    );

    const handleTrainingType: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.checked) {
            if (!trainingTypes.includes(e.target.id)) {
                setTrainingTypes((prev) => [...prev, e.target.id]);
            }
        } else {
            let newTypes = trainingTypes.filter((type) => type !== e.target.id);
            setTrainingTypes(newTypes);
        }
    };

    const handleSector: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.checked) {
            setSelectedSector(e.target.id);
        } else {
            setSelectedSector("");
        }
        setSelectedFunctie("");
        setSelectedSpecialisation("");
    };

    const handleFunctie: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.checked) {
            setSelectedFunctie(e.target.id);
        } else {
            setSelectedFunctie("");
        }
        setSelectedSpecialisation("");
    };

    const handleSpecialisation: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.checked) {
            setSelectedSpecialisation(e.target.id);
        } else {
            setSelectedSpecialisation("");
        }
    };

    const handleSearch = () => {
        router.get(
            `/`,
            {
                page,
                training_types: trainingTypes.toString(),
                sector: selectedSector,
                functie: selectedFunctie,
                specialisation: selectedSpecialisation,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
            }
        );
    };

    useEffect(() => {
        const searchNow = setTimeout(() => handleSearch(), 500);
        return () => clearTimeout(searchNow);
    }, [page]);

    useEffect(() => {
        setPage(1);
        const searchNow = setTimeout(() => handleSearch(), 500);
        return () => clearTimeout(searchNow);
    }, [
        trainingTypes,
        selectedSector,
        selectedFunctie,
        selectedSpecialisation,
    ]);

    return (
        <div className="mx-16 my-4">
            <Head title="Training Sessions" />

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3 bg-tertiary border border-primary p-4 h-fit">
                    <div className="border-b py-2">
                        <h3 className="text-lg font-semibold tracking-wide text-primary">
                            Training Types
                        </h3>
                        <div className="flex flex-col gap-1 mt-2">
                            {training_types.map((type) => (
                                <div
                                    className="flex items-center gap-2"
                                    key={type.id}
                                >
                                    <input
                                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                        id={type.slug}
                                        type="checkbox"
                                        onChange={handleTrainingType}
                                        checked={trainingTypes.includes(
                                            type.slug
                                        )}
                                    />
                                    <label
                                        className="text-md tracking-wide text-secondary"
                                        htmlFor={type.slug}
                                    >
                                        {type.type}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="py-2 border-b">
                        <h3 className="text-lg font-semibold tracking-wide text-primary">
                            Sectors
                        </h3>
                        <div className="flex flex-col gap-1 mt-2">
                            {sectors.map((sector) => (
                                <div
                                    className="flex flex-col gap-2"
                                    key={`sector-${sector.id}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                            id={`${sector.slug}`}
                                            type="checkbox"
                                            onChange={handleSector}
                                            checked={
                                                sector.slug === selectedSector
                                            }
                                        />
                                        <label
                                            className="text-md tracking-wide text-secondary"
                                            htmlFor={`${sector.slug}`}
                                        >
                                            {sector.name}
                                        </label>
                                    </div>
                                    <div>
                                        {sector.slug === selectedSector &&
                                            sector.functies &&
                                            sector.functies.length > 0 &&
                                            sector.functies.map((functie) => (
                                                <div
                                                    key={`functie-${functie.id}`}
                                                >
                                                    <div className="ml-4 flex items-center gap-2">
                                                        <input
                                                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                                            id={`${functie.slug}`}
                                                            type="checkbox"
                                                            onChange={
                                                                handleFunctie
                                                            }
                                                            checked={
                                                                functie.slug ===
                                                                selectedFunctie
                                                            }
                                                        />
                                                        <label
                                                            className="text-md tracking-wide text-secondary"
                                                            htmlFor={`${functie.slug}`}
                                                        >
                                                            {functie.name}
                                                        </label>
                                                    </div>
                                                    {functie.slug ===
                                                        selectedFunctie &&
                                                        functie.specialisations &&
                                                        functie.specialisations
                                                            .length > 0 &&
                                                        functie.specialisations.map(
                                                            (
                                                                specialisation
                                                            ) => (
                                                                <div
                                                                    key={`specialisation-${specialisation.id}`}
                                                                    className="ml-8 flex items-center gap-2"
                                                                >
                                                                    <input
                                                                        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                                                        id={`${specialisation.slug}`}
                                                                        type="checkbox"
                                                                        onChange={
                                                                            handleSpecialisation
                                                                        }
                                                                        checked={
                                                                            specialisation.slug ===
                                                                            selectedSpecialisation
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="text-md tracking-wide text-secondary"
                                                                        htmlFor={`${specialisation.slug}`}
                                                                    >
                                                                        {
                                                                            specialisation.name
                                                                        }
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-9">
                    <div className="mb-2 flex justify-between">
                        <h2 className="text-primary font-semibold text-lg tracking-wide leading-7">
                            {sessions.total} opleidingen gevonden
                        </h2>

                        <div className="flex items-center gap-2">
                            <span className="tracking-wide text-primary">
                                Page {sessions.current_page} of{" "}
                                {sessions.last_page}
                            </span>

                            {sessions.current_page > 1 && (
                                <button
                                    onClick={() => setPage((page) => page - 1)}
                                    className="border hover:bg-light transition-all delay-75 border-primary px-1 text-primary tracking-wide leading-7"
                                >
                                    Prev
                                </button>
                            )}

                            {sessions.current_page < sessions.last_page && (
                                <button
                                    onClick={() => setPage((page) => page + 1)}
                                    className="border hover:bg-light transition-all delay-75 border-primary px-1 text-primary tracking-wide leading-7"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>

                    <div className=" flex flex-col gap-4">
                        {sessions.data.map((session) => (
                            <div
                                key={session.id}
                                className="border relative  bg-light border-primary p-4 grid grid-cols-12"
                            >
                                <div className="border-t border-r bg-tertiary border-b p-2 border-primary absolute top-4">
                                    <GoClock
                                        className="text-primary "
                                        size={22}
                                    />
                                </div>
                                <div className="col-span-8 pl-12">
                                    <h2 className="tracking-wide leading-7 font-semibold text-primary text-xl">
                                        {session.name}
                                    </h2>
                                    <p className="tracking-wide leading-7 text-secondary mt-2">
                                        {session.excerpt}
                                    </p>
                                    <div className="mt-4">
                                        <Link
                                            href={`/${session.slug}`}
                                            className="border w-fit tracking-wide leading-7 flex items-center border-primary text-primary p-2"
                                        >
                                            Meer Info <RxCaretRight size={24} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-4 border-l px-4 border-primary">
                                    <span className="flex items-center text-lg tracking-wide leading-7 font-semibold text-primary gap-2">
                                        <AiOutlineUser size={24} />
                                        {session.speaker.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
