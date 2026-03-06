'use client';

import Image from 'next/image';
import { Heart, Users, Briefcase, TrendingUp, Phone, Mail, MessageCircle, MapPin, Clock, Home as HomeIcon, Activity } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';

const Page = () => {
    const services = [
        {
            icon: Heart,
            title: 'Individuele begeleiding en verpleegkundige zorg',
            description: 'Professionele verpleegkundige zorg op maat, afgestemd op uw persoonlijke behoeften en situatie.'
        },
        {
            icon: Briefcase,
            title: 'Praktische hulp',
            description: 'Ondersteuning bij financiën, administratie en het regelen van afspraken voor een zorgeloos leven.'
        },
        {
            icon: Users,
            title: 'Sociaal-emotionele ondersteuning',
            description: 'Luisterend oor en emotionele begeleiding om u te helpen bij persoonlijke uitdagingen.'
        },
        {
            icon: TrendingUp,
            title: 'Coaching en persoonlijke ontwikkeling',
            description: 'Begeleiding gericht op groei, zelfredzaamheid en het behalen van uw persoonlijke doelen.'
        }
    ];

    const locations = [
        { name: 'Amsterdam', icon: MapPin },
        { name: 'Amstelveen', icon: MapPin },
        { name: 'Haarlem', icon: MapPin },
        { name: 'Hoofddorp', icon: MapPin }
    ];

    const faqs = [
        {
            question: 'Wat is Hart aan Huis?',
            answer: 'Hart aan Huis biedt persoonlijke thuiszorg en begeleiding met aandacht, vertrouwen en warmte. Wij ondersteunen mensen bij het behouden van hun zelfstandigheid en welzijn in hun eigen vertrouwde omgeving.'
        },
        {
            question: 'Voor wie is de begeleiding bedoeld?',
            answer: 'Onze begeleiding is bedoeld voor iedereen die ondersteuning nodig heeft bij dagelijkse activiteiten, verpleegkundige zorg, emotionele begeleiding of praktische hulp. Of u nu jong of oud bent, wij stemmen onze zorg af op uw persoonlijke situatie.'
        },
        {
            question: 'Hoe kan ik mij aanmelden?',
            answer: 'U kunt contact met ons opnemen via telefoon, email of WhatsApp. Wij plannen dan een kennismakingsgesprek in om uw behoeften te bespreken en te kijken hoe wij u het beste kunnen ondersteunen.'
        },
        {
            question: 'Welke soorten ondersteuning bieden jullie?',
            answer: 'Wij bieden individuele begeleiding, verpleegkundige zorg, praktische hulp bij administratie en financiën, sociaal-emotionele ondersteuning, en coaching voor persoonlijke ontwikkeling. Alle zorg wordt op maat afgestemd op uw situatie.'
        }
    ];

    return (
        <>
            <Navigation />

            <section id="home" className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover">
                    <source src="/images/hartaanhuis.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#E89355]/70 via-[#B47038]/60 to-black/30" />
                
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <Image
                        src="/images/Logohartaanhuis.png"
                        alt="Hart aan Huis Logo"
                        width={960}
                        height={360}
                        className="mx-auto mb-8 w-auto h-72 max-w-full object-contain"
                        priority
                    />
                    <p className="text-xl md:text-2xl mb-8 font-light">
                        Persoonlijke thuiszorg en begeleiding met aandacht, vertrouwen en warmte.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-[#E89355] hover:bg-[#B47038] text-white text-lg px-8 py-6"
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Neem contact op
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
                            onClick={() => document.querySelector('#diensten')?.scrollIntoView({ behavior: 'smooth' })}>
                            Meer informatie
                        </Button>
                    </div>
                </div>
            </section>

            <section id="welkom" className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <Image
                            src="/images/welkom.png"
                            alt="Warm welkom bij Hart aan Huis"
                            width={640}
                            height={640}
                            className="w-full h-auto object-cover rounded-3xl"
                        />
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl text-[#B47038] mb-6">
                                Welkom bij Hart aan Huis
                            </h2>
                            <div className="space-y-6 text-[#B47038] text-lg leading-relaxed">
                                <p>
                                    Bij Hart aan Huis draait alles om persoonlijke aandacht.
                                    Samen creëren we een veilige omgeving waarin cliënten zich gehoord en gesteund voelen.
                                </p>
                                <p>
                                    Vertrouwen speelt hierbij een belangrijke rol.
                                    Of het nu gaat om praktische hulp, verpleegkundige zorg of emotionele ondersteuning, ik ben er om te begeleiden en ondersteunen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="diensten" className="relative py-12 md:py-20 bg-[#E89355] overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/bloemenoverlay.png')" }}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-12 text-center">
                        Onze Diensten
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <Card key={index} className="bg-white/95 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardContent className="p-8">
                                    <service.icon className="w-12 h-12 text-[#B47038] mb-4" />
                                    <h3 className="font-heading text-2xl text-[#B47038] mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="persoonlijke-aandacht" className="py-12 md:py-20 bg-[#7C8147]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-12 text-center">
                        Jouw persoonlijke aandacht aan huis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Clock, text: 'Dagelijkse routines' },
                            { icon: Activity, text: 'Verpleegkundige zorg' },
                            { icon: Briefcase, text: 'Administratieve hulp' },
                            { icon: Heart, text: 'Psychische begeleiding' },
                            { icon: Users, text: 'Dagbesteding en activiteiten' },
                            { icon: HomeIcon, text: 'Thuisondersteuning' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                <item.icon className="w-8 h-8 text-white flex-shrink-0" />
                                <span className="text-white text-lg">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="over-mij" className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <Image
                                src="/images/Marissa.png"
                                alt="Marissa - Hart aan Huis"
                                width={600}
                                height={800}
                                className="rounded-2xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-heading text-4xl md:text-5xl text-[#B47038] mb-6">
                                Over Mij
                            </h2>
                            <div className="space-y-4 text-[#B47038] text-lg leading-relaxed">
                                <p>
                                    Mijn naam is Marissa.
                                    Met een achtergrond in verpleegkundige zorg en thuisbegeleiding help ik mensen om weer rust, structuur en vertrouwen in hun leven te krijgen.
                                </p>
                                <p>
                                    Mijn doel is om cliënten te ondersteunen zodat zij zoveel mogelijk zelf de regie over hun leven behouden.
                                </p>
                                <p>
                                    Met warmte, geduld en professionaliteit begeleid ik u naar een betere balans in uw dagelijks leven.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="locaties" className="relative py-12 md:py-20 bg-[#E89355] overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/bloemenoverlay.png')" }}
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-12 text-center">
                        Werkgebied
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locations.map((location, index) => (
                            <Card key={index} className="bg-white/95 backdrop-blur-sm border-none shadow-lg">
                                <CardContent className="p-8 flex items-center gap-4">
                                    <location.icon className="w-8 h-8 text-[#B47038] flex-shrink-0" />
                                    <h3 className="font-heading text-xl text-[#B47038]">
                                        {location.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="py-12 md:py-20 bg-[#7C8147]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-12 text-center">
                        Veelgestelde vragen
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white/95 backdrop-blur-sm rounded-lg px-6 border-none">
                                <AccordionTrigger className="text-[#B47038] font-heading text-xl hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 text-lg leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section id="contact" className="py-6 md:py-10 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-heading text-4xl md:text-5xl text-[#B47038]">
                                Neem contact op
                            </h2>
                            <p className="text-[#B47038] text-lg">
                                Ben je op zoek naar begeleiding of heb je vragen?
                                Neem gerust contact met mij op. Ik luister graag naar je verhaal en denk mee over passende ondersteuning.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="tel:+31612345678"
                                    className="flex items-center gap-4 text-[#B47038] hover:text-[#E89355] transition-colors">
                                    <Phone className="w-6 h-6" />
                                    <span className="text-lg">+31 6 1234 5678</span>
                                </a>
                                <a
                                    href="mailto:info@hartaanhuis.nl"
                                    className="flex items-center gap-4 text-[#B47038] hover:text-[#E89355] transition-colors">
                                    <Mail className="w-6 h-6" />
                                    <span className="text-lg">info@hartaanhuis.nl</span>
                                </a>
                                <a
                                    href="https://wa.me/31612345678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-[#B47038] hover:text-[#E89355] transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                    <span className="text-lg">WhatsApp</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full">
                            <Image
                                src="/images/marissacontact2.png"
                                alt="Marissa in gesprek"
                                width={640}
                                height={720}
                                className="w-full h-full max-h-[360px] md:max-h-[420px] object-contain rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Page;
