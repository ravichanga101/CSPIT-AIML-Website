import LabDetailView from '@/components/LabDetailView';

export default function Lab325() {
    return (
        <LabDetailView
            number="325"
            title="Motorola Solutions Innovation Center"
            officialName="Motorola Solutions Innovation Center"
            subtitle="Department of Artificial Intelligence & Machine Learning · CSPIT"
            totalPCs={40}
            equipment={[
                {
                    name: "HP ProOne 400 G6 24 All-in-One Desktop",
                    specs: "Intel(R) Core(TM) i5-10500 CPU @ 3.10GHz, 3096 Mhz, 6 Core(s), 12 Logical Processor(s), 16 GB DDR-4, 1 TB HDD, HP OPTICAL MOUSE & KEYBOARD",
                    year: "2022",
                    qty: 40,
                    type: "All-in-One Workstation",
                    icon: "fa-desktop"
                },
                {
                    name: "ViewSonic Interactive Flat Panel Model IFP 8652-1B",
                    specs: "Equipped with OPS PC and Presentoo Stand for collaborative research and seminar sessions",
                    year: "2023",
                    qty: 1,
                    type: "Interactive Flat Panel",
                    icon: "fa-tv"
                }
            ]}
        />
    );
}
