import { expect } from "chai";

type Executor = {
  address: string;
  healthy: boolean;
  capability: string;
};

function selectExecutor(
  executors: Executor[],
  capability: string,
): Executor | undefined {
  return executors.find(
    (executor) =>
      executor.healthy &&
      executor.capability === capability,
  );
}

describe("TEE executor selection", function () {
  const executors: Executor[] = [
    {
      address: "executor-1",
      healthy: false,
      capability: "HTTP_CALL",
    },
    {
      address: "executor-2",
      healthy: true,
      capability: "HTTP_CALL",
    },
    {
      address: "executor-3",
      healthy: true,
      capability: "OTHER",
    },
  ];

  it("selects a healthy HTTP executor", function () {
    const executor =
      selectExecutor(
        executors,
        "HTTP_CALL",
      );

    expect(
      executor?.address,
    ).to.equal("executor-2");
  });

  it("does not select an unhealthy executor", function () {
    const executor =
      selectExecutor(
        executors,
        "HTTP_CALL",
      );

    expect(
      executor?.healthy,
    ).to.equal(true);
  });

  it("does not use another capability", function () {
    const executor =
      selectExecutor(
        executors,
        "HTTP_CALL",
      );

    expect(
      executor?.capability,
    ).to.equal("HTTP_CALL");
  });

  it("returns undefined when none match", function () {
    const executor =
      selectExecutor(
        executors,
        "JSON_PARSE",
      );

    expect(executor)
      .to.equal(undefined);
  });
});
