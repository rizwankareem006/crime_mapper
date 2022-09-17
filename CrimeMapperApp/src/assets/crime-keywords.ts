export let crimes: {
    [key: string]: {
        [key: string]: boolean
    }
} = {
    violent: {
        rape: false,
        murder: false,
        terrorism: false,
        kidnapping: false,
        assault: false,
        sexual_harassment: false,
        sexual_assault: false,
        homicide: false,
        gunshot: false,
        intentional_killing_peoples: false,
        shootout: false,
        gang_rape: false,
        attempt_to_murder: false,
        sexual_abuse: false,
        putting_to_death: false
    },
    drug: {
        drug_trafficking: false,
        drug_dealing: false,
        drugs_smuggling: false,
        narcotics: false,
        drugs: false,
        alcohol: false
    },
    commercial: {
        official_document_forgery: false,
        currency_forgery: false,
        official_seal_forgery: false,
        official_stamp_forgery: false,
        bribery: false,
        counterfeiting: false,
        cheating: false
    },
    property: {
        arson: false,
        motor_vehicle_theft: false,
        theft: false,
        burglary: false,
        robbery: false,
        riots: false,
        criminal: false,
        breach_of_trust: false,
        stealing: false,
        barrage_fire: false,
        bombardment: false,
        electric_battery: false,
        shelling: false,
        looting: false,
        embezzlement: false,
        trespass: false,
        incendiarism: false,
        shoplifting: false,
        vandalism: false
    },
    traffic: {
        speeding: false,
        signal_jump: false,
        running_a_red_light: false,
        drunk_and_drive: false
    },
    other: {
        prostitution: false,
        illegal_gambling: false,
        adultery: false,
        homosexuality: false,
        weapons: false,
        violation: false,
        offense_involving_children: false,
        public_peace_violation: false,
        stalking: false,
        cheating: false,
        hurt: false,
        counterfeiting: false,
        dowry_deaths: false,
        outrage_her_modesty: false,
        causing_death_by_negligence: false,
        suicide: false,
        criminal_damage: false
    }
}
