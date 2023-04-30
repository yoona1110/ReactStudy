import { Icon } from "../components";

export default function UsingIconWithCSSClass() {
  return (
    <div>
      <Icon name="home" className="text-blue" />
      <Icon
        name="check-circle-outline"
        className="text-red"
        style={{ fontSize: "50px" }}
      />
    </div>
  );
}
