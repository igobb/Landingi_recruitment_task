export interface ChartData {
    labels: string[];
    datasets: [
      {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
      },
      {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
      }
    ];
  }