// src/components/Charts.tsx: Render various charts (pie for categories, line for trends)
import { LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis } from 'recharts';

export default function Charts({ data }: {  any }) {
  // Assuming data.monthly = [{ month: 'Jan', amount: 100 }, ...]
  return (
    <>
      <LineChart width={400} height={300} data={data.monthly}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
      {/* Pie chart for categories similarly */}
    </>
  );
}
