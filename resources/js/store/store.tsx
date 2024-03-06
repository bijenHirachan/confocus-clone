import { Session } from "@/Pages/Seminars/SeminarIndex";
import { ReactNode, createContext, useContext, useState } from "react";

type Company = {
    company_name: string;
    company_email: string;
    company_phone: string;
    company_address: string;
    company_post_code: string;
    company_city: string;
    company_country: string;
    company_vat_number?: string;
    company_business_number?: string;
    company_billing_name: string;
    company_billing_email: string;
    company_billing_vat_number: string;
    company_billing_business_number: string;
    company_billing_address: string;
    company_billing_post_code: string;
    company_billing_city: string;
    company_billing_country: string;
    company_remarks: string;
};

type Trainee = {
    name: string;
    email: string;
    phone: string;
    functie: string;
    gender: string;
    sector: string;
};

type StoreContextPorps = {
    sessions: Session[];
    toggleSession: (item: Session) => void;
    handleAllSessions: (items: Session[]) => void;
    company: Company | null;
    addCompany: (company: Company) => void;
    trainees: Trainee[];
    addTrainees: (trainees: Trainee[]) => void;
    addTrainee: (trainee: Trainee) => void;
    removeTrainee: (index: number) => void;
    resetAll: () => void;
};

const StoreContext = createContext<StoreContextPorps | null>(null);

export const StoreContextProvider = ({ children }: { children: ReactNode }) => {
    const [sessions, setSessions] = useState<Session[]>(() => {
        try {
            const confocusSessions = localStorage.getItem("confocus-sessions")!;

            return JSON.parse(confocusSessions)! || [];
        } catch (error) {
            return [];
        }
    });

    const [company, setCompany] = useState<Company | null>(() => {
        try {
            const confocusCompany = localStorage.getItem("confocus-company")!;

            return JSON.parse(confocusCompany) || null;
        } catch (error) {
            return null;
        }
    });

    const [trainees, setTrainees] = useState<Trainee[]>(() => {
        try {
            const confocusTrainees = localStorage.getItem("confocus-trainees")!;
            return JSON.parse(confocusTrainees) || [];
        } catch (error) {
            return [];
        }
    });

    const toggleSession = (item: Session) => {
        if (!sessions.map((sess) => sess.id).includes(item.id)) {
            setSessions((prev) => [item, ...prev]);
            localStorage.setItem(
                "confocus-sessions",
                JSON.stringify([item, ...sessions])
            );
        } else {
            let newSessions = sessions.filter((sess) => sess.id !== item.id);
            setSessions(newSessions);
            localStorage.setItem(
                "confocus-sessions",
                JSON.stringify(newSessions)
            );
        }
    };

    const addCompany = (com: Company) => {
        setCompany(com);
        localStorage.setItem("confocus-company", JSON.stringify(com));
    };

    const addTrainee = (trainee: Trainee) => {
        setTrainees((prev) => [...prev, trainee]);
        localStorage.setItem(
            "confocus-trainees",
            JSON.stringify([...trainees, trainee])
        );
    };

    const addTrainees = (ts: Trainee[]) => {
        setTrainees(ts);
        localStorage.setItem("confocus-trainees", JSON.stringify(ts));
    };

    const removeTrainee = (index: number) => {
        const newTrainees = trainees.filter((_, ind) => ind !== index);

        setTrainees(newTrainees);
        localStorage.setItem("confocus-trainees", JSON.stringify(newTrainees));
    };

    const handleAllSessions = (items: Session[]) => {
        if (
            sessions.some((sess) =>
                items.map((item) => item.id).includes(sess.id)
            )
        ) {
            const newSessions = sessions.filter(
                (sess) => !items.map((item) => item.id).includes(sess.id)
            );
            setSessions(newSessions);
            localStorage.setItem(
                "confocus-sessions",
                JSON.stringify(newSessions)
            );
        } else {
            const newSessions = [
                ...sessions,
                ...items.filter(
                    (item) => !sessions.map((sess) => sess.id).includes(item.id)
                ),
            ];
            setSessions(newSessions);
            localStorage.setItem(
                "confocus-sessions",
                JSON.stringify(newSessions)
            );
        }
    };

    const resetAll = () => {
        setSessions([]);
        setCompany(null);
        setTrainees([]);
        localStorage.removeItem("confocus-sessions");
        localStorage.removeItem("confocus-company");
        localStorage.removeItem("confocus-trainees");
    };

    return (
        <StoreContext.Provider
            value={{
                sessions,
                toggleSession,
                handleAllSessions,
                company,
                addCompany,
                trainees,
                addTrainees,
                addTrainee,
                removeTrainee,
                resetAll,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const storeConsumer = useContext(StoreContext);
    if (!storeConsumer) {
        throw new Error("Used out of provider");
    }
    return storeConsumer;
};
