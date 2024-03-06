import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { SectorType } from "./SectorIndex";
import { Head, Link, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export type Specialisation = {
    id: number;
    name: string;
    slug: string;
};

export type Functie = {
    id: number;
    name: string;
    slug: string;
    sector?: SectorType;
    specialisations?: Specialisation[];
};

type ShowSectorProps = {
    auth: {
        user: User;
    };
    sector: SectorType;
};

const ShowSector = ({ auth, sector }: ShowSectorProps) => {
    const [name, setName] = useState("");

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        router.put(
            `/sectors/${sector.slug}`,
            {
                name,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
                onSuccess: () => setName(""),
            }
        );
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {sector.name}
                </h2>
            }
        >
            <Head title={sector.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="flex">
                                <TextInput
                                    placeholder="Functie..."
                                    className="rounded-l-md rounded-r-none"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <PrimaryButton className="rounded-r-md rounded-l-none">
                                    Create
                                </PrimaryButton>
                            </form>

                            <div className="relative overflow-x-auto my-6 rounded">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Functie name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sector?.functies?.map((functie) => (
                                            <tr
                                                key={functie.id}
                                                className="bg-gray-100"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    <Link
                                                        href={`/functies/${functie.slug}`}
                                                    >
                                                        {functie.name}
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

export default ShowSector;
