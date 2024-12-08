"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type Highcharts from 'highcharts';

const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

interface DefectData {
  name: string;
  value: number;
}

interface EggDefectPieVisualizerProps {
  defects: DefectData[];
}

const COLORS = ["#FF8A3D", "#FFD93D", "#1E2A4A", "#3B82F6", "#22C55E"];

export function EggDefectPieVisualizer({ defects }: EggDefectPieVisualizerProps) {
  const [HighchartsModule, setHighchartsModule] = useState<typeof Highcharts | null>(null);

  useEffect(() => {
    const loadHighcharts = async () => {
      const Highcharts = await import('highcharts');
      await import('highcharts/highcharts-3d');
      await import('highcharts/modules/exporting');
      await import('highcharts/modules/export-data');
      await import('highcharts/modules/accessibility');
      
      setHighchartsModule(Highcharts);
    };

    loadHighcharts();
  }, []);

  if (!HighchartsModule) {
    return <div className="w-full h-[400px] bg-white p-4 flex items-center justify-center">Loading chart...</div>;
  }

  const options: Highcharts.Options = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    },
    style: {
      fontFamily: 'Inter, sans-serif' 
    }
  },
  title: {
    text: undefined 
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 90,
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%',
        style: {
          fontFamily: 'Inter, sans-serif', 
          fontSize: '20px'
        }
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Defects',
    data: defects.map((defect, index) => ({
      name: defect.name,
      y: defect.value,
      color: COLORS[index % COLORS.length]
    }))
  }]
};

  return (
    <div className="w-full h-[400px] bg-white p-4">
      <HighchartsReact
        highcharts={HighchartsModule}
        options={options}
      />
    </div>
  );
}

