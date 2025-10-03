import { useRouter } from "next/router";
import { clientSmartComponentMap } from "../../components/smart-components";

export default function SmartComponentPreview() {
  const router = useRouter();

  const { id, attrs } = router.query;

  const decodedAttrs =
    attrs && typeof attrs === "string"
      ? JSON.parse(Buffer.from(attrs, "base64").toString())
      : {};

  const SmartComponent = id
    ? clientSmartComponentMap[
        id.toString() as keyof typeof clientSmartComponentMap
      ]?.reactComponent
    : null;

  return (
    <div>
      {SmartComponent ? (
        <div>
          <SmartComponent {...decodedAttrs} />
        </div>
      ) : (
        <div>Component not found</div>
      )}
    </div>
  );
}
