import { describe, expect, it } from "vitest";

import { JSONPlaceholder } from "./JSONPlaceholder";

describe("JSONPlaceholder", () => {
  it("Type is instanceof", async () => {
    const jsonplaceholder = new JSONPlaceholder();

    expect(jsonplaceholder).toBeInstanceOf(JSONPlaceholder);
  });

  it("Return clear type is boolean", async () => {
    const jsonplaceholder = new JSONPlaceholder();

    expect(await jsonplaceholder.clear()).toBeTypeOf("boolean");
  });
});
