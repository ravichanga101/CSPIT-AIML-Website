import LabDetailView from '@/components/LabDetailView';

export default function Lab323B() {
    return (
        <LabDetailView
            number="323-B"
            title="Mobile and Web Development Lab"
            officialName="AI & ML Lab - 04"
            subtitle="Department of Artificial Intelligence & Machine Learning · CSPIT"
            totalPCs={40}
            equipment={[
                {
                    name: "HP ProOne 440 23.8 inch G9 All-in-One Desktop PC",
                    specs: "13th Gen Intel(R) Core(TM) i7-13700, 2100Mhz, 16 Core(s), 24 Logical Processor(s), 16 GB DDR-5, 1 TB NVME SSD, HP OPTICAL MOUSE & KEYBOARD",
                    year: "2024",
                    qty: 40,
                    type: "All-in-One Workstation",
                    icon: "fa-desktop"
                },
                {
                    name: "ViewSonic Interactive Flat Panel Model IFP 8652-1B",
                    specs: "Equipped with OPS PC and Presentoo Stand for app demonstrations & project showcases",
                    year: "2024",
                    qty: 1,
                    type: "Interactive Flat Panel",
                    icon: "fa-tv"
                }
            ]}
        />
    );
}
