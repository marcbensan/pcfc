import Baptism from "./_components/baptism";
import ConnectGroup from "./_components/connect-group";
import Discipleship from "./_components/discipleship";
import Ministries from "./_components/ministries";

export default function SermonsPage(): JSX.Element {
  return (
    <>
      <Ministries />
      <ConnectGroup />
      <Discipleship />
      <Baptism />
    </>
  );
}
