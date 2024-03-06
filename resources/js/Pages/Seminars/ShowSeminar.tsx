import SecondaryButton from "@/Components/SecondaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { Seminar } from "./SeminarIndex";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Speaker } from "../Speakers/SpeakerIndex";
import Modal from "@/Components/Modal";
import { SectorType } from "../TargetGroups/Sectors/SectorIndex";
import { Functie } from "../TargetGroups/Sectors/ShowSector";
import dayjs from "dayjs";
import { Location } from "../Locations/LocationIndex";
import { TrainingType } from "../TrainingTypes/TrainingTypeIndex";

type Specialisation = {
    id: number;
    name: string;
    slug: string;
};

type ShowSeminarProps = {
    auth: {
        user: User;
    };
    seminar: Seminar;
    speakers: Speaker[];
    sectors: SectorType[];
    locations: Location[];
    training_types: TrainingType[];
};

const ShowSeminar = ({
    auth,
    seminar,
    speakers,
    sectors,
    locations,
    training_types,
}: ShowSeminarProps) => {
    const [showModal, setShowModal] = useState(false);

    const [functies, setFuncties] = useState<Functie[] | undefined>([]);

    const [specialisations, setSpecialisations] = useState<
        Specialisation[] | undefined
    >([]);

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [minParticipants, setMinParticipants] = useState("");
    const [maxParticipants, setMaxParticipants] = useState("");
    const [price, setPrice] = useState("");
    const [speaker, setSpeaker] = useState("");
    const [sector, setSector] = useState("");
    const [functie, setFunctie] = useState("");
    const [specialisation, setSpecialisation] = useState("");
    const [location, setLocation] = useState("");
    const [trainingType, setTrainingType] = useState("");

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            "/sessions",
            {
                name,
                date,
                excerpt,
                start_time: startTime,
                end_time: endTime,
                min_participants: minParticipants,
                max_participants: maxParticipants,
                price,
                speaker_id: speaker,
                sector_id: sector,
                functie_id: functie,
                specialisation_id: specialisation,
                seminar_id: seminar.id,
                location_id: location,
                training_type_id: trainingType,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
                onSuccess: () => handleSuccess(),
            }
        );
    };

    const handleSuccess = () => {
        setName("");
        setDate("");
        setExcerpt("");
        setStartTime("");
        setEndTime("");
        setMinParticipants("");
        setMaxParticipants("");
        setPrice("");
        setSpeaker("");
        setSector("");
        setFunctie("");
        setSpecialisation("");
        setShowModal(false);
    };

    const sectorHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setSector(e.target.value);
        const selectedSector = sectors.find(
            (sector) => sector.id.toString() === e.target.value
        );
        setFuncties(selectedSector?.functies);
        setSpecialisations([]);
        setFunctie("");
        setSpecialisation("");
    };

    const functieHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setFunctie(e.target.value);
        const selectedFunctie = functies?.find(
            (functie) => functie.id.toString() === e.target.value
        );
        setSpecialisations(selectedFunctie?.specialisations);
        setSpecialisation("");
    };

    const specialisationHandler: ChangeEventHandler<HTMLSelectElement> = (
        e
    ) => {
        setSpecialisation(e.target.value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {seminar.name}
                </h2>
            }
        >
            <Head title={seminar.name} />
            <Modal
                show={showModal}
                closeable
                onClose={() => setShowModal(false)}
            >
                <form className="p-6" onSubmit={submitHandler}>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div>
                                <InputLabel value="Session Name" />
                                <TextInput
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <InputLabel value="Date" />
                                <TextInput
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <InputLabel value="Training Type" />
                                <select
                                    value={trainingType}
                                    onChange={(e) =>
                                        setTrainingType(e.target.value)
                                    }
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                >
                                    <option value="">
                                        Select Training Type
                                    </option>
                                    {training_types.map((type) => (
                                        <option key={type.id} value={type.id}>
                                            {type.type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <InputLabel value="Location" />
                                <select
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                >
                                    <option value="">Select Location</option>
                                    {locations?.map((location) => (
                                        <option
                                            key={location.id}
                                            value={location.id}
                                        >
                                            {location.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <InputLabel value="Start Time" />
                                <TextInput
                                    type="time"
                                    value={startTime}
                                    onChange={(e) =>
                                        setStartTime(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <InputLabel value="End Time" />
                                <TextInput
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div>
                                <InputLabel value="Min Participants" />
                                <TextInput
                                    type="number"
                                    value={minParticipants}
                                    onChange={(e) =>
                                        setMinParticipants(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <InputLabel value="Max Participants" />
                                <TextInput
                                    type="number"
                                    value={maxParticipants}
                                    onChange={(e) =>
                                        setMaxParticipants(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <InputLabel value="Sector" />
                                <select
                                    value={sector}
                                    onChange={sectorHandler}
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                >
                                    <option value="">Select Sector</option>
                                    {sectors.map((sector) => (
                                        <option
                                            key={sector.id}
                                            value={sector.id}
                                        >
                                            {sector.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <InputLabel value="Functie" />
                                <select
                                    value={functie}
                                    onChange={functieHandler}
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                >
                                    <option value="">Select Functie</option>
                                    {functies?.map((functie) => (
                                        <option
                                            key={functie.id}
                                            value={functie.id}
                                        >
                                            {functie.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <InputLabel value="Specialisation" />
                                <select
                                    value={specialisation}
                                    onChange={specialisationHandler}
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                >
                                    <option value="">
                                        Select Specialisation
                                    </option>
                                    {specialisations?.map((specialisation) => (
                                        <option
                                            key={specialisation.id}
                                            value={specialisation.id}
                                        >
                                            {specialisation.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <InputLabel value="Price" />
                                <TextInput
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <InputLabel value="Speaker" />
                                <select
                                    value={speaker}
                                    onChange={(e) => setSpeaker(e.target.value)}
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                >
                                    <option value="">Select Speaker</option>
                                    {speakers.map((speaker) => (
                                        <option
                                            key={speaker.id}
                                            value={speaker.id}
                                        >
                                            {speaker.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <InputLabel value="Excerpt" />
                            <textarea
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                            ></textarea>
                        </div>
                    </div>

                    <PrimaryButton className="mt-4">
                        Create Session
                    </PrimaryButton>
                </form>
            </Modal>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between">
                                <Link href="/seminars">
                                    <SecondaryButton>
                                        Back to seminars
                                    </SecondaryButton>
                                </Link>

                                <PrimaryButton
                                    onClick={() => setShowModal(true)}
                                >
                                    Create Session
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
                                                Session Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Start Time
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                End Time
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {seminar.sessions.map((session) => (
                                            <tr
                                                key={session.id}
                                                className="bg-gray-100"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    <Link
                                                        href={`/sessions/${session.slug}`}
                                                    >
                                                        {session.name}
                                                    </Link>
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {dayjs(session.date).format(
                                                        "DD/MM/YYYY"
                                                    )}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {session.start_time}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    {session.end_time}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 "
                                                >
                                                    $ {session.price}
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

export default ShowSeminar;
