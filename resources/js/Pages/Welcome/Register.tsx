import RegistrationDetail from "@/Components/RegistrationDetail";
import { useStore } from "@/store/store";
import { Head, router } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";

const Register = ({
    genders,
    countries,
}: {
    genders: string[];
    countries: string[];
}) => {
    const {
        sessions,
        addCompany,
        addTrainees,
        company,
        trainees: storeTrainees,
    } = useStore();

    const [trainees, setTrainees] = useState(
        storeTrainees || [
            {
                name: "",
                email: "",
                phone: "",
                functie: "",
                gender: "",
                sector: "",
            },
        ]
    );

    const [companyName, setCompanyName] = useState(company?.company_name ?? "");
    const [companyEmail, setCompanyEmail] = useState(
        company?.company_email ?? ""
    );
    const [companyPhone, setCompanyPhone] = useState(
        company?.company_phone ?? ""
    );
    const [companyAddress, setCompanyAddress] = useState(
        company?.company_address ?? ""
    );
    const [companyPostCode, setCompanyPostCode] = useState(
        company?.company_post_code ?? ""
    );
    const [companyCity, setCompanyCity] = useState(company?.company_city ?? "");
    const [companyCountry, setCompanyCountry] = useState(
        company?.company_country ?? ""
    );
    const [companyVatNumber, setCompanyVatNumber] = useState(
        company?.company_vat_number ?? ""
    );
    const [companyBusinessNumber, setCompanyBusinessNumber] = useState(
        company?.company_business_number ?? ""
    );
    const [companyBillingName, setCompanyBillingName] = useState(
        company?.company_billing_name ?? ""
    );
    const [companyBillingEmail, setCompanyBillingEmail] = useState(
        company?.company_billing_email ?? ""
    );
    const [companyBillingVatNumber, setCompanyBillingVatNumber] = useState(
        company?.company_billing_vat_number ?? ""
    );
    const [companyBillingBusinessNumber, setCompanyBillingBusinessNumber] =
        useState(company?.company_billing_business_number ?? "");
    const [companyBillingAddress, setCompanyBillingAddress] = useState(
        company?.company_billing_address ?? ""
    );
    const [companyBillingPostCode, setCompanyBillingPostCode] = useState(
        company?.company_billing_post_code ?? ""
    );
    const [companyBillingCity, setCompanyBillingCity] = useState(
        company?.company_billing_city ?? ""
    );
    const [companyBillingCountry, setCompanyBillingCountry] = useState(
        company?.company_billing_country ?? ""
    );
    const [companyRemarks, setCompanyRemarks] = useState(
        company?.company_remarks ?? ""
    );

    const [confirmRegistration, setConfirmRegistration] = useState(false);

    const handleNext = () => {
        setConfirmRegistration(true);
        addCompany({
            company_name: companyName,
            company_email: companyEmail,
            company_phone: companyPhone,
            company_address: companyAddress,
            company_post_code: companyPostCode,
            company_city: companyCity,
            company_country: companyCountry,
            company_vat_number: companyVatNumber,
            company_business_number: companyBusinessNumber,
            company_billing_name: companyBillingName,
            company_billing_email: companyBillingEmail,
            company_billing_vat_number: companyBillingVatNumber,
            company_billing_business_number: companyBillingBusinessNumber,
            company_billing_address: companyBillingAddress,
            company_billing_post_code: companyBillingPostCode,
            company_billing_city: companyBillingCity,
            company_billing_country: companyBillingCountry,
            company_remarks: companyRemarks,
        });

        addTrainees(trainees);
    };

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();

        if (sessions.length > 0 && storeTrainees.length > 0) {
            router.post(
                "/register/trainees",
                {
                    company_name: companyName,
                    company_email: companyEmail,
                    company_phone: companyPhone,
                    company_address: companyAddress,
                    company_post_code: companyPostCode,
                    company_city: companyCity,
                    company_country: companyCountry,
                    company_vat_number: companyVatNumber,
                    company_business_number: companyBusinessNumber,
                    company_billing_name: companyBillingName,
                    company_billing_email: companyBillingEmail,
                    company_billing_vat_number: companyBillingVatNumber,
                    company_billing_business_number:
                        companyBillingBusinessNumber,
                    company_billing_address: companyBillingAddress,
                    company_billing_post_code: companyBillingPostCode,
                    company_billing_city: companyBillingCity,
                    company_billing_country: companyBillingCountry,
                    company_remarks: companyRemarks,
                    trainees,
                    sessions: sessions.map((session) => session.id),
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                    replace: true,
                }
            );
        } else {
            setConfirmRegistration(false);
        }
    };

    const addTrainee = () => {
        const newTrainees = [
            ...trainees,
            {
                name: "",
                email: "",
                phone: "",
                functie: "",
                gender: "",
                sector: "",
            },
        ];

        setTrainees(newTrainees);
    };

    return (
        <div className="px-16 py-4 bg-light">
            <Head title="Registration" />
            <h2 className="text-primary font-semibold tracking-wide leading-7 text-xl">
                Registration
            </h2>

            <form onSubmit={submitHandler}>
                {!confirmRegistration ? (
                    <>
                        <h4 className="mt-4 text-primary font-semibold tracking-wide leading-7">
                            Company
                        </h4>

                        <div className="px-8 pt-4 pb-8 rounded-md  bg-tertiary">
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyName`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id={`companyName`}
                                        value={companyName}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyName(e.target.value)
                                        }
                                        autoComplete="off"
                                        required
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyEmail`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id={`companyEmail`}
                                        value={companyEmail}
                                        type="email"
                                        onChange={(e) =>
                                            setCompanyEmail(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyPhone`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        id={`companyPhone`}
                                        value={companyPhone}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyPhone(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyAddress`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Address
                                    </label>
                                    <input
                                        id={`companyAddress`}
                                        value={companyAddress}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyAddress(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyPostCode`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Post Code
                                    </label>
                                    <input
                                        id={`companyPostCode`}
                                        value={companyPostCode}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyPostCode(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyCity`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        City
                                    </label>
                                    <input
                                        id={`companyCity`}
                                        value={companyCity}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyCity(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyCountry`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Country
                                    </label>
                                    <select
                                        id={`companyCountry`}
                                        value={companyCountry}
                                        onChange={(e) =>
                                            setCompanyCountry(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country) => (
                                            <option
                                                key={country}
                                                value={country}
                                            >
                                                {country[0].toUpperCase() +
                                                    country.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyVatNumber`}
                                        className="text-primary font-semibold text-sm tracking-wide"
                                    >
                                        VAT Number
                                    </label>
                                    <input
                                        id={`companyVatNumber`}
                                        value={companyVatNumber}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyVatNumber(e.target.value)
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBusinessNumber`}
                                        className="text-primary font-semibold text-sm tracking-wide"
                                    >
                                        Business number
                                    </label>
                                    <input
                                        id={`companyBusinessNumber`}
                                        value={companyBusinessNumber}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBusinessNumber(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingName`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Billing Name
                                    </label>
                                    <input
                                        id={`companyBillingName`}
                                        value={companyBillingName}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBillingName(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingEmail`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Billing Email
                                    </label>
                                    <input
                                        id={`companyBillingEmail`}
                                        value={companyBillingEmail}
                                        type="email"
                                        onChange={(e) =>
                                            setCompanyBillingEmail(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingVatNumber`}
                                        className="text-primary font-semibold text-sm tracking-wide"
                                    >
                                        Billing VAT Number
                                    </label>
                                    <input
                                        id={`companyBillingVatNumber`}
                                        value={companyBillingVatNumber}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBillingVatNumber(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingBusinessNumber`}
                                        className="text-primary font-semibold text-sm tracking-wide"
                                    >
                                        Billing Business Number
                                    </label>
                                    <input
                                        id={`companyBillingBusinessNumber`}
                                        value={companyBillingBusinessNumber}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBillingBusinessNumber(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingAddress`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Billing Address
                                    </label>
                                    <input
                                        id={`companyBillingAddress`}
                                        value={companyBillingAddress}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBillingAddress(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingPostCode`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Billing Post Code
                                    </label>
                                    <input
                                        id={`companyBillingPostCode`}
                                        value={companyBillingPostCode}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBillingPostCode(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-8 mt-4">
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingCity`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Billing City
                                    </label>
                                    <input
                                        id={`companyBillingCity`}
                                        value={companyBillingCity}
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyBillingCity(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col">
                                    <label
                                        htmlFor={`companyBillingCountry`}
                                        className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                    >
                                        Billing Country
                                    </label>
                                    <select
                                        id={`companyBillingCountry`}
                                        value={companyBillingCountry}
                                        onChange={(e) =>
                                            setCompanyBillingCountry(
                                                e.target.value
                                            )
                                        }
                                        autoComplete="off"
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country) => (
                                            <option
                                                key={country}
                                                value={country}
                                            >
                                                {country[0].toUpperCase() +
                                                    country.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-2 mt-4">
                                <div className="col-span-12 flex flex-col">
                                    <label
                                        htmlFor={`companyRemarks`}
                                        className="text-primary font-semibold text-sm tracking-wide"
                                    >
                                        Remarks
                                    </label>
                                    <textarea
                                        id={`companyRemarks`}
                                        value={companyRemarks}
                                        onChange={(e) =>
                                            setCompanyRemarks(e.target.value)
                                        }
                                        className="border-none outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-4 text-primary font-semibold tracking-wide leading-7">
                            Trainees
                        </h4>

                        {trainees.map((trainee, index) => (
                            <div
                                key={index}
                                className="mb-4  p-8 bg-tertiary rounded-md"
                            >
                                <div className="grid grid-cols-12 gap-8">
                                    <div className="col-span-6 flex flex-col">
                                        <label
                                            htmlFor={`name-${index}`}
                                            className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id={`name-${index}`}
                                            value={trainee.name}
                                            type="text"
                                            name="name"
                                            onChange={(e) => {
                                                const newTrainees = [
                                                    ...trainees,
                                                ];

                                                newTrainees[index].name =
                                                    e.target.value;
                                                setTrainees(newTrainees);
                                            }}
                                            autoComplete="name"
                                            className="border-none outline-none focus:ring-0 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 flex flex-col">
                                        <label
                                            htmlFor={`email-${index}`}
                                            className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id={`email-${index}`}
                                            value={trainee.email}
                                            type="email"
                                            name="email"
                                            onChange={(e) => {
                                                const newTrainees = [
                                                    ...trainees,
                                                ];

                                                newTrainees[index].email =
                                                    e.target.value;
                                                setTrainees(newTrainees);
                                            }}
                                            autoComplete="off"
                                            className="border-none outline-none focus:ring-0 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-8 mt-4">
                                    <div className="col-span-6 flex flex-col">
                                        <label
                                            htmlFor={`phone-${index}`}
                                            className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            id={`phone-${index}`}
                                            value={trainee.phone}
                                            type="text"
                                            name="phone"
                                            onChange={(e) => {
                                                const newTrainees = [
                                                    ...trainees,
                                                ];

                                                newTrainees[index].phone =
                                                    e.target.value;
                                                setTrainees(newTrainees);
                                            }}
                                            autoComplete="off"
                                            className="border-none outline-none focus:ring-0 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 flex flex-col">
                                        <label
                                            htmlFor={`functie-${index}`}
                                            className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                        >
                                            Functie
                                        </label>
                                        <input
                                            id={`functie-${index}`}
                                            value={trainee.functie}
                                            type="text"
                                            name="functie"
                                            onChange={(e) => {
                                                const newTrainees = [
                                                    ...trainees,
                                                ];

                                                newTrainees[index].functie =
                                                    e.target.value;
                                                setTrainees(newTrainees);
                                            }}
                                            className="border-none outline-none focus:ring-0 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-8 mt-4">
                                    <div className="col-span-6 flex flex-col">
                                        <label
                                            htmlFor={`gender-${index}`}
                                            className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                        >
                                            Gender
                                        </label>
                                        <select
                                            id={`gender-${index}`}
                                            value={trainee.gender}
                                            name="gender"
                                            onChange={(e) => {
                                                const newTrainees = [
                                                    ...trainees,
                                                ];

                                                newTrainees[index].gender =
                                                    e.target.value;
                                                setTrainees(newTrainees);
                                            }}
                                            className="border-none outline-none focus:ring-0 rounded-md"
                                        >
                                            <option value="">
                                                Select Gender
                                            </option>
                                            {genders.map((gender) => (
                                                <option
                                                    key={gender}
                                                    value={gender}
                                                >
                                                    {" "}
                                                    {gender[0].toUpperCase() +
                                                        gender.slice(1)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-span-6 flex flex-col">
                                        <label
                                            htmlFor={`sector-${index}`}
                                            className="text-primary after:content-['*'] after:text-red-600 font-semibold text-sm tracking-wide"
                                        >
                                            Sector
                                        </label>
                                        <input
                                            id={`sector-${index}`}
                                            value={trainee.sector}
                                            type="text"
                                            name="sector"
                                            onChange={(e) => {
                                                const newTrainees = [
                                                    ...trainees,
                                                ];

                                                newTrainees[index].sector =
                                                    e.target.value;
                                                setTrainees(newTrainees);
                                            }}
                                            className="border-none outline-none focus:ring-0 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <RegistrationDetail />
                )}

                <div className="my-4 flex justify-between">
                    {confirmRegistration ? (
                        <>
                            <button
                                type="submit"
                                className="border border-primary px-2 py-1"
                            >
                                Submit
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={addTrainee} type="button">
                                Add trainee
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="border border-primary px-2 py-1"
                            >
                                Next
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Register;
