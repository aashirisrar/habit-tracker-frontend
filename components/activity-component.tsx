import { ActivityComponentInterface } from "@/types/route";
import Link from "next/link";

const ActivityComponent = ({
  id,
  title,
  details,
}: ActivityComponentInterface) => {
  return (
    <Link href={"/activity/" + id}>
      <div className="flex items-center justify-start gap-3 bg-secondary p-3 rounded-lg hover:bg-primary-foreground">
        <div className="text-xl">{details}</div>
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default ActivityComponent;
