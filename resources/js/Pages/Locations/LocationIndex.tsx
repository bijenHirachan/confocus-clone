import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, router } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

export type Location = {
    id: number;
    name: string;
    slug: string;
    street: string;
    post_code: string;
    city: string;
    country: string;
};

type LocationIndexProps = {
    auth: {
        user: User;
    };
    locations: Location[];
};

const LocationIndex = ({ auth, locations }: LocationIndexProps) => {
    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            "/locations",
            {
                name,
                street,
                post_code: postCode,
                city,
                country,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
                onSuccess: () => {
                    setName("");
                    setStreet("");
                    setPostCode("");
                    setCity("");
                    setCountry("");
                    setShowModal(false);
                },
            }
        );
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Locations
                </h2>
            }
        >
            <Head title="Locations" />

            <Modal
                show={showModal}
                closeable
                onClose={() => setShowModal(false)}
            >
                <form className="p-6" onSubmit={submitHandler}>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <InputLabel value="Location Name" />
                                <TextInput
                                    value={name}
                                    className="w-full"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="w-1/2">
                                <InputLabel value="Street" />
                                <TextInput
                                    className="w-full"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <InputLabel value="Post Code" />
                                <TextInput
                                    className="w-full"
                                    value={postCode}
                                    onChange={(e) =>
                                        setPostCode(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-1/2">
                                <InputLabel value="City" />
                                <TextInput
                                    className="w-full"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <InputLabel value="Country" />
                                <TextInput
                                    className="w-full"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <PrimaryButton className="mt-4">
                        Create Location
                    </PrimaryButton>
                </form>
            </Modal>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between">
                                <PrimaryButton
                                    onClick={() => setShowModal(true)}
                                >
                                    Create Location
                                </PrimaryButton>
                            </div>

                            <div className="relative overflow-x-auto my-6 rounded">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Location Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Street
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Post Code
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                City
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Country
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {locations.map((location) => (
                                            <tr
                                                key={location.id}
                                                className="bg-gray-100"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {location.name}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {location.street}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {location.post_code}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {location.city}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {location.country}
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

export default LocationIndex;
