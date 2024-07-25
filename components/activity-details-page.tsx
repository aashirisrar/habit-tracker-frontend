import HeatMapComponent from "@/components/heat-map";

interface ActivityDetailsInterface {
  id: number;
  title: string;
  details: string;
  values: [] | never[];
}

const ActivityDetailsPage = ({
  id,
  title,
  details,
  values,
}: ActivityDetailsInterface) => {
  return (
    <div
      key={id}
      className="flex flex-col gap-5 bg-primary-foreground rounded-lg p-4"
    >
      <div className="flex items-center justify-center gap-3">
        <div className="text-xl">{details}</div>
        <div className="text-lg">{title}</div>
      </div>
      <div>
        <HeatMapComponent values={values} />
      </div>
    </div>
  );
};

export default ActivityDetailsPage;
