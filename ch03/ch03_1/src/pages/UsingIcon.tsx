import { Icon } from "../components";

export default function UsingIcon() {
  return (
    <div>
      <Icon name="home" style={{ color: "blue" }} />
      <Icon
        name="check_circle_outline"
        style={{ fontSize: "50px", color: "red" }}
      />
    </div>
  );
}
