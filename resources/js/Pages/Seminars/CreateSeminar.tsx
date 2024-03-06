import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

const CreateSeminar = ({ auth }: PageProps) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            "/seminars",
            {
                name,
                description,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
                onSuccess: () => {
                    setName("");
                    setDescription("");
                },
            }
        );
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Seminar
                </h2>
            }
        >
            <Head title="Create Seminar" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href="/seminars">
                                <SecondaryButton>
                                    Back to seminars
                                </SecondaryButton>
                            </Link>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-2 mt-8"
                            >
                                <div>
                                    <InputLabel value="Name" />
                                    <TextInput
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel value="Description" />
                                    <textarea
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                    ></textarea>
                                </div>
                                <PrimaryButton className="w-fit">
                                    Create
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default CreateSeminar;
