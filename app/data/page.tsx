// app/data/page.tsx or any page
import DataCard from '../../components/DataCard';

const DataPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Data Display</h1>
      <DataCard />
    </div>
  );
};

export default DataPage;