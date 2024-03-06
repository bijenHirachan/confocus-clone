import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Speaker } from "../Speakers/SpeakerIndex";
import { SectorType } from "../TargetGroups/Sectors/SectorIndex";
import { Functie, Specialisation } from "../TargetGroups/Sectors/ShowSector";
import { TrainingType } from "../TrainingTypes/TrainingTypeIndex";
import { Location } from "../Locations/LocationIndex";

export type Session = {
    id: number;
    name: string;
    slug: string;
    excerpt: string;
    date: string;
    price: number;
    start_time: number;
    end_time: number;
    min_participants: number;
    max_participants: number;
    seminar: Seminar;
    speaker: Speaker;
    sector: SectorType;
    functie: Functie;
    specialisation: Specialisation;
    training_type: TrainingType;
    location: Location;
};
export type Seminar = {
    id: number;
    name: string;
    slug: string;
    description: string;
    sessions: Session[];
};

type SeminarIndexProps = {
    auth: {
        user: User;
    };
    seminars: Seminar[];
};

const SeminarIndex = ({ auth, seminars }: SeminarIndexProps) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Seminars
                </h2>
            }
        >
            <Head title="Seminars" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href="/seminars/create">
                                <PrimaryButton>Create</PrimaryButton>
                            </Link>

                            <div className="relative overflow-x-auto my-6 rounded">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {seminars.map((seminar) => (
                                            <tr
                                                key={seminar.id}
                                                className="bg-gray-100"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    <Link
                                                        href={`/seminars/${seminar.slug}`}
                                                    >
                                                        {seminar.name}
                                                    </Link>
                                                </th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default SeminarIndex;
