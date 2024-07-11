import Link from "next/link";

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
  return (
    <Link href={"/activity/" + id}>
      <div className="bg-secondary p-3 rounded-lg hover:bg-primary-foreground">
        <div>{title}</div>
        <div>{details}</div>
      </div>
    </Link>
  );
};

export default ActivityComponent;
