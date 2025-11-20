import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { Button } from "./Button";

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>Header</CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};
