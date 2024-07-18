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
      className="flex flex-col gap-3 bg-primary-foreground rounded-lg p-4"
    >
      <div>{title}</div>
      <div>{details}</div>
      <div>
        <HeatMapComponent values={values} />
      </div>
    </div>
  );
};

export default ActivityDetailsPage;
