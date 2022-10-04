/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Card from "./Card";

test("render card when ckickable, gray color and s size ", () => {
  render(
    <Card children={undefined} color={"gray"} size={"s"} clickable={true} />
  );
});

test("render card when ckickable, gray color and m size", () => {
  render(
    <Card children={undefined} color={"gray"} size={"m"} clickable={true} />
  );
});

test("render card when ckickable, gray color and l size", () => {
  render(
    <Card children={undefined} color={"gray"} size={"l"} clickable={true} />
  );
});

test("render card when not ckickable, gray color and s size ", () => {
  render(
    <Card children={undefined} color={"gray"} size={"s"} clickable={false} />
  );
});

test("render card when not ckickable, gray color and m size", () => {
  render(
    <Card children={undefined} color={"gray"} size={"m"} clickable={false} />
  );
});

test("render card when not ckickable, gray color and l size", () => {
  render(
    <Card children={undefined} color={"gray"} size={"l"} clickable={false} />
  );
});

test("render card when ckickable, white color and s size ", () => {
  render(
    <Card children={undefined} color={"white"} size={"s"} clickable={true} />
  );
});

test("render card when ckickable, white color and m size", () => {
  render(
    <Card children={undefined} color={"white"} size={"m"} clickable={true} />
  );
});

test("render card when ckickable, white color and l size", () => {
  render(
    <Card children={undefined} color={"white"} size={"l"} clickable={true} />
  );
});

test("render card when not ckickable, white color and s size ", () => {
  render(
    <Card children={undefined} color={"white"} size={"s"} clickable={false} />
  );
});

test("render card when not ckickable, white color and m size", () => {
  render(
    <Card children={undefined} color={"white"} size={"m"} clickable={false} />
  );
});

test("render card when not ckickable, white color and l size", () => {
  render(
    <Card children={undefined} color={"white"} size={"l"} clickable={false} />
  );
});
