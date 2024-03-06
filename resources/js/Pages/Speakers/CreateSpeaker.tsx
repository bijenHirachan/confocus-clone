import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

const CreateSpeaker = ({ auth }: PageProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            "/speakers",
            {
                name,
                email,
                phone,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
                onSuccess: () => {
                    setName("");
                    setEmail("");
                    setPhone("");
                },
            }
        );
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Speaker
                </h2>
            }
        >
            <Head title="Create Speaker" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Link href="/speakers">
                                <SecondaryButton>
                                    Back to speakers
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
                                    <InputLabel value="Email" />
                                    <TextInput
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel value="Phone" />
                                    <TextInput
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
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

export default CreateSpeaker;
