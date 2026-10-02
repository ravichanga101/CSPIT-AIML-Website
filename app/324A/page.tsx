import LabDetailView from '@/components/LabDetailView';

export default function Lab324A() {
    return (
        <LabDetailView
            number="324-A"
            title="Data Engineering Lab"
            officialName="AI & ML Lab - 01"
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
                    specs: "Equipped with OPS PC and Presentoo Stand for data visualisations and lectures",
                    year: "2024",
                    qty: 1,
                    type: "Interactive Flat Panel",
                    icon: "fa-tv"
                },
                {
                    name: "Sarthi DLC (Stabilizer) DPC 0.5KVA DPC",
                    specs: "Power conditioning & line stabilization unit",
                    year: "2024",
                    qty: 1,
                    type: "Stabilizer",
                    icon: "fa-bolt"
                },
                {
                    name: "Cisco - C9200L-24T-4G Network Switch",
                    specs: "High throughput enterprise 24-port Gigabit Ethernet switch",
                    year: "2024",
                    qty: 2,
                    type: "Network Switch",
                    icon: "fa-sitemap"
                }
            ]}
        />
    );
}
