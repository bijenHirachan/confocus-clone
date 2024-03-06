import { useStore } from "@/store/store";
import { RiDeleteBinLine } from "react-icons/ri";

const RegistrationDetail = () => {
    const { sessions, company, trainees, toggleSession, removeTrainee } =
        useStore();

    return (
        <div className="flex flex-col gap-4">
            {sessions.length > 0 ? (
                sessions.map((session) => (
                    <div
                        className="bg-tertiary p-4 rounded-md relative"
                        key={session.id}
                    >
                        <RiDeleteBinLine
                            onClick={() => toggleSession(session)}
                            size={20}
                            className="text-primary absolute top-4 cursor-pointer right-4 hover:opacity-60"
                        />
                        <h2>{session.name}</h2>
                        <p>{session.excerpt}</p>
                    </div>
                ))
            ) : (
                <h3 className="text-red-500 mt-4">
                    Please select at least one session to register!
                </h3>
            )}
            {company && (
                <div className="bg-tertiary p-4 rounded-md">
                    <h3 className="text-primary font-semibold text-lg tracking-wide leading-7 mb-2">
                        Company
                    </h3>
                    <div className="flex flex-col gap-2 tracking-wide leading-7">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">Name</div>
                            <div className="col-span-8">
                                {company.company_name}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Email
                            </div>
                            <div className="col-span-8">
                                {company.company_email}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Phone
                            </div>
                            <div className="col-span-8">
                                {company.company_phone}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Address
                            </div>
                            <div className="col-span-8">
                                {company.company_address},{" "}
                                {company.company_post_code}{" "}
                                {company.company_city} {company.company_country}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                VAT Number
                            </div>
                            <div className="col-span-8">
                                {company.company_vat_number ?? "N/A"}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Business Number
                            </div>
                            <div className="col-span-8">
                                {company.company_business_number ?? "N/A"}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-8">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Billing Name
                            </div>
                            <div className="col-span-8">
                                {company.company_billing_name}
                            </div>
                        </div>
                        <div className="grid grid-cols-12 tracking-wide leading-7">
                            <div className="col-span-4 font-semibold">
                                Billing Email
                            </div>
                            <div className="col-span-8">
                                {company.company_billing_email}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Billing VAT Number
                            </div>
                            <div className="col-span-8">
                                {company.company_billing_vat_number ?? "N/A"}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Billing Business Number
                            </div>
                            <div className="col-span-8">
                                {company.company_billing_business_number ??
                                    "N/A"}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Billing Address
                            </div>
                            <div className="col-span-8">
                                {company.company_billing_address},{" "}
                                {company.company_billing_post_code}{" "}
                                {company.company_billing_city}{" "}
                                {company.company_billing_country}
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 font-semibold">
                                Remarks
                            </div>
                            <div className="col-span-8">
                                {company.company_remarks}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {trainees.length > 0 ? (
                <div className="bg-tertiary p-4 rounded-md">
                    <h3 className="text-primary font-semibold text-lg tracking-wide leading-7 mb-2">
                        Trainees
                    </h3>
                    {trainees.map((trainee, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 border border-primary mb-2 p-4 rounded-md relative"
                        >
                            <RiDeleteBinLine
                                onClick={() => removeTrainee(index)}
                                size={20}
                                className="text-primary absolute top-4 right-4 cursor-pointer hover:opacity-50"
                            />
                            <div className="col-span-4 font-semibold">
                                {trainee.name}
                            </div>
                            <div className="col-span-4 text-blue-600 underline">
                                {trainee.email}
                            </div>
                            <div className="col-span-4">{trainee.phone}</div>
                            <div className="col-span-4">{trainee.functie}</div>
                            <div className="col-span-4">{trainee.gender}</div>
                            <div className="col-span-4">{trainee.sector}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className="text-red-500 mt-4">
                    At least one trainee is required to register!
                </h3>
            )}
        </div>
    );
};

export default RegistrationDetail;
