export const base = import.meta.env.BASE_URL;

export const site = {
    name: 'Valley Line Plumbing Co.',
    shortName: 'Valley Line',
    tagline: 'PLUMBING CO.',
    phone: '(559) 555-0100',
    phoneHref: 'tel:+15595550100',
    email: 'hello@valleylineplumbing.com',
    address: {
        line1: '1200 Industrial Way',
        line2: 'Fresno, CA 93725',
    },
    license: 'License #C36-000000',
    hours: {
        weekdays: 'Mon–Fri: 7am–7pm',
        saturday: 'Saturday: 8am–5pm',
        sunday: 'Sunday: By appointment',
    },
    defaultDescription:
        'Family-owned plumbing serving Fresno, Clovis, Visalia and the surrounding Central Valley since 1998. Licensed, insured, upfront pricing.',
};

export const navLinks = [
    { href: `${base}`, label: 'HOME', key: 'home' },
    { href: `${base}services`, label: 'SERVICES', key: 'services' },
    { href: `${base}about`, label: 'ABOUT', key: 'about' },
    { href: `${base}service-areas`, label: 'SERVICE AREAS', key: 'areas' },
];

export const footerLinks = [
    { href: `${base}`, label: 'Home' },
    { href: `${base}services`, label: 'Services' },
    { href: `${base}about`, label: 'About' },
    { href: `${base}service-areas`, label: 'Service Areas' },
    { href: `${base}contact`, label: 'Contact' },
];
