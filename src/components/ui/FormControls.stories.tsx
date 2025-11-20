import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";

const meta: Meta = {
  title: "Forms/Controls",
};

export default meta;
type Story = StoryObj;

export const DefaultStates: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <Input
        id="name"
        label="Full name"
        placeholder="Essam Shadadi"
        hint="This will appear on your profile."
      />

      <Textarea
        id="bio"
        label="Bio"
        placeholder="Write a short introduction..."
        hint="Max 200 characters."
      />

      <Select
        id="role"
        label="Role"
        defaultValue=""
        hint="Select your primary role."
      >
        <option value="" disabled>
          Select…
        </option>
        <option value="frontend">Frontend Engineer</option>
        <option value="fullstack">Fullstack Developer</option>
        <option value="designer">Product Designer</option>
      </Select>
    </div>
  ),
};

export const ErrorStates: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        error="Please enter a valid email address."
      />

      <Textarea
        id="message"
        label="Message"
        placeholder="Type your message…"
        error="Message is required."
      />

      <Select
        id="country"
        label="Country"
        defaultValue=""
        error="Please select a country."
      >
        <option value="" disabled>
          Select…
        </option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="lb">Lebanon</option>
      </Select>
    </div>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <Input
        id="username"
        label="Username"
        value="nexkor-admin"
        disabled
        hint="Usernames cannot be changed."
      />

      <Textarea
        id="notes"
        label="Notes"
        value="Locked for review."
        disabled
      />

      <Select id="status" label="Status" value="active" disabled>
        <option value="active">Active</option>
      </Select>
    </div>
  ),
};
