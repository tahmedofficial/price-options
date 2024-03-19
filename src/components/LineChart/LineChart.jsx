import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentsData = [
        { "id": 1, "name": "John Smith", "math": 85, "physics": 78, "chemistry": 90 },
        { "id": 2, "name": "Emily Brown", "math": 78, "physics": 85, "chemistry": 82 },
        { "id": 3, "name": "Michael Lee", "math": 92, "physics": 88, "chemistry": 94 },
        { "id": 4, "name": "Emma Johnson", "math": 65, "physics": 70, "chemistry": 68 },
        { "id": 5, "name": "James Davis", "math": 70, "physics": 65, "chemistry": 72 },
        { "id": 6, "name": "Olivia Wilson", "math": 88, "physics": 82, "chemistry": 90 },
        { "id": 7, "name": "William Taylor", "math": 75, "physics": 72, "chemistry": 78 },
        { "id": 8, "name": "Sophia Martinez", "math": 80, "physics": 85, "chemistry": 84 },
        { "id": 9, "name": "Benjamin Anderson", "math": 95, "physics": 92, "chemistry": 98 },
        { "id": 10, "name": "Isabella Thomas", "math": 82, "physics": 78, "chemistry": 85 }
    ]


    return (
        <div>
            <LChart width={500} height={400} data={studentsData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey={"physics"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;