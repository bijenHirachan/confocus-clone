import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export type TrainingType = {
    id: number;
    type: string;
    slug: string;
};

type TrainingTypeProps = {
    auth: {
        user: User;
    };
    training_types: TrainingType[];
};

const TrainingTypeIndex = ({ auth, training_types }: TrainingTypeProps) => {
    const [type, setType] = useState("");

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            `/training-types`,
            {
                type,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
                onSuccess: () => setType(""),
            }
        );
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Training Types
                </h2>
            }
        >
            <Head title="Training Types" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submitHandler} className="flex">
                                <TextInput
                                    placeholder="Training type..."
                                    className="rounded-l-md rounded-r-none"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
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
                                                Product name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {training_types.map((type) => (
                                            <tr
                                                key={type.id}
                                                className="bg-gray-100"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {type.type}
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

export default TrainingTypeIndex;
