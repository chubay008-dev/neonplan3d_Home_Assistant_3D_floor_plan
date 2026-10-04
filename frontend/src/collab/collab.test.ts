import assert from "node:assert/strict";
import { test, afterEach } from "node:test";
import { generateDemoDelta, simulateRemoteChange } from "./collab.ts";

test("generateDemoDelta returns valid delta", () => {
  const delta = generateDemoDelta();
  assert.ok(delta.operationId > 0);
  assert.ok(delta.path?.includes("rooms"));
  assert.ok(Object.keys(delta.newValue ?? {}).length > 0);
  assert.ok(delta.timestamp > 0);
});

test("simulateRemoteChange changes timestamp", async () => {
  const originalDelta = generateDemoDelta();
  await new Promise<void>((resolve) => {
    simulateRemoteChange(originalDelta, (received) => {
      assert.ok(received.timestamp > originalDelta.timestamp);
      resolve();
    });
  });
});

afterEach(() => {
  // Cleanup if needed
});