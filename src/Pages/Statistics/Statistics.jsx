import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';


const Statistics = () => {

    
    const data = [
        { name: 'Total Donation', value: 66.6 },
        { name: 'Your Donation', value: 33.3 },
      ];

    return (
        <div>
            <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
        </div>
    );
};

export default Statistics;