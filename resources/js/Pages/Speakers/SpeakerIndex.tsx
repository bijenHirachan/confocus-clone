import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";

export type Speaker = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

type SpeakerIndexProps = {
    auth: {
        user: User;
    };
    speakers: Speaker[];
};

const SpeakerIndex = ({ auth, speakers }: SpeakerIndexProps) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Speakers
                </h2>
            }
        >
            <Head title="Speakers" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href="/speakers/create">
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
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Phone
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {speakers.map((speaker) => (
                                            <tr
                                                key={speaker.id}
                                                className="bg-gray-100"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {speaker.name}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {speaker.email}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {speaker.phone}
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

export default SpeakerIndex;
