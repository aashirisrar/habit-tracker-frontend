import HeatMapComponent from "@/components/heat-map";

interface ActivityDetailsInterface {
  id: number;
  title: string;
  details: string;
  values: [];
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
      className="flex flex-col gap-3 bg-primary-foreground rounded-lg p-3"
    >
      <div>{title}</div>
      <div>{details}</div>
      <div>
        <HeatMapComponent value={values} />
      </div>
    </div>
  );
};

export default ActivityDetailsPage;
