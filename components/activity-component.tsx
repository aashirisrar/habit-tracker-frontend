interface ActivityComponentInterface {
  id: number;
  title: string;
  details: string;
}

const ActivityComponent = ({
  id,
  title,
  details,
}: ActivityComponentInterface) => {
  return <div className="">{id}</div>;
};

export default ActivityComponent;
