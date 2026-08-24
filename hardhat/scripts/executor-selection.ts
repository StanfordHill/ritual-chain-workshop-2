type Service = {
  name: string;
  capability: string;
  available: boolean;
};

const services: Service[] = [
  {
    name: "service-a",
    capability: "HTTP_CALL",
    available: false,
  },
  {
    name: "service-b",
    capability: "HTTP_CALL",
    available: true,
  },
  {
    name: "service-c",
    capability: "JSON_PARSE",
    available: true,
  },
];

function findService(
  capability: string,
): Service | undefined {
  return services.find(
    (service) =>
      service.available &&
      service.capability === capability,
  );
}

console.log("Available services");
console.log("===================");

for (const service of services) {
  console.log(
    service.name,
    service.capability,
    service.available
      ? "available"
      : "unavailable",
  );
}

console.log("");

const selected =
  findService("HTTP_CALL");

console.log(
  "Selected HTTP service:",
  selected?.name ?? "none",
);
